import CourseCard from './CourseCard';

export default function PopularCourses() {
  const courses = [
    {
      id: 1,
      title: 'গাড়ি কেনার সম্পূর্ণ গাইড',
      price: '৩০০০ টাকা',
      rating: 4.8,
      image: '/images/course1.jpg',
    },
    {
      id: 2,
      title: 'গাড়ির মেইনটেনেন্স কোর্স',
      price: '২৫০০ টাকা',
      rating: 4.6,
      image: '/images/course2.jpg',
    },
    {
      id: 3,
      title: 'গাড়ির মূল্য নির্ধারণ',
      price: '২০০০ টাকা',
      rating: 4.7,
      image: '/images/course3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">জনপ্রিয় কোর্সগুলি</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
