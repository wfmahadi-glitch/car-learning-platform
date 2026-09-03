export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">গাড়ি শিক্ষার নতুন যুগে স্বাগতম</h1>
        <p className="text-xl mb-8">গাড়ি কেনা-বেচা সম্পর্কে সবকিছু শিখুন আমাদের বিশেষজ্ঞ প্রশিক্ষকদের সাথে</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            কোর্স শুরু করুন
          </button>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-colors">
            আরও জানুন
          </button>
        </div>
      </div>
    </section>
  );
}
