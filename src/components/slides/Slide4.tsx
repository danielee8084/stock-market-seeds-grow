
import React from 'react';

const Slide4 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          WHY BUY STOCK?
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Because you believe the company will grow, and your slice of the pie will become more valuable.
        </p>
      </div>

      {/* Plant Growth Metaphor */}
      <div className="flex items-end justify-center gap-16 mb-12">
        {/* Seed with Watering Can */}
        <div className="text-center">
          <div className="w-32 h-40 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-32 h-12 bg-amber-800 rounded-lg"></div>
            
            {/* Seed in soil */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full"></div>
            
            {/* Watering can */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-8 bg-blue-400 rounded-l-full relative">
                <div className="absolute -top-2 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -right-4 top-2 w-6 h-2 bg-blue-500 rounded"></div>
                {/* Water drops */}
                <div className="absolute -bottom-4 right-2 space-y-1">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full ml-1"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="mb-8">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-green-600">
            <path
              d="M10 20 L40 20 M35 15 L40 20 L35 25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* Small Plant */}
        <div className="text-center">
          <div className="w-32 h-40 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-32 h-12 bg-amber-800 rounded-lg"></div>
            
            {/* Small plant */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              {/* Stem */}
              <div className="w-2 h-12 bg-green-600 mx-auto"></div>
              
              {/* Small leaves */}
              <div className="absolute top-4 -left-3 w-6 h-3 bg-green-500 rounded-full transform rotate-12"></div>
              <div className="absolute top-4 -right-3 w-6 h-3 bg-green-500 rounded-full transform -rotate-12"></div>
              <div className="absolute top-8 -left-2 w-4 h-2 bg-green-400 rounded-full"></div>
              <div className="absolute top-8 -right-2 w-4 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="mb-8">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-green-600">
            <path
              d="M10 20 L40 20 M35 15 L40 20 L35 25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* Large Plant with Money */}
        <div className="text-center">
          <div className="w-32 h-40 relative">
            {/* Soil */}
            <div className="absolute bottom-0 w-32 h-12 bg-amber-800 rounded-lg"></div>
            
            {/* Large plant */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              {/* Main stem */}
              <div className="w-3 h-16 bg-green-700 mx-auto"></div>
              
              {/* Branches */}
              <div className="absolute top-4 -left-4 w-2 h-8 bg-green-600 transform rotate-45 origin-bottom"></div>
              <div className="absolute top-4 -right-4 w-2 h-8 bg-green-600 transform -rotate-45 origin-bottom"></div>
              
              {/* Large leaves */}
              <div className="absolute top-2 -left-6 w-8 h-5 bg-green-500 rounded-full"></div>
              <div className="absolute top-2 -right-6 w-8 h-5 bg-green-500 rounded-full"></div>
              <div className="absolute top-0 -left-3 w-10 h-6 bg-green-600 rounded-full"></div>
              
              {/* Money/fruits */}
              <div className="absolute top-3 -left-5 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-800">$</span>
              </div>
              <div className="absolute top-3 -right-5 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-800">$</span>
              </div>
              <div className="absolute top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-800">$</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="text-center">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <p className="text-lg text-green-700 font-medium">
            It's like planting a seed and watching it grow! 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
