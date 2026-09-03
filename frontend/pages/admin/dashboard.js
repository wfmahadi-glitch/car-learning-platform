import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaUsers, FaBook, FaCog, FaDollarSign } from 'react-icons/fa';

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 1250,
    totalCourses: 45,
    totalServices: 28,
    totalRevenue: '৳ 5,42,000',
  });

  const [recentOrders] = useState([
    { id: 1, user: 'রহিম আহমেদ', course: 'গাড়ি কেনার গাইড', amount: '৳ 3000', status: 'সম্পন্ন' },
    { id: 2, user: 'ফাতেমা সুলতানা', service: 'গাড়ি পরিদর্শন', amount: '৳ 5000', status: 'পেন্ডিং' },
    { id: 3, user: 'করিম খান', course: 'গাড়ির মেইনটেনেন্স', amount: '৳ 2500', status: 'সম্পন্ন' },
  ]);

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">এডমিন ড্যাশবোর্ড</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold">মোট ব্যবহারকারী</p>
                <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
              </div>
              <FaUsers className="text-blue-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold">মোট কোর্স</p>
                <p className="text-3xl font-bold mt-2">{stats.totalCourses}</p>
              </div>
              <FaBook className="text-green-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold">মোট সেবা</p>
                <p className="text-3xl font-bold mt-2">{stats.totalServices}</p>
              </div>
              <FaCog className="text-purple-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold">মোট আয়</p>
                <p className="text-3xl font-bold mt-2">{stats.totalRevenue}</p>
              </div>
              <FaDollarSign className="text-yellow-600 text-4xl" />
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">সাম্প্রতিক অর্ডার</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">ব্যবহারকারী</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">পণ্য/সেবা</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">পরিমাণ</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">অবস্থা</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3">{order.id}</td>
                    <td className="px-6 py-3">{order.user}</td>
                    <td className="px-6 py-3">{order.course || order.service}</td>
                    <td className="px-6 py-3 font-semibold">{order.amount}</td>
                    <td className="px-6 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'সম্পন্ন' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
