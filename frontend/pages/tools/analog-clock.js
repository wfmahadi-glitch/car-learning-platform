import { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

export default function SimpleAnalogClock() {
  const [rotation, setRotation] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setRotation({
        hour: hours * 30 + minutes * 0.5,
        minute: minutes * 6 + seconds * 0.1,
        second: seconds * 6,
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="relative">
        {/* Clock Face */}
        <div className="w-80 h-80 rounded-full bg-white shadow-2xl border-8 border-gray-800 flex items-center justify-center relative">
          {/* Hour Markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = Math.sin(angle) * 130;
            const y = -Math.cos(angle) * 130;
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gray-800 rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}

          {/* Center Dot */}
          <div className="absolute w-4 h-4 bg-gray-800 rounded-full z-10" />

          {/* Hour Hand */}
          <div
            className="absolute w-2 h-20 bg-gray-800 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 transition-transform duration-1000"
            style={{ transform: `translateX(-50%) rotate(${rotation.hour}deg)` }}
          />

          {/* Minute Hand */}
          <div
            className="absolute w-1.5 h-28 bg-gray-600 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 transition-transform duration-1000"
            style={{ transform: `translateX(-50%) rotate(${rotation.minute}deg)` }}
          />

          {/* Second Hand */}
          <div
            className="absolute w-1 h-32 bg-red-500 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 transition-transform duration-1000"
            style={{ transform: `translateX(-50%) rotate(${rotation.second}deg)` }}
          />
        </div>

        {/* Digital Time Display */}
        <div className="text-center mt-8">
          <div className="text-white text-2xl font-mono font-bold bg-gray-800 px-6 py-3 rounded-lg shadow-lg">
            {new Date().toLocaleTimeString('bn-BD', { hour12: true })}
          </div>
        </div>
      </div>
    </div>
  );
}
