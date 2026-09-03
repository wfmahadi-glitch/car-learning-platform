import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function ManageServices() {
  const [services, setServices] = useState([
    { id: 1, title: 'গাড়ি ক্রয় পরামর্শ', price: '৳ 5000', status: 'সক্রিয়' },
    { id: 2, title: 'গাড়ির পরিদর্শন', price: '৳ 3000', status: 'সক্রিয়' },
    { id: 3, title: 'আইনি সহায়তা', price: '৳ 2000', status: 'নিষ্ক্রিয়' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', price: '', status: 'active' });

  const handleAddService = () => {
    setServices([...services, { id: services.length + 1, ...formData }]);
    setFormData({ title: '', price: '', status: 'active' });
    setShowForm(false);
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">সেবা ম্যানেজমেন্ট</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FaPlus /> নতুন সেবা যোগ করুন
          </button>
        </div>

        {/* Add Service Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">নতুন সেবা যোগ করুন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="সেবার শিরোনাম"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                <option value="active">সক্রিয়</option>
                <option value="inactive">নিষ্ক্রিয়</option>
              </select>
            </div>
            <button
              onClick={handleAddService}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        )}

        {/* Services Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">শিরোনাম</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">মূল্য</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">অবস্থা</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">{service.id}</td>
                  <td className="px-6 py-3">{service.title}</td>
                  <td className="px-6 py-3 font-semibold">{service.price}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      service.status === 'সক্রিয়' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {service.status}
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
