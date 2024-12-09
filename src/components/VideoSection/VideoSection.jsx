import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Fade, Zoom, Bounce } from "react-awesome-reveal";
import DroneVideo from "../../assets/Video.mp4";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current.play();
    }, 0);
  };

  const handleVideoClick = () => {
    videoRef.current.pause();
    setShowVideo(false);
  };

  return (
    <div id="videoSection" className='relative z-40 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-12">
        <Zoom>
          <h2 className='uppercase text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text mb-10'>
            Watch Our Latest Drone Footage
          </h2>
        </Zoom>
        {!showVideo ? (
          <Bounce>
            <button
              onClick={handlePlayClick}
              className="flex items-center bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 hover:from-purple-600 hover:to-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition-all duration-500 ease-in-out hover:scale-125"
            >
              <FaPlay className='mr-2 animate-ping' /> Play Video
            </button>
          </Bounce>
        ) : (
          <Fade>
            <div className="relative w-full lg:w-3/4 my-4 mx-auto">
              <video
                className="w-full h-auto rounded-lg shadow-2xl cursor-pointer"
                ref={videoRef}
                onClick={handleVideoClick}
                loop
                autoPlay
              >
                <source src={DroneVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-lg pointer-events-none"></div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
