import { useState, useEffect } from 'react';

export default function Timeout() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Set your target time here (in EST)
    const targetHour = 21; // 9 PM
    const targetMinute = 6; // 06 minutes

    // Create today's date at the target time
    const today = new Date();
    today.setHours(targetHour, targetMinute, 0, 0);
    
    // If target time has passed today, then the expiry time is already reached
    const expiry = Math.floor(today.getTime() / 1000);
    
    // Function to update the remaining time
    const updateTime = () => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = expiry - now;
      
      if (remaining <= 0) {
        setTimeLeft(null);
      } else {
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    // Immediately update time and then hide the loader
    updateTime();
    setLoading(false);

    // Then update every second
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* A simple spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <span className="mt-4 text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Ok you're out of timeout!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-8 text-black tracking-wider">
          {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </h1>
        <p className="text-gray-600 text-lg">Time Remaining</p>
      </div>
    </div>
  );
}