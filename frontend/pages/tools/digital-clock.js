import { useState, useEffect } from 'react';
import { FaClock, FaGlobeAmericas } from 'react-icons/fa';

export default function DigitalClock() {
  const [times, setTimes] = useState({});

  const timeZones = [
    { name: 'ঢাকা (Bangladesh)', zone: 'Asia/Dhaka', flag: '🇧🇩' },
    { name: 'ভারত (India)', zone: 'Asia/Kolkata', flag: '🇮🇳' },
    { name: 'লন্ডন (UK)', zone: 'Europe/London', flag: '🇬🇧' },
    { name: 'নিউইয়র্ক (USA)', zone: 'America/New_York', flag: '🇺🇸' },
    { name: 'লস এঞ্জেলেস (USA)', zone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'টোকিও (Japan)', zone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'সিডনি (Australia)', zone: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'দুবাই (UAE)', zone: 'Asia/Dubai', flag: '🇦🇪' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const newTimes = {};
      timeZones.forEach((tz) => {
        const time = new Date().toLocaleString('bn-BD', {
          timeZone: tz.zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        const date = new Date().toLocaleString('bn-BD', {
          timeZone: tz.zone,
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        newTimes[tz.zone] = { time, date };
      });
      setTimes(newTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaClock className="text-yellow-400 text-4xl" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">বিশ্বব্যাপী ডিজিটাল ঘড়ি</h1>
            <FaGlobeAmericas className="text-blue-400 text-4xl" />
          </div>
          <p className="text-gray-300 text-lg">বিভিন্ন টাইম জোনে বর্তমান সময়</p>
        </div>

        {/* Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeZones.map((tz) => (
            <div
              key={tz.zone}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              {/* Flag and Location */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{tz.flag}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white">{tz.name}</h2>
                  <p className="text-xs text-gray-400">{tz.zone}</p>
                </div>
              </div>

              {/* Time Display */}
              <div className="bg-black bg-opacity-50 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-green-400 tracking-wider drop-shadow-lg">
                    {times[tz.zone]?.time || '--:--:--'}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {times[tz.zone]?.date || 'লোডিং হচ্ছে...'}
                  </div>
                </div>
              </div>

              {/* Time Zone Info */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>⏰ রিয়েল-টাইম</span>
                <span>24 ঘণ্টা</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 shadow-lg">
            <p className="text-white text-sm md:text-base">
              ✨ এই ঘড়িটি প্রতি সেকেন্ডে স্বয়ংক্রিয়ভাবে আপডেট হয় এবং সমস্ত টাইম জোনে সঠিক সময় প্রদর্শন করে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
