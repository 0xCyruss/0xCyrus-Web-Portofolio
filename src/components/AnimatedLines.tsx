import React from 'react';

const AnimatedLines = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-16">
      <div className="w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default AnimatedLines;
