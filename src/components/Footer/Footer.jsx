import React, { memo } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import FooterImg from "../../assets/Footerlogo.png";
import { Slide, Bounce, Fade } from "react-awesome-reveal";

const Footer = memo(() => {
  return (
    <footer className='bg-gradient-to-t from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <Slide direction="up" duration={1500} easing="ease-in-out" triggerOnce>
            <div className='flex flex-col space-y-4'>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text'>
                ABOUT US
              </h2>
              <p className="text-lg leading-relaxed">
                We're a company dedicated to revolutionizing agriculture with cutting-edge drone technology. Our mission is to provide precise, efficient, and sustainable solutions for modern farming challenges.
              </p>
              <img 
                src={FooterImg} 
                alt="Logo" 
                className='w-48 h-auto hover:scale-110 transition-transform duration-500 pt-[188px] hover:animate-spin-slow' 
                style={{ transition: 'transform 2s linear', transform: 'rotateY(0deg)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'rotateY(360deg)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'rotateY(0deg)'}
              />
            </div>
          </Slide>
          <Slide direction="up" duration={1500} easing="ease-in-out" triggerOnce>
            <div className='flex flex-col space-y-4'>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text'>
                QUICK LINKS
              </h2>
              <ul className='space-y-2 text-lg'>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Privacy Policy</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Use of Cookies</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Terms of Use</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Business Information</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Other Regions / English</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 transition-colors duration-300'>Feedback on web experience</a></li>
              </ul>
            </div>
          </Slide>
          <Slide direction="up" duration={1500} easing="ease-in-out" triggerOnce>
            <div className='flex flex-col space-y-4'>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text'>
                GET IN TOUCH
              </h2>
              <form className='bg-gray-800 p-8 rounded-lg shadow-2xl space-y-6'>
                <div>
                  <label className='block text-lg font-bold mb-2' htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  />
                </div>
                <div>
                  <label className='block text-lg font-bold mb-2' htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  />
                </div>
                <div>
                  <label className='block text-lg font-bold mb-2' htmlFor='discuss'>Discuss</label>
                  <textarea
                    id='discuss'
                    rows='4'
                    className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='flex items-center justify-center mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 hover:from-purple-600 hover:to-yellow-400 text-white font-bold py-3 px-6 rounded-full shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105'
                  >
                    <FaPaperPlane className='mr-2 animate-bounce' /> SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </Slide>
          <Slide direction="up" duration={1500} easing="ease-in-out" triggerOnce>
            <div className='flex flex-col space-y-4'>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text'>
                FOLLOW US
              </h2>
              <div className='flex space-x-4'>
                <Bounce duration={1000} easing="ease-in-out">
                  <a href="https://www.linkedin.com/company/researchinflyingmotion" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-yellow-500 transition-transform duration-500 hover:scale-125'><FaLinkedin /></a>
                  <a href="#" className='text-2xl hover:text-yellow-500 transition-transform duration-500 hover:scale-125'><FaFacebook /></a>
                  <a href="#" className='text-2xl hover:text-yellow-500 transition-transform duration-500 hover:scale-125'><FaTwitter /></a>
                  <a href="#" className='text-2xl hover:text-yellow-500 transition-transform duration-500 hover:scale-125'><FaInstagram /></a>
                </Bounce>
              </div>
            </div>
          </Slide>
        </div>
        <Fade duration={2000} easing="ease-in-out" triggerOnce>
          <div className='mt-12 text-center border-t border-gray-700 pt-4'>
            <p>&copy; 2024 RESEARCH IN FLYING MOTION. All rights reserved.</p>
          </div>
        </Fade>
      </div>
    </footer>
  );
});

export default Footer;
