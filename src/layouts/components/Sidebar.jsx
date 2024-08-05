import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// Danh sách các mục menu
const menuItems = [
  {
    to: "/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
      </svg>
    ),
    label: "Dashboard",
    hasSubMenu: false,
  },
  {
    to: "/following",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
      </svg>
    ),
    label: "Following",
    hasSubMenu: false,
  },
  {
    to: "/profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
      </svg>
    ),
    label: "Profile",
    hasSubMenu: false,
  },
  {
    to: "/canlendar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
      </svg>
    ),
    label: "Canlendar",
    hasSubMenu: false,
  },
  {
    to: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
      </svg>
    ),
    label: "Documents",
    hasSubMenu: true,
    subMenu: [
      { to: "/documents", label: "Documents1" },
      { to: "/documents", label: "Documents2" },
    ],
  },
  {
    to: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
      </svg>
    ),
    label: "Reports",
    hasSubMenu: true,
    subMenu: [
      { to: "/reports", label: "Reports1" },
      { to: "/reports", label: "Reports2" },
    ],
  },
];

// Danh sách các nhóm
const teams = [
  { to: "#", icon: "H", label: "Heroicons" },
  { to: "#", icon: "T", label: "Tailwind Labs" },
  { to: "#", icon: "W", label: "Workcation" },
];

// Component Sidebar
const Sidebar = ({ isOpen   }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index === activeMenu ? null : index);
  };

  const handleSubMenuClick = (subIndex) => {
    setActiveSubMenu(subIndex === activeSubMenu ? null : subIndex);
  };

  return (
    <div className={`hidden md:block bg-green-800 text-white h-screen p-4 transition-transform duration-300 ease-in-out transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } fixed inset-y-0 left-0 w-64 bg-green-800 text-white flex flex-col`}
    >
      <div className="flex items-center mb-6">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
          alt="Your Company"
        />        
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.to}
                className={`flex items-center p-3 w-full text-left rounded-md ${
                  activeMenu === index ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => handleMenuClick(index)}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="flex-grow">{item.label}</span>
                {item.hasSubMenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-5 w-5 ml-2 transition-transform ${
                      activeMenu === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"></path>
                  </svg>
                )}
              </a>
              {item.hasSubMenu && activeMenu === index && (
                <ul className="ml-6 space-y-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.to}
                        className={`flex items-center p-3 w-full text-left rounded-md ${
                          activeSubMenu === subIndex ? "bg-gray-600" : "hover:bg-gray-600"
                        }`}
                        onClick={() => handleSubMenuClick(subIndex)}
                      >
                        <span className="mr-3">{item.icon}</span>
                        <span>{subItem.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 px-3">
          <h2 className="text-gray-400 text-sm mb-2">Your teams</h2>
          <ul className="space-y-2">
            {teams.map((team, index) => (
              <li key={index}>
                <a
                  href={team.to}
                  className="flex items-center p-3 hover:bg-gray-700 rounded-md"
                >
                  <span className="mr-3 bg-gray-600 text-white rounded-full h-6 w-6 flex items-center justify-center">
                    {team.icon}
                  </span>
                  <span>{team.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 px-3">
          <a href="#" className="flex items-center p-3 hover:bg-gray-700 rounded-md">
            <img
              alt="Your profile"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-8 w-8 rounded-full mr-3"
            />
            <span>Your profile</span>
            <span className="ml-auto text-gray-400">Tom Cook</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
