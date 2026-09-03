import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaClock, FaGlobeAmericas, FaClipboardList } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ToolsIndex() {
  const tools = [
    {
      id: 1,
      title: 'বিশ্বব্যাপী ডিজিটাল ঘড়ি',
      description: 'বিভিন্ন টাইম জোনে বর্তমান সময় প্রদর্শন করে',
      icon: <FaGlobeAmericas className="text-4xl" />,
      href: '/tools/digital-clock',
      color: 'from-blue-500 to-purple-600',
      features: ['রিয়েল-টাইম আপডেট', '৮টি বিভিন্ন টাইম জোন', '12/24 ঘণ্টার ফরম্যাট'],
    },
    {
      id: 2,
      title: 'অ্যানালগ ঘড়ি',
      description: 'ঐতিহ্যবাহী অ্যানালগ স্টাইলে সময় প্রদর্শন',
      icon: <FaClock className="text-4xl" />,
      href: '/tools/analog-clock',
      color: 'from-purple-500 to-pink-600',
      features: ['মসৃণ হাতের গতি', 'ডিজিটাল ডিসপ্লে সহ', 'স্বয়ংক্রিয় আপডেট'],
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">⏰ টুলস এবং ইউটিলিটি</h1>
            <p className="text-xl text-gray-600">
              সময় এবং ঘড়ি সম্পর্কিত দরকারী টুলস
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tools.map((tool) => (
              <Link key={tool.id} href={tool.href}>
                <a className="group">
                  <div className={`bg-gradient-to-br ${tool.color} rounded-lg shadow-lg p-8 h-full transform transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                    {/* Icon */}
                    <div className="text-white mb-4">{tool.icon}</div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-2">{tool.title}</h2>

                    {/* Description */}
                    <p className="text-white text-opacity-90 mb-6">{tool.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white text-sm">
                          <span className="w-2 h-2 bg-white rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      এখনই ব্যবহার করুন →
                    </button>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📌 টুলস সম্পর্কে</h2>
            <p className="text-gray-700 mb-4">
              এই বিভাগে আপনি সময় এবং ঘড়ি সম্পর্কিত বিভিন্ন দরকারী টুলস পাবেন যা আপনার দৈনন্দিন কাজে সহায়তা করবে।
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ বিশ্বব্যাপী টাইম জোন ট্র্যাকিং</li>
              <li>✅ রিয়েল-টাইম ঘড়ি আপডেট</li>
              <li>✅ একাধিক ফরম্যাট সাপোর্ট</li>
              <li>✅ রেসপন্সিভ ডিজাইন</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
