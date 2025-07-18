'use client';

import { Draggable } from '@hello-pangea/dnd';
import { FaPaperclip, FaComment, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function TaskCard({ task, index }) {
  const statusColor =
    task.status === 'Approved'
      ? 'bg-green-500'
      : task.status === 'Reject'
      ? 'bg-red-500'
      : task.status === 'In Progress'
      ? 'bg-yellow-500'
      : 'bg-gray-400';
  const collaborators = task.collaborators || [];
  const extraCollaborators = collaborators.length > 3 ? collaborators.length - 3 : 0;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 bg-white border rounded shadow mb-2"
        >
          {task.hasImage && (
            <Image
              src="https://via.placeholder.com/50" // Placeholder image
              alt="Task image"
              width={50}
              height={50}
              className="rounded mb-2"
            />
          )}
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${statusColor}`} />
            <div className="font-medium flex-1">{task.title}</div>
          </div>
          <div className="flex mt-1">
            {collaborators.slice(0, 3).map((collab, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-gray-300 rounded-full mr-1 flex items-center justify-center text-xs"
              >
                {collab[0]}
              </div>
            ))}
            {extraCollaborators > 0 && (
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-1 flex items-center justify-center text-xs">
                +{extraCollaborators}
              </div>
            )}
          </div>
          <hr className="my-1 border-gray-300" />
          <div className="flex space-x-2 text-sm text-gray-600">
            {task.attachments && (
              <div className="flex items-center">
                <FaPaperclip className="mr-1" /> {task.attachments}
              </div>
            )}
            {task.comments && (
              <div className="flex items-center">
                <FaComment className="mr-1" /> {task.comments}
              </div>
            )}
            {task.dueDate && (
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1" /> Due: {task.dueDate}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}

