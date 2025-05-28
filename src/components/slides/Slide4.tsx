
import React from 'react';

const Slide4 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex flex-col items-center justify-center">
      {/* Main Visual - Seed Growing */}
      <div className="flex items-end justify-center gap-12 mb-12">
        {/* Stage 1 - Seed */}
        <div className="text-center">
          <div className="w-24 h-32 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-24 h-8 bg-amber-800 rounded-lg"></div>
            
            {/* Seed in soil */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            
            {/* Small watering can */}
            <div className="absolute top-2 right-2">
              <div className="w-6 h-4 bg-blue-400 rounded-l-full relative">
                <div className="absolute -top-1 right-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute -right-2 top-1 w-3 h-1 bg-blue-500 rounded"></div>
                {/* Water drops */}
                <div className="absolute -bottom-2 right-1 w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="absolute -bottom-3 right-2 w-1 h-1 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-700 mt-2">Plant the Seed</p>
          <p className="text-xs text-gray-500">(Buy Stock)</p>
        </div>

        {/* Arrow */}
        <div className="mb-8">
          <svg width="40" height="30" viewBox="0 0 40 30" className="text-green-500">
            <path
              d="M5 15 L30 15 M25 10 L30 15 L25 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Stage 2 - Small Plant */}
        <div className="text-center">
          <div className="w-24 h-32 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-24 h-8 bg-amber-800 rounded-lg"></div>
            
            {/* Stem */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-green-600"></div>
            
            {/* Leaves */}
            <div className="absolute bottom-12 left-10 w-3 h-2 bg-green-400 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-12 right-10 w-3 h-2 bg-green-400 rounded-full transform -rotate-12"></div>
            
            {/* Small leaves on stem */}
            <div className="absolute bottom-10 left-11 w-2 h-1 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-10 right-11 w-2 h-1 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-sm font-semibold text-gray-700 mt-2">Watch it Grow</p>
          <p className="text-xs text-gray-500">(Company Succeeds)</p>
        </div>

        {/* Arrow */}
        <div className="mb-8">
          <svg width="40" height="30" viewBox="0 0 40 30" className="text-green-500">
            <path
              d="M5 15 L30 15 M25 10 L30 15 L25 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Stage 3 - Bigger Plant with Fruits */}
        <div className="text-center">
          <div className="w-24 h-32 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-24 h-8 bg-amber-800 rounded-lg"></div>
            
            {/* Main stem */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-green-700"></div>
            
            {/* Branches */}
            <div className="absolute bottom-16 left-8 w-1 h-4 bg-green-600 transform rotate-45 origin-bottom"></div>
            <div className="absolute bottom-16 right-8 w-1 h-4 bg-green-600 transform -rotate-45 origin-bottom"></div>
            
            {/* Large leaves */}
            <div className="absolute bottom-18 left-6 w-4 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-18 right-6 w-4 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-5 h-4 bg-green-500 rounded-full"></div>
            
            {/* Fruits/Money symbols */}
            <div className="absolute bottom-19 left-7 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-19 right-7 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-21 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
            
            {/* Dollar signs */}
            <div className="absolute bottom-17 left-5 text-xs text-green-600 font-bold">$</div>
            <div className="absolute bottom-17 right-5 text-xs text-green-600 font-bold">$</div>
          </div>
          <p className="text-sm font-semibold text-gray-700 mt-2">Harvest the Rewards</p>
          <p className="text-xs text-gray-500">(Stock Value Grows)</p>
        </div>
      </div>

      {/* Text Box */}
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <p className="text-xl font-semibold text-center text-gray-800 mb-2">
          Because you believe the company will grow, and your slice of the pie will become more valuable.
        </p>
        <p className="text-lg text-center text-green-700 font-medium">
          It's like planting a seed and watching it grow! 🌱
        </p>
      </div>
    </div>
  );
};

export default Slide4;
