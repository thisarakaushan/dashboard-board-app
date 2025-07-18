'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';
import { FaPlus, FaSearch, FaRandom, FaBell, FaUserCircle } from 'react-icons/fa';

export default function Header({ searchTerm, setSearchTerm, onCreateBoard }) {
  return (
    <div className="bg-white p-4 shadow-md w-full flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Board App Logo" width={40} height={40} />
        <span className="text-blue-600 font-bold">Board App</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onCreateBoard} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <FaPlus className="mr-1" /> Create new board
        </button>
        <input
          type="text"
          placeholder="Search tasks..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaRandom className="text-gray-500 text-xl cursor-pointer" />
        <FaBell className="text-gray-500 text-xl cursor-pointer" />
        <FaUserCircle className="text-gray-500 text-2xl cursor-pointer" />
      </div>
    </div>
  );
}