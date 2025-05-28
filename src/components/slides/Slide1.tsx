
import React from 'react';

const Slide1 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden flex items-center justify-between p-8">
      {/* City Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
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
          <polygon points="315,10 290,40 340,40" fill="white" />
        </svg>
      </div>

      {/* Title (Left Side) */}
      <div className="flex-1 z-10">
        <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
          <div className="text-4xl mb-2">WHAT IS THE</div>
          <div className="text-yellow-300 text-7xl">STOCK MARKET?</div>
        </h1>
      </div>

      {/* Instructor (Right Side) */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-48 h-64 relative">
          {/* Instructor Figure */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {/* Body */}
            <div className="w-16 h-20 bg-purple-500 rounded-t-lg relative">
              {/* Arms */}
              <div className="absolute -left-3 top-4 w-6 h-3 bg-purple-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -right-3 top-4 w-6 h-3 bg-purple-400 rounded-full transform rotate-45"></div>
            </div>
            {/* Head */}
            <div className="w-12 h-12 bg-peach-200 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-2 border-white">
              {/* Hair */}
              <div className="absolute -top-2 -left-2 w-16 h-10 bg-amber-700 rounded-full"></div>
              {/* Face */}
              <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stock Chart Accent */}
        <div className="absolute top-8 right-8 opacity-30">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <polyline
              fill="none"
              stroke="white"
              strokeWidth="3"
              points="10,50 20,30 30,40 40,20 50,25 60,10 70,15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
