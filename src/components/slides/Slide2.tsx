
import React from 'react';

const Slide2 = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 p-8 flex flex-col justify-center">
      <div className="flex items-center justify-center gap-12 mb-8">
        {/* Left Panel - Lemonade Stand */}
        <div className="flex-1 text-center">
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg relative">
            {/* Stand */}
            <div className="w-32 h-20 bg-amber-600 mx-auto mb-4 relative rounded">
              {/* Table legs */}
              <div className="absolute -bottom-4 left-2 w-2 h-4 bg-amber-700"></div>
              <div className="absolute -bottom-4 right-2 w-2 h-4 bg-amber-700"></div>
              
              {/* Sign */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded border border-gray-300">
                <span className="text-xs font-bold text-gray-800">LEMONADE</span>
              </div>
              
              {/* Pitcher */}
              <div className="absolute top-2 left-4 w-6 h-8 bg-yellow-400 rounded"></div>
              
              {/* Cup */}
              <div className="absolute top-6 right-4 w-4 h-6 bg-white rounded-b"></div>
            </div>
            
            {/* Kid character */}
            <div className="w-8 h-12 bg-orange-300 mx-auto rounded-t-lg relative">
              <div className="w-6 h-6 bg-peach-200 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-gray-700 mt-2">Small Business</p>
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

        {/* Right Panel - Bigger Store */}
        <div className="flex-1 text-center">
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
            {/* Storefront */}
            <div className="w-40 h-28 bg-red-400 mx-auto mb-4 relative rounded">
              {/* Awning */}
              <div className="absolute -top-4 left-0 right-0 h-6 bg-red-600 rounded-t-lg"></div>
              
              {/* Door */}
              <div className="absolute left-4 bottom-0 w-8 h-16 bg-brown-600 rounded-t"></div>
              <div className="absolute left-5 bottom-8 w-1 h-1 bg-yellow-400 rounded-full"></div>
              
              {/* Window */}
              <div className="absolute right-4 bottom-4 w-12 h-12 bg-blue-200 border-2 border-white">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
              </div>
              
              {/* Sign */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded">
                <span className="text-xs font-bold text-gray-800">LEMONADE CO.</span>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-gray-700">Big Company</p>
          </div>
        </div>
      </div>

      {/* Text Box */}
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <p className="text-xl font-semibold text-center text-gray-800">
          A stock is a small piece of ownership in a company.
        </p>
      </div>
    </div>
  );
};

export default Slide2;
