// UserNavigationDropdown.jsx
import React from 'react';
// import { Link } from 'react-router-dom';

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/logout' },
];

const UserNavigationDropdown = () => (
  <>
    {userNavigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
      >
        {item.name}
      </a>
    ))}
  </>
);

export default UserNavigationDropdown;
