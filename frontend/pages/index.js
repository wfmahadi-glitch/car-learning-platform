import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PopularCourses from '../components/PopularCourses';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularCourses />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
