
import React from 'react';

const Slide3 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-pink-100 p-8 flex items-center justify-center">
      <div className="flex items-center justify-center gap-8 max-w-4xl">
        {/* Left - Factory */}
        <div className="flex-1 text-center">
          <div className="relative">
            {/* Factory Building */}
            <div className="w-32 h-24 bg-gray-500 mx-auto rounded-lg relative">
              {/* Smokestacks */}
              <div className="absolute -top-8 left-6 w-4 h-8 bg-gray-600 rounded-t"></div>
              <div className="absolute -top-8 right-6 w-4 h-8 bg-gray-600 rounded-t"></div>
              
              {/* Smoke */}
              <div className="absolute -top-12 left-8 w-2 h-4 bg-gray-300 rounded-full opacity-70"></div>
              <div className="absolute -top-12 right-8 w-2 h-4 bg-gray-300 rounded-full opacity-70"></div>
              
              {/* Windows */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300 rounded"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-300 rounded"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-yellow-300 rounded"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-yellow-300 rounded"></div>
              
              {/* Door */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-brown-600 rounded-t"></div>
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-2">The Company</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-purple-500">
            <path
              d="M10 20 L40 20 M35 15 L40 20 L35 25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* Center - Pie Chart */}
        <div className="flex-1 text-center">
          <div className="relative w-32 h-32 mx-auto">
            {/* Pie Chart Base */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative">
              {/* Popped out slice */}
              <div className="absolute top-4 right-2 w-8 h-8 bg-yellow-400 transform rotate-45 origin-bottom-left rounded-tl-lg"></div>
              
              {/* Slice lines */}
              <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-white transform -translate-x-0.5"></div>
              <div className="absolute top-1/2 left-0 w-16 h-0.5 bg-white transform -translate-y-0.5"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-white transform -translate-x-0.5"></div>
              <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-white transform -translate-y-0.5"></div>
            </div>
            
            {/* Label */}
            <div className="absolute -top-8 right-0 bg-white px-2 py-1 rounded shadow text-xs font-bold">
              Shares
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-700 mt-2">Split into Shares</p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-purple-500">
            <path
              d="M10 20 L40 20 M35 15 L40 20 L35 25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* Right - Money */}
        <div className="flex-1 text-center">
          <div className="relative">
            {/* Character holding money */}
            <div className="w-16 h-20 bg-blue-400 mx-auto rounded-t-lg relative">
              {/* Head */}
              <div className="w-10 h-10 bg-peach-200 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-pink-400 rounded-full"></div>
              </div>
              
              {/* Arms holding money */}
              <div className="absolute -left-4 top-4 w-8 h-3 bg-blue-300 rounded-full transform -rotate-12"></div>
              
              {/* Stack of money */}
              <div className="absolute -left-6 top-2 space-y-1">
                <div className="w-6 h-3 bg-green-500 rounded"></div>
                <div className="w-6 h-3 bg-green-400 rounded"></div>
                <div className="w-6 h-3 bg-green-300 rounded"></div>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-2">Gets Money</p>
          </div>
        </div>
      </div>

      {/* Text Box */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-3xl">
        <p className="text-lg font-semibold text-center text-gray-800">
          To grow their business: building new stores, hiring employees, making better products.
        </p>
      </div>
    </div>
  );
};

export default Slide3;
