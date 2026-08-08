'use client';

import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
}