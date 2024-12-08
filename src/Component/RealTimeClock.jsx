import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="text-lg font-bold text-gray-700 text-center pt-10">
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default RealTimeClock;
