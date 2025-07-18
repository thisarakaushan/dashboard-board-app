import { create } from 'zustand';

const useStore = create((set) => ({
  tasks: [
    { id: '1', title: 'User Interview', status: 'To Do', dueDate: 'Tomorrow', collaborators: ['user1', 'user2'] },
    { id: '2', title: 'Design UI', status: 'In Progress', dueDate: 'Tomorrow', priority: 'High', collaborators: ['user1', 'user2', 'user3', 'user4'] },
    { id: '3', title: 'Research Prototype', status: 'Approved', comments: 35, likes: 243, attachments: 2, collaborators: ['user1'] },
    { id: '4', title: 'Group Management', status: 'Reject', comments: 329, attachments: 1, collaborators: ['user1', 'user2', 'user3'] },
    { id: '5', title: 'Design System', status: 'To Do', comments: 3, reports: 8, collaborators: ['user1'] },
    { id: '6', title: 'Check Clients Feedback', status: 'In Progress', dueDate: '02 April 2022', collaborators: ['user1', 'user2'] },
  ],
  setTasks: (tasks) => set({ tasks }),
}));
export default useStore; 

// import { create } from 'zustand';

// const useStore = create((set) => ({
//   tasksByStatus: {
//     'To Do': [
//       { id: '1', title: 'User Interview', dueDate: 'Tomorrow', collaborators: ['Alice', 'Bob'] },
//       { id: '5', title: 'Design System', comments: 3, reports: 2, collaborators: ['Daisy'] },
//     ],
//     'In Progress': [
//       { id: '2', title: 'Design UI', dueDate: 'Tomorrow', priority: 'High', collaborators: ['John', 'Sam', 'Leo', 'Tom'] },
//       { id: '6', title: 'Check Clients Feedback', dueDate: '22 April, 2022', collaborators: ['Mia', 'Ken'] },
//     ],
//     'Approved': [
//       { id: '3', title: 'Research Prototype', comments: 35, likes: 243, attachments: 2, collaborators: ['Ella'] },
//       { id: '7', title: 'Detail Page', comments: 6, likes: 28, collaborators: ['Zoe'] },
//     ],
//     'Reject': [
//       { id: '4', title: 'Group Management', comments: 329, attachments: 1, collaborators: ['Sam', 'Max', 'Zoe'] },
//       { id: '8', title: 'Slider Controls', collaborators: ['Rick'] },
//     ],
//   },

//   setTasksByStatus: (updated) => set({ tasksByStatus: updated }),

//   moveTask: ({ source, destination }) =>
//     set((state) => {
//       const sourceList = [...state.tasksByStatus[source.droppableId]];
//       const destinationList =
//         source.droppableId === destination.droppableId
//           ? sourceList
//           : [...state.tasksByStatus[destination.droppableId]];

//       const [moved] = sourceList.splice(source.index, 1);
//       moved.status = destination.droppableId;
//       destinationList.splice(destination.index, 0, moved);

//       return {
//         tasksByStatus: {
//           ...state.tasksByStatus,
//           [source.droppableId]: sourceList,
//           [destination.droppableId]: destinationList,
//         },
//       };
//     }),
// }));

// export default useStore;
