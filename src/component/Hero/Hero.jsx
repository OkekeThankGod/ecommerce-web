import React from 'react';
import hand_icon from '../../assets/images/Assets/hand_icon.png';
import arrow_icon from '../../assets/images/Assets/arrow.png';
import hero_image from '../../assets/images/Assets/hero_image.png';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]text-white">
      
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">New Products Only</h2>
        
        <div className="text-6xl font-extrabold text-gray-800">
          <div className="flex items-center gap-2">
            <p className="text-blue-600">New</p>
            <img src={hand_icon} alt="Hand Icon" className="w-10 h-10" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>

        {/* Button */}
        <div className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition duration-300 w-max">
          <span className="text-lg font-medium">Latest Collections</span>
          <img src={arrow_icon} alt="Arrow" className="ml-3 w-3 h-6" />
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={hero_image} alt="Hero" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
      </div>

    </div>
  );
}
