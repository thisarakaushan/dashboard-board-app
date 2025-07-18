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

// 'use client';

// import { Draggable } from '@hello-pangea/dnd';
// import { FaPaperclip, FaComment, FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';

// export default function TaskCard({ task, index }) {
//   const collaborators = task.collaborators || [];
//   const extra = collaborators.length > 3 ? collaborators.length - 3 : 0;

//   return (
//     <Draggable draggableId={task.id} index={index}>
//       {(provided) => (
//         <div
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//           className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow"
//         >
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-xs uppercase text-gray-400">{task.priority ? 'Design' : 'Other'}</span>
//             <span className={`text-xs px-2 py-0.5 rounded-full ${task.priority === 'High'
//               ? 'bg-red-100 text-red-600'
//               : task.priority === 'Medium'
//               ? 'bg-yellow-100 text-yellow-600'
//               : 'bg-gray-100 text-gray-600'
//             }`}>
//               {task.priority || 'Low'}
//             </span>
//           </div>
//           <div className="font-semibold mb-2">{task.title}</div>

//           {task.hasImage && (
//             <div className="mb-2 h-28 bg-gray-300 rounded"></div>
//           )}

//           <div className="flex items-center mb-2">
//             {collaborators.slice(0, 3).map((user, i) => (
//               <div key={i} className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-1">
//                 {user[0]}
//               </div>
//             ))}
//             {extra > 0 && (
//               <div className="w-6 h-6 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center">
//                 +{extra}
//               </div>
//             )}
//           </div>

//           <div className="flex flex-wrap gap-3 text-xs text-gray-500">
//             {task.attachments && (
//               <div className="flex items-center">
//                 <FaPaperclip className="mr-1" /> {task.attachments}
//               </div>
//             )}
//             {task.comments && (
//               <div className="flex items-center">
//                 <FaComment className="mr-1" /> {task.comments}
//               </div>
//             )}
//             {task.dueDate && (
//               <div className="flex items-center">
//                 <FaCalendarAlt className="mr-1" /> {task.dueDate}
//               </div>
//             )}
//             {task.reports && (
//               <div className="flex items-center text-red-500 font-semibold">
//                 <FaExclamationCircle className="mr-1" /> {task.reports} Reports
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </Draggable>
//   );
// }
