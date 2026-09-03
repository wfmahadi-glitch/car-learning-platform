import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'গাড়ি ক্রয় পরামর্শ',
      description: 'আপনার বাজেট অনুযায়ী সঠিক গাড়ি বেছে নিতে বিশেষজ্ঞ পরামর্শ',
      price: '৫০০০ টাকা',
      image: '/images/service1.jpg',
    },
    {
      id: 2,
      title: 'গাড়ির পরিদর্শন সেবা',
      description: 'বিশেষজ্ঞদের সাথে গাড়ির সম্পূর্ণ পরিদর্শন',
      price: '৩০০০ টাকা',
      image: '/images/service2.jpg',
    },
    {
      id: 3,
      title: 'আইনি সহায়তা',
      description: 'গাড়ি কেনার সময় সকল আইনি কাগজপত্রের সহায়তা',
      price: '২০০০ টাকা',
      image: '/images/service3.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">আমাদের সেবাসমূহ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
