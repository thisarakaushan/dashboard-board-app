// Updated `Dashboard` and `TaskCard` components with drag-and-drop logic retained and UI improved based on the reference image.

'use client';

import { useState, useEffect } from 'react';
import useStore from '@/store/store';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import SideMenu from '@/components/SideMenu';
import Header from '@/components/Header';
import BodyUpper from '@/components/BodyUpper';
import TaskCard from '@/components/TaskCard';
import { Plus, MoreVertical } from 'lucide-react';

const statuses = ['To Do', 'In Progress', 'Approved', 'Reject'];

export default function Dashboard() {
  const { tasks, setTasks } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('Sport Xi Project');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const newTasks = [...tasks];
    const [movedTask] = newTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    newTasks.splice(destination.index, 0, movedTask);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBodyContent = () => {
    switch (selectedBoard) {
      case 'Sport Xi Project':
        return (
          <>
            <BodyUpper />
            <div className="mt-4 bg-gray-200">
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex space-x-4 overflow-x-auto">
                  {statuses.map((status) => (
                    <Droppable key={status} droppableId={status}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="w-72 flex-shrink-0 p-3 rounded-lg border border-gray-200"
                        >
                          <div
                            className={`flex items-center justify-between mb-3 p-2 rounded text-white font-semibold text-sm ${
                              status === 'Approved'
                                ? 'bg-green-500'
                                : status === 'Reject'
                                ? 'bg-red-500'
                                : status === 'In Progress'
                                ? 'bg-yellow-500'
                                : 'bg-gray-400'
                            }`}
                          >
                            <span>{status}</span>
                            <div className="flex gap-1">
                              <Plus className="w-4 h-4 cursor-pointer" />
                              <MoreVertical className="w-4 h-4 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            {filteredTasks
                              .filter((task) => task.status === status)
                              .map((task, index) => (
                                <TaskCard key={task.id} task={task} index={index} />
                              ))}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  ))}
                </div>
              </DragDropContext>
            </div>
          </>
        );
      default:
        return <div className="p-4">Select a board to view content</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreateBoard={() => alert('Create new board clicked')}
      />
      <div className="flex flex-1">
        <SideMenu selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
        <main className="flex-1 p-4 overflow-auto">{getBodyContent()}</main>
      </div>
    </div>
  );
}
