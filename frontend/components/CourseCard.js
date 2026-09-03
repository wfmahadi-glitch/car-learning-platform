import { FaStar } from 'react-icons/fa';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          <span className="ml-2 text-gray-600">({course.rating})</span>
        </div>
        <p className="text-blue-600 font-bold text-lg mb-4">{course.price}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          এনরোল করুন
        </button>
      </div>
    </div>
  );
}
