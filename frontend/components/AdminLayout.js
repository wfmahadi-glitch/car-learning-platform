import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaBook, FaCog, FaUsers, FaDollarSign, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { label: 'ড্যাশবোর্ড', icon: <FaHome />, href: '/admin/dashboard' },
    { label: 'কোর্স ম্যানেজমেন্ট', icon: <FaBook />, href: '/admin/courses' },
    { label: 'সেবা ম্যানেজমেন্ট', icon: <FaCog />, href: '/admin/services' },
    { label: 'ব্যবহারকারী ম্যানেজমেন্ট', icon: <FaUsers />, href: '/admin/users' },
    { label: 'পেমেন্ট এবং রাজস্ব', icon: <FaDollarSign />, href: '/admin/payments' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 overflow-y-auto`}>
        <div className="p-6 flex justify-between items-center">
          <h1 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>এডমিন</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-800 transition-colors ${
                router.pathname === item.href ? 'bg-blue-600' : ''
              }`}>
                <span className="text-xl">{item.icon}</span>
                <span className={`${!sidebarOpen && 'hidden'}`}>{item.label}</span>
              </a>
            </Link>
          ))}
        </nav>
        <div className="mt-8 px-6 py-4 border-t border-gray-700">
          <Link href="/">
            <a className="flex items-center gap-4 hover:text-gray-300 transition-colors">
              <FaSignOutAlt className="text-xl" />
              <span className={`${!sidebarOpen && 'hidden'}`}>লগআউট</span>
            </a>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
