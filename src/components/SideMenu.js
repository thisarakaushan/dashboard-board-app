'use client';

import { useState } from 'react';
import { FaUserCircle, FaList, FaTachometerAlt, FaComments, FaCalendarAlt, FaUsers, FaQuestionCircle, FaSignOutAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
        <div className="w-64 bg-white shadow-md p-4 h-full flex flex-col justify-between">
            <div>
                <div className="mb-4">
                    <div className="flex items-center bg-gray-200 rounded px-2 py-2">
                        <FaUserCircle className="text-gray-500 text-2xl mr-2" />
                        <div className="flex flex-col flex-1">
                            <span className="text-xs text-gray-500">Workspace</span>
                            <span className="bg-gray-200 text-gray-700 text-sm outline-none w-full">
                                Root folder
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 ml-2" />
                    </div>
                </div>
                {navItems.map((item) => (
                    <div key={item.name} className="mb-2">
                        {item.submenu ? (
                            <div>
                                <div
                                    className={`flex items-center p-2 rounded cursor-pointer ${selectedBoard && item.submenu.includes(selectedBoard) ? 'text-blue-600' : 'hover:bg-gray-100'
                                        }`}
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
                                                className={`p-1 hover:bg-gray-100 rounded cursor-pointer ${selectedBoard === sub ? 'text-blue-600' : ''
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
                            <div className={`flex items-center p-2 rounded ${selectedBoard === item.name ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
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
            </div>
            <div>
                <div className="flex items-center p-2 hover:bg-gray-100 rounded mt-2">
                    <FaQuestionCircle className="mr-2" />
                    Support
                </div>
                <div className="flex items-center bg-gray-700 p-2 rounded-md text-white hover:bg-gray-800 cursor-pointer mt-2">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </div>
            </div>
        </div>
    );
}