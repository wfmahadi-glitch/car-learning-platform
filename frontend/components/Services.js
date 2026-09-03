export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">আমাদের সেবাসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2">গাড়ি ক্রয় পরামর্শ</h3>
            <p className="text-gray-600">আপনার বাজেট এবং প্রয়োজন অনুযায়ী সঠিক গাড়ি বেছে নিতে বিশেষজ্ঞ পরামর্শ</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">গাড়ি পরিদর্শন</h3>
            <p className="text-gray-600">বিশেষজ্ঞদের সাথে গাড়ির সম্পূর্ণ পরিদর্শন এবং মূল্যায়ন</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2">আইনি সহায়তা</h3>
            <p className="text-gray-600">গাড়ি কেনার সময় সকল আইনি কাগজপত্র এবং ডকুমেন্টেশনের সহায়তা</p>
          </div>
        </div>
      </div>
    </section>
  );
}
