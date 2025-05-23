import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import HowToOrder from '@/components/sections/HowToOrder';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowToOrder />
      <Testimonials />
    </>
  );
}
