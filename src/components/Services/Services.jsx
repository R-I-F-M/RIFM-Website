import React from 'react';
import { GiDeliveryDrone } from "react-icons/gi";
import { SiDrone } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import CardWithEffects from './CardWithEffects';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const ServiceData = [
  {
    title: 'AI-Powered Pesticide-Spraying UAVs',
    description: 'Advanced drones using AI and computer vision for precise, targeted pesticide application, ensuring optimal coverage and reduced chemical waste',
    icon: <GiArtificialIntelligence className='text-7xl' />,
  },
  {
    title: 'Integrated Analytics and Personalized App For Farmers',
    description: 'Detailed crop insights delivered through intuitive apps, empowering farmers with actionable analytics for efficient crop management and planning.',
    icon: <GiDeliveryDrone className='text-7xl' />,
  },
  {
    title: 'Nozzle-Tilting Technology',
    description: 'Innovative spraying systems with intelligent nozzle-tilting for accurate application, minimizing waste and enhancing agricultural efficiency.',
    icon: <SiDrone className='text-7xl' />,
  },
  {
    title: 'Next-Gen UAVs for Precision & Versatility',
    description: 'UAV solutions for surveying, detection, security, delivery, and medical supply, redefining the potential of autonomous drone technology',
    icon: <GiArtificialIntelligence className='text-7xl' />,
  },
  {
    title: 'ATE-Drone Technology',
    description: 'Advanced drones leveraging Actual Transpiration and Evaporation technology to identify and mitigate unethical water extraction in agricultural lands.',
    icon: <GiDeliveryDrone className='text-7xl' />,
  },
  {
    title: 'AI-Integrated Dedicated Ground Control Stations',
    description: 'Advanced, AI-powered ground control stations designed for efficient, real-time monitoring, control, and management of UAV operations with enhanced automation and intelligence',
    icon: <SiDrone className='text-7xl' />,
  },
];

const Services = () => {
  return (
    <div className='bg-gradient-to-br from-black via-gray-800 to-black text-white py-16' style={{ paddingTop: '2rem' }}>
      <div className="container mx-auto px-4">
        <Zoom>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl text-center uppercase mb-10 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg'>
            Our Services
          </h1>
        </Zoom>
        <div className='min-h-[400px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {ServiceData.map((data, index) => (
              <Fade triggerOnce duration={500} key={index}>
                <CardWithEffects>
                  <Slide direction="up">
                    <div className='flex flex-col items-center justify-center h-full'>
                      {data.icon}
                      <h1 className='text-2xl font-extrabold mt-4 mb-2 transition-colors duration-300 group-hover:text-yellow-400'>{data.title}</h1>
                      <p className='text-md transition-colors duration-300 group-hover:text-yellow-400'>
                        {data.description}
                      </p>
                    </div>
                  </Slide>
                </CardWithEffects>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
