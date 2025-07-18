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
