import React from 'react';

export default function NewsLetter() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] py-20 flex flex-col items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] ">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Get <span className="text-blue-600">TopNotch</span> Offers On Your Email
        </h1>
        <p className="text-gray-600 mb-5">
          Subscribe to our newsletter and stay in tune
        </p>
        
        <div className="flex w-full max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
