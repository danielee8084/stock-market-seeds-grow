
import React from 'react';

const Slide3 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          WHY DO COMPANIES SELL STOCK?
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          To grow their business: building new stores, hiring employees, making better products.
        </p>
      </div>

      {/* Visual Flow */}
      <div className="flex items-center justify-center gap-12 max-w-5xl mx-auto">
        {/* Factory */}
        <div className="text-center">
          <div className="relative mb-4">
            {/* Factory Building */}
            <div className="w-28 h-24 bg-gray-500 rounded-lg relative">
              {/* Smokestacks */}
              <div className="absolute -top-8 left-4 w-4 h-8 bg-gray-600 rounded-t"></div>
              <div className="absolute -top-8 right-4 w-4 h-8 bg-gray-600 rounded-t"></div>
              
              {/* Smoke */}
              <div className="absolute -top-12 left-6 w-3 h-6 bg-gray-300 rounded-full opacity-70"></div>
              <div className="absolute -top-12 right-6 w-3 h-6 bg-gray-300 rounded-full opacity-70"></div>
              
              {/* Windows */}
              <div className="absolute top-2 left-2 w-5 h-5 bg-yellow-300"></div>
              <div className="absolute top-2 right-2 w-5 h-5 bg-yellow-300"></div>
              <div className="absolute bottom-2 left-2 w-5 h-5 bg-yellow-300"></div>
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-yellow-300"></div>
              
              {/* Door */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-amber-700"></div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div>
          <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-600">
            <path
              d="M10 20 L60 20 M55 15 L60 20 L55 25"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Pie Chart representing shares */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* Pie Chart */}
            <svg width="128" height="128" viewBox="0 0 128 128" className="transform -rotate-90">
              <circle cx="64" cy="64" r="60" fill="#3B82F6" />
              <circle cx="64" cy="64" r="60" fill="#10B981" 
                strokeDasharray="94.2 377" strokeDashoffset="0" 
                stroke="#10B981" strokeWidth="120" fillOpacity="0" />
              <circle cx="64" cy="64" r="60" fill="#F59E0B" 
                strokeDasharray="75.4 377" strokeDashoffset="-94.2" 
                stroke="#F59E0B" strokeWidth="120" fillOpacity="0" />
              <circle cx="64" cy="64" r="60" fill="#EF4444" 
                strokeDasharray="62.8 377" strokeDashoffset="-169.6" 
                stroke="#EF4444" strokeWidth="120" fillOpacity="0" />
            </svg>
            
            {/* "Shares" Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow-lg">
              <span className="text-sm font-bold text-gray-800">Shares</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div>
          <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-600">
            <path
              d="M10 20 L60 20 M55 15 L60 20 L55 25"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Character with Money */}
        <div className="text-center">
          <div className="relative mb-4">
            {/* Character */}
            <div className="w-16 h-20 bg-blue-400 rounded-t-lg relative mx-auto">
              {/* Head */}
              <div className="w-12 h-12 bg-orange-200 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-pink-400 rounded-full"></div>
                <div className="absolute -top-2 -left-1 w-14 h-10 bg-amber-700 rounded-full"></div>
              </div>
              
              {/* Arms */}
              <div className="absolute -left-6 top-4 w-10 h-4 bg-blue-300 rounded-full transform -rotate-12"></div>
              
              {/* Money Stack */}
              <div className="absolute -left-8 top-2 space-y-1">
                <div className="w-8 h-4 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">$</span>
                </div>
                <div className="w-8 h-4 bg-green-400 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">$</span>
                </div>
                <div className="w-8 h-4 bg-green-300 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
