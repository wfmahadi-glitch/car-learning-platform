import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'রহিম আহমেদ', email: 'rahim@example.com', role: 'user', status: 'সক্রিয়', joinDate: '২০২৬-০৯-০১' },
    { id: 2, name: 'ফাতেমা সুলতানা', email: 'fatema@example.com', role: 'user', status: 'সক্রিয়', joinDate: '২০২৬-০৮-২৮' },
    { id: 3, name: 'করিম খান', email: 'karim@example.com', role: 'instructor', status: 'সক্রিয়', joinDate: '২০২৬-০৮-১৫' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">ব্যবহারকারী ম্যানেজমেন্ট</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="নাম বা ইমেইল দিয়ে অনুসন্ধান করুন..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">নাম</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ইমেইল</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ভূমিকা</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">অবস্থা</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">যোগদান তারিখ</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">{user.id}</td>
                  <td className="px-6 py-3">{user.name}</td>
                  <td className="px-6 py-3">{user.email}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.role === 'admin' ? 'bg-red-100 text-red-800' :
                      user.role === 'instructor' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role === 'user' ? 'ব্যবহারকারী' : user.role === 'instructor' ? 'প্রশিক্ষক' : 'প্রশাসক'}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">{user.joinDate}</td>
                  <td className="px-6 py-3 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition-colors">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
