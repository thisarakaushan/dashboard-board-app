'use client';

import { useState } from 'react';
import { FaList, FaTachometerAlt, FaComments, FaCalendarAlt, FaUsers, FaQuestionCircle, FaSignOutAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function SideMenu({ selectedBoard, setSelectedBoard }) {
  const [isBoardsOpen, setIsBoardsOpen] = useState(false);
  const navItems = [
    { name: 'Dashboard', icon: FaTachometerAlt },
    {
      name: 'Boards',
      icon: FaList,
      submenu: ['Create routes', 'Delepment React App', 'Sport Xi Project', 'Wordpress theme'],
    },
    { name: 'Messages', icon: FaComments, badge: 3 },
    { name: 'Calendar', icon: FaCalendarAlt },
    { name: 'Team members', icon: FaUsers },
  ];
  const bottomItems = [
    { name: 'Support', icon: FaQuestionCircle },
    { name: 'Logout', icon: FaSignOutAlt },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 h-full">
      <div className="mb-4">
        <select className="w-full p-2 border rounded">
          <option>Root folder</option>
        </select>
      </div>
      {navItems.map((item) => (
        <div key={item.name} className="mb-2">
          {item.submenu ? (
            <div>
              <div
                className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setIsBoardsOpen(!isBoardsOpen)}
              >
                <item.icon className="mr-2" />
                {item.name}
                {isBoardsOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
                {item.badge && (
                  <span className="ml-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              {isBoardsOpen && (
                <div className="ml-4">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub}
                      className={`p-1 text-gray-600 hover:bg-gray-100 rounded cursor-pointer ${
                        selectedBoard === sub ? 'text-blue-600' : ''
                      }`}
                      onClick={() => setSelectedBoard(sub)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center p-2 hover:bg-gray-100 rounded">
              <item.icon className="mr-2" />
              {item.name}
              {item.badge && (
                <span className="ml-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {item.badge}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="mt-auto">
        {bottomItems.map((item) => (
          <div key={item.name} className="flex items-center p-2 hover:bg-gray-100 rounded mt-2">
            <item.icon className="mr-2" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}