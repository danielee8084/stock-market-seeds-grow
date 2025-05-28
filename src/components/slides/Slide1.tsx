
import React from 'react';

const Slide1 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden flex items-center justify-between p-12">
      {/* City Skyline Background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-20">
        <svg viewBox="0 0 800 120" className="w-full h-full">
          <rect x="50" y="40" width="30" height="80" fill="white" />
          <rect x="100" y="20" width="40" height="100" fill="white" />
          <rect x="160" y="50" width="25" height="70" fill="white" />
          <rect x="200" y="30" width="35" height="90" fill="white" />
          <rect x="250" y="60" width="20" height="60" fill="white" />
          <rect x="290" y="10" width="45" height="110" fill="white" />
          <rect x="350" y="45" width="30" height="75" fill="white" />
          <rect x="400" y="25" width="35" height="95" fill="white" />
          <rect x="450" y="55" width="25" height="65" fill="white" />
          <rect x="490" y="35" width="40" height="85" fill="white" />
          <rect x="550" y="50" width="30" height="70" fill="white" />
          <rect x="600" y="20" width="35" height="100" fill="white" />
          <rect x="650" y="40" width="25" height="80" fill="white" />
          <rect x="690" y="30" width="30" height="90" fill="white" />
        </svg>
      </div>

      {/* Main Title */}
      <div className="flex-1 z-10">
        <h1 className="text-white font-bold leading-tight">
          <div className="text-5xl mb-2">WHAT IS THE</div>
          <div className="text-6xl">STOCK</div>
          <div className="text-6xl">MARKET</div>
        </h1>
      </div>

      {/* Instructor Character */}
      <div className="flex-shrink-0 relative z-10 mr-8">
        <div className="relative">
          {/* Character Body */}
          <div className="w-20 h-28 bg-purple-500 rounded-t-3xl relative">
            {/* Arms */}
            <div className="absolute -left-4 top-6 w-8 h-4 bg-purple-400 rounded-full transform -rotate-12"></div>
            <div className="absolute -right-4 top-6 w-8 h-4 bg-purple-400 rounded-full transform rotate-45"></div>
          </div>
          
          {/* Character Head */}
          <div className="w-14 h-14 bg-orange-200 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 border-2 border-white">
            {/* Hair */}
            <div className="absolute -top-3 -left-3 w-20 h-12 bg-amber-800 rounded-full"></div>
            {/* Eyes */}
            <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
            {/* Smile */}
            <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-pink-400 rounded-full"></div>
          </div>
          
          {/* Waving hand */}
          <div className="absolute -top-8 -right-6 w-6 h-6 bg-orange-200 rounded-full">
            <div className="absolute top-1 left-1 w-1 h-2 bg-orange-300 rounded"></div>
            <div className="absolute top-1 left-2 w-1 h-2 bg-orange-300 rounded"></div>
            <div className="absolute top-1 right-1 w-1 h-2 bg-orange-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
