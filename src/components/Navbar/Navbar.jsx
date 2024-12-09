import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa"; 
import Logo from "../../assets/logo.png";
import ButtonImage from '../../assets/icon.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    const updateView = () => {
      const newIsDesktop = window.innerWidth >= 1024;
      setIsDesktop(newIsDesktop);
      setSidebarOpen(false); 
    };

    window.addEventListener('resize', throttle(updateView, 200));
    updateView(); 

    return () => window.removeEventListener('resize', updateView);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      closeSidebar();
    }
  };

  return (
    <>
      <div className='fixed top-0 right-0 w-full z-50 bg-black/30 backdrop-blur-lg py-4 shadow-lg'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 text-white font-extrabold text-3xl'>
              <img src={Logo} alt="RIFM Logo" className='w-32 h-auto transition-transform duration-300 hover:scale-110' />
            </div>
            <div className='hidden sm:flex items-center gap-4'>
              <ul className="flex items-center gap-6 text-xl py-4">
                <li>
                  <a onClick={() => handleScrollToSection('Hero')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    HOME
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollToSection('services')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    OUR SERVICES
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollToSection('banner')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    OUR VISION
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollToSection('videoSection')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    OUR AIM
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollToSection('blogs')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    BLOGS
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollToSection('contact')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                    GET IN TOUCH
                  </a>
                </li>
              </ul>
              <button className="hover:animate-spin transition-transform duration-500 p-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg">
                <img src={ButtonImage} alt="Button" style={{ width: '50px', height: '50px' }} className="hover:scale-110 transition-transform duration-300" />
              </button>
              <a onClick={() => handleScrollToSection('sign-in')} className='cursor-pointer text-white font-bold text-xl border-2 border-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-red-500 hover:from-red-500 hover:to-purple-500 transition-colors duration-200'>
                Sign-In/Log-In
              </a>
            </div>
            <button onClick={toggleSidebar} className='text-white text-3xl sm:hidden' aria-label="Open Menu">
              <TiThMenu />
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-64 h-full bg-black/90 text-white z-50 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}>
        <div className='flex flex-col p-6 space-y-4'>
          <button onClick={toggleSidebar} className='text-white text-2xl self-end' aria-label="Close Menu">
            <FaTimes /> {/* Close icon */}
          </button>
          <ul className='space-y-2 text-xl'>
            <li>
              <a onClick={() => handleScrollToSection('Hero')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                HOME
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('services')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                OUR SERVICES
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('banner')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                OUR VISION
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('videoSection')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                OUR AIM
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('blogs')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                BLOGS
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('contact')} className="cursor-pointer hover:text-sky-500 transition-colors duration-200 hover:underline underline-offset-8 text-white font-bold">
                GET IN TOUCH
              </a>
            </li>
          </ul>
          <button className="hover:animate-spin transition-transform duration-500 p-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg">
            <img src={ButtonImage} alt="Button" style={{ width: '50px', height: '50px' }} className="hover:scale-110 transition-transform duration-300" />
          </button>
          <a onClick={() => handleScrollToSection('sign-in')} className='cursor-pointer text-white font-bold text-xl border-2 border-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-red-500 hover:from-red-500 hover:to-purple-500 transition-colors duration-200'>
            Sign-In/Log-In
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
