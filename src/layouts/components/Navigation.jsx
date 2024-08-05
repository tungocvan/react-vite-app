// Navigation.jsx
import React from 'react';
// import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Following', href: '/following' },
  { name: 'Profile', href: '/profile' },
  { name: 'Canlendar', href: '/canlendar' },
  { name: 'Reports', href: '/reports' },
];

const Navigation = ({ location }) => (
  <>
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={`rounded-md px-3 py-2 text-sm font-medium ${
          location.pathname === item.href
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
        aria-current={location.pathname === item.href ? 'page' : undefined}
      >
        {item.name}
      </a>
    ))}
  </>
);

export default Navigation;
