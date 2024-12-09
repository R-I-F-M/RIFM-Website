import React, { Component } from 'react';
import { Zoom, Flip, Bounce } from "react-awesome-reveal";

class Hero extends Component {
  state = {
    hidden: false
  }

  toggleHidden = () => {
    this.setState({ hidden: true }, () => {
      setTimeout(() => {
        this.setState({ hidden: false });
      }, 3000); 
    });
  }

  render() {
    return (
      <div className='bg-black/20 min-h-screen flex flex-col justify-between text-white relative z-40 mb-[-2cm]'>
        <div className='flex-grow flex justify-center items-center p-4'>
          <div className='w-full max-w-screen-xl bg-black/50 p-6 rounded-md shadow-2xl'>
            <div className='space-y-6 text-center'>
              <Zoom>
                <h1 className='text-4xl sm:text-6xl font-extrabold uppercase bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'>
                Empowering Growth with Precision: AI-Enhanced Drones for
                Transformative Farming
                </h1>
              </Zoom>
              <Flip delay={1000} cascade damping={0.1}>
                <p className='text-lg sm:text-xl'>
                RIFM Technologies PVT LTD revolutionizes agriculture with AI-driven UAVs,
 featuring computer vision and intelligent nozzle-tilting for precise, efficient
 pesticide application. Our integrated analytics empower farmers with
 actionable insights for optimized crop management. Beyond agriculture,
 our versatile drones and AI kits redefine capabilities in security, delivery,
 and medical logistics.                </p>
              </Flip>
              <Bounce>
                <div style={{
                  transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
                  opacity: this.state.hidden ? 0 : 1,
                  transform: this.state.hidden ? 'translateY(-40px)' : 'translateY(0)'
                }}>
                  <button
                    className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-red-500 hover:from-green-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-2xl transform transition-all duration-200 ease-in-out hover:scale-105 mx-auto"
                    onClick={this.toggleHidden}
                  >
                    Explore More
                  </button>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
