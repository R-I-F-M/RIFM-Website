import React from 'react';
import droneImg from "../../assets/DRONE2.png";

const Banner2 = () => {
  return (
    <div className='bg-gradient-to-br from-black via-gray-800 to-black text-white py-16 relative z-30'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
          <div className='flex justify-center'>
            <img src={droneImg} alt="RIFM drone img" className='w-full lg:w-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 drop-shadow-2xl' />
          </div>
          <div className='space-y-4 xl:pr-36 p-6'>
            <p className='text-yellow-300 uppercase animate-pulse'>OUR VISION</p>
            <h1 className='uppercase text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md'>
            Shaping the Future with AI-Driven Autonomous Drones for Smarter, Sustainable Innovation            </h1>
            <p className='animate-fadeIn text-lg lg:text-xl'>
            Our vision is to lead the next wave of innovation by leveraging cutting-edge AI technologies,
 transforming industries through autonomous drone systems that enhance precision, automation,
 and real-time decision-making. We aim to build smarter, more sustainable ecosystems, where
 AI-driven drones create a seamless, connected future, revolutionizing how the world interacts
 with technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
