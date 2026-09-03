import Link from 'next/link';
import { FaHome, FaBook, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600">🚗 Car Learning Platform</a>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="flex items-center hover:text-blue-600 transition-colors">
                <FaHome className="mr-2" /> হোম
              </a>
            </Link>
            <Link href="/courses">
              <a className="flex items-center hover:text-blue-600 transition-colors">
                <FaBook className="mr-2" /> কোর্স
              </a>
            </Link>
            <Link href="/services">
              <a className="flex items-center hover:text-blue-600 transition-colors">
                <FaCog className="mr-2" /> সেবা
              </a>
            </Link>
            <Link href="/login">
              <a className="flex items-center hover:text-blue-600 transition-colors">
                <FaUser className="mr-2" /> লগইন
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
