'use client';

import { useState, useEffect } from 'react';
import useStore from '@/store/store';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import SideMenu from '@/components/SideMenu';
import Header from '@/components/Header';
import BodyUpper from '@/components/BodyUpper';
import TaskCard from '@/components/TaskCard';

const statuses = ['To Do', 'In Progress', 'Approved', 'Reject'];

export default function Dashboard() {
  const { tasks, setTasks } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('Sport Xi Project');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    else setTasks([
      { id: '1', title: 'User Interview', status: 'To Do', dueDate: 'Tomorrow', collaborators: ['user1', 'user2'] },
      { id: '2', title: 'Design UI', status: 'In Progress', dueDate: 'Tomorrow', priority: 'High', collaborators: ['user1', 'user2', 'user3', 'user4'] },
      { id: '3', title: 'Research Prototype', status: 'Approved', comments: 35, likes: 243, attachments: 2, collaborators: ['user1'] },
      { id: '4', title: 'Group Management', status: 'Reject', comments: 329, attachments: 1, collaborators: ['user1', 'user2', 'user3'] },
      { id: '5', title: 'Design System', status: 'To Do', comments: 3, reports: 8, collaborators: ['user1'] },
      { id: '6', title: 'Check Clients Feedback', status: 'In Progress', dueDate: '02 April 2022', collaborators: ['user1', 'user2'] },
    ]);
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

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreateBoard={() => alert('Create new board clicked')}
      />
      <div className="flex flex-1">
        <SideMenu selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
        <main className="flex-1 p-4 overflow-auto">
          {selectedBoard === 'Sport Xi Project' && (
            <>
              <BodyUpper />
              <div className="mt-4">
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="flex space-x-4">
                    {statuses.map((status) => (
                      <Droppable key={status} droppableId={status}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="w-64 flex-shrink-0 bg-white p-2 rounded shadow"
                          >
                            <h2
                              className={`text-xl font-semibold mb-2 p-2 rounded-t ${
                                status === 'Approved'
                                  ? 'bg-green-500 text-white'
                                  : status === 'Reject'
                                  ? 'bg-red-500 text-white'
                                  : status === 'In Progress'
                                  ? 'bg-yellow-500 text-white'
                                  : 'bg-gray-400 text-white'
                              }`}
                            >
                              {status}
                            </h2>
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
          )}
        </main>
      </div>
    </div>
  );
}