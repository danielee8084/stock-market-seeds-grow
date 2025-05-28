
import React from 'react';

const Slide2 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 p-8 flex flex-col">
      {/* Top Section with Title and Lemonade Stand */}
      <div className="flex items-start justify-between mb-8">
        <div className="text-right flex-1">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">WHAT IS A STOCK?</h1>
          <p className="text-xl text-gray-700 max-w-md">
            A stock is a small piece of ownership in a company.
          </p>
        </div>
        
        <div className="flex-1 flex justify-center">
          {/* Lemonade Stand */}
          <div className="relative">
            {/* Stand Table */}
            <div className="w-32 h-20 bg-amber-600 rounded relative">
              {/* Table legs */}
              <div className="absolute -bottom-6 left-4 w-3 h-6 bg-amber-700"></div>
              <div className="absolute -bottom-6 right-4 w-3 h-6 bg-amber-700"></div>
              
              {/* Awning */}
              <div className="absolute -top-8 -left-4 w-40 h-8 bg-yellow-400 rounded-t-lg"></div>
              
              {/* Sign */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-4 py-1 border-2 border-gray-700">
                <span className="text-sm font-bold text-gray-800">LEMONADE</span>
              </div>
              
              {/* Items on table */}
              <div className="absolute top-2 left-4 w-8 h-10 bg-yellow-300 rounded"></div>
              <div className="absolute top-6 right-4 w-6 h-8 bg-white rounded-b"></div>
            </div>
            
            {/* Kid character */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-16 bg-blue-400 rounded-t-lg relative">
                <div className="w-10 h-10 bg-orange-200 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-pink-400 rounded-full"></div>
                  <div className="absolute -top-2 -left-1 w-12 h-8 bg-amber-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center mb-8">
        <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-600">
          <path
            d="M10 20 L60 20 M55 15 L60 20 L55 25"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      {/* Bottom Section with Bigger Store */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Store Building */}
          <div className="w-48 h-32 bg-yellow-400 rounded-lg relative">
            {/* Door */}
            <div className="absolute left-6 bottom-0 w-12 h-20 bg-amber-700 rounded-t-lg">
              <div className="absolute right-2 top-8 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
            
            {/* Window */}
            <div className="absolute right-6 bottom-6 w-16 h-16 bg-blue-200 border-4 border-white rounded">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white"></div>
            </div>
            
            {/* Sign */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2 border-2 border-gray-700">
              <span className="text-lg font-bold text-gray-800">LEMONADE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
