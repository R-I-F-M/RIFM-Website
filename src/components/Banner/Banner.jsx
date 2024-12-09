import React from 'react';
import droneImg from "../../assets/DRONE.png";

const Banner = () => {
  return (
    <div className='bg-gradient-to-br from-black via-gray-800 to-black text-white py-16 relative z-40'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
          <div className='flex justify-center'>
            <img src={droneImg} alt="RIFM drone img" className='w-full lg:w-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 drop-shadow-2xl' />
          </div>
          <div className='space-y-4 xl:pr-36 p-6'>
            <p className='text-yellow-300 uppercase animate-pulse'>OUR MISSION</p>
            <h1 className='uppercase text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md'>
            Revolutionizing Industries with AI-Driven Drone Solutions for a Smarter, Sustainable Future            </h1>
            <p className='animate-fadeIn text-lg lg:text-xl'>
            Our mission is to transform industries with AI-powered drone technology, offering precision,
 efficiency, and sustainability across agriculture, security, logistics, and more. We focus on
 delivering practical, data-driven solutions that empower businesses and communities to optimize
 operations and make smarter, informed decisions.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
