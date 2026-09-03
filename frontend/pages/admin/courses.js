import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function ManageCourses() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'গাড়ি কেনার সম্পূর্ণ গাইড', category: 'গাড়ি কেনা', price: '৳ 3000', status: 'প্রকাশিত' },
    { id: 2, title: 'গাড়ির মেইনটেনেন্স কোর্স', category: 'গাড়ির মেইনটেনেন্স', price: '৳ 2500', status: 'প্রকাশিত' },
    { id: 3, title: 'গাড়ির মূল্য নির্ধারণ', category: 'গাড়ির মূল্য', price: '৳ 2000', status: 'ড্রাফট' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: '', price: '', status: 'draft' });

  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...formData }]);
    setFormData({ title: '', category: '', price: '', status: 'draft' });
    setShowForm(false);
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">কোর্স ম্যানেজমেন্ট</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FaPlus /> নতুন কোর্স যোগ করুন
          </button>
        </div>

        {/* Add Course Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">নতুন কোর্স যোগ করুন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="কোর্সের শিরোনাম"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="ক্যাটাগরি"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
              <input
                type="text"
                placeholder="মূল্য"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="draft">ড্রাফট</option>
                <option value="published">প্রকাশিত</option>
              </select>
            </div>
            <button
              onClick={handleAddCourse}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        )}

        {/* Courses Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">শিরোনাম</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ক্যাটাগরি</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">মূল্য</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">অবস্থা</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">{course.id}</td>
                  <td className="px-6 py-3">{course.title}</td>
                  <td className="px-6 py-3">{course.category}</td>
                  <td className="px-6 py-3 font-semibold">{course.price}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.status === 'প্রকাশিত' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
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
