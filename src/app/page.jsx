import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Works from '@/components/sections/Works';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="w-full pt-16">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 min-h-[calc(100vh-4rem)] flex flex-col w-full">
        <Hero />
        <About />
        <TechStack />
        <Works />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
