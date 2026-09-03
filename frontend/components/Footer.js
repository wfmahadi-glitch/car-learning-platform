import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Car Learning Platform</h3>
            <p className="text-gray-400">গাড়ি শিক্ষা এবং প্রশিক্ষণের জন্য সম্পূর্ণ প্ল্যাটফর্ম</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">দ্রুত লিঙ্ক</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-white transition-colors">হোম</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="hover:text-white transition-colors">কোর্স</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">সেবা</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">যোগাযোগ</h3>
            <p className="text-gray-400">
              ইমেইল: info@carlearning.com<br />
              ফোন: +880-XXX-XXXXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Car Learning Platform. সর্বাধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
