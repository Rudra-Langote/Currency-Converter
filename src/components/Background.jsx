import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <img className="h-full w-full object-cover" src="/Background.jpg" alt="Background" />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Background;
