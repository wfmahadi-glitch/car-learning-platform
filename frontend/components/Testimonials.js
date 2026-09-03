export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'রহিম আহমেদ',
      comment: 'এই প্ল্যাটফর্মের কোর্সগুলি অত্যন্ত সহায়ক ছিল। আমি সঠিক গাড়ি কিনতে পেরেছি।',
      rating: 5,
    },
    {
      id: 2,
      name: 'ফাতেমা সুলতানা',
      comment: 'সেবা দল অত্যন্ত সহায়ক এবং পেশাদার। আমি সবাইকে সুপারিশ করি।',
      rating: 5,
    },
    {
      id: 3,
      name: 'করিম খান',
      comment: 'গাড়ি মেইনটেনেন্স কোর্স আমার অনেক সময় এবং টাকা বাঁচিয়েছে।',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">গ্রাহক মতামত</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">\"{testimonial.comment}\"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
