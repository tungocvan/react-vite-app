import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import arrowLeft from "~/assets/arrow-left.png"
import arrowRight from "~/assets/arrow-right.png"

const DefaultLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar visibility

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-full flex">
     <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> 
    
    <div className="flex-1">
    <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        userMenuOpen={userMenuOpen}
        setUserMenuOpen={setUserMenuOpen}
        userMenuRef={userMenuRef}
      />   
      
      <button onClick={toggleSidebar} className={`hidden md:block  text-2xl text-[white] hover:text-600 focus:outline-none absolute bottom-[10px] ${sidebarOpen ? 'left-[215px]': 'left-[10px]'} `}>
            {sidebarOpen ? 
              <img src={arrowLeft} width={'24px'} height={'24px'}/> : <img src={arrowRight} width={'24px'} height={'24px'}/>}
      </button>
      <main>
      <div className={`flex ${sidebarOpen ? 'ml-0 md:ml-[260px]' : 'ml-0 justify-center'}`}>
        {children}
      </div>

      </main>
    </div>
  </div>
  );
};

export default DefaultLayout;
