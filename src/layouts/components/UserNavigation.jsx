// UserNavigation.jsx
import React from 'react';
//import { Link } from 'react-router-dom';

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/logout' },
];

const UserNavigation = ({ userMenuOpen, setUserMenuOpen, userMenuRef }) => (
  <div className="relative ml-3" ref={userMenuRef}>
    <button
      type="button"
      className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      aria-expanded={userMenuOpen}
      aria-haspopup="true"
      onClick={() => setUserMenuOpen(!userMenuOpen)}
    >
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </button>
    {userMenuOpen && (
      <div
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex="-1"
      >
        {userNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
          >
            {item.name}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default UserNavigation;
