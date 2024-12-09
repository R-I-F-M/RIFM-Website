import React from 'react';

const CardWithEffects = ({ children }) => {
  return (
    <div
      className='bg-zinc-900 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[350px] mx-auto group'
      style={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: 'translateY(0)',
        boxShadow: 'none',
        minHeight: '550px', // Increased height to ensure all text is visible
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center content horizontally
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </div>
  );
};

export default CardWithEffects;
