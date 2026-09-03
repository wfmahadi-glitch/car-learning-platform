import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function PaymentStats() {
  const [payments] = useState([
    { id: 1, user: 'রহিম আহমেদ', amount: '৳ 3000', type: 'কোর্স', date: '২০২৬-০৯-০১', status: 'সম্পন্ন' },
    { id: 2, user: 'ফাতেমা সুলতানা', amount: '৳ 5000', type: 'সেবা', date: '২০২৬-০৯-০২', status: 'সম্পন্ন' },
    { id: 3, user: 'করিম খান', amount: '৳ 2500', type: 'কোর্স', date: '২০২৬-০৯-০২', status: 'পেন্ডিং' },
  ]);

  const totalRevenue = payments
    .filter(p => p.status === 'সম্পন্ন')
    .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0);

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">পেমেন্ট এবং রাজস্ব</h1>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 font-semibold">মোট আয়</p>
            <p className="text-3xl font-bold mt-2">৳ {totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 font-semibold">সম্পন্ন পেমেন্ট</p>
            <p className="text-3xl font-bold mt-2">{payments.filter(p => p.status === 'সম্পন্ন').length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 font-semibold">পেন্ডিং পেমেন্ট</p>
            <p className="text-3xl font-bold mt-2">{payments.filter(p => p.status === 'পেন্ডিং').length}</p>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ব্যবহারকারী</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">পরিমাণ</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">ধরন</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">তারিখ</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">অবস্থা</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">{payment.id}</td>
                  <td className="px-6 py-3">{payment.user}</td>
                  <td className="px-6 py-3 font-semibold">{payment.amount}</td>
                  <td className="px-6 py-3">{payment.type}</td>
                  <td className="px-6 py-3 text-sm">{payment.date}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      payment.status === 'সম্পন্ন' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
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
