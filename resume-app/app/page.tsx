'use client';
import Image from "next/image";
import { useEffect } from "react";
import Main from '@/app/ui/sections/main';
import About from '@/app/ui/sections/about';
import Experiences from '@/app/ui/sections/experiences';
import Skills from '@/app/ui/sections/skills';

export default function Home() {
  useEffect(() => {
    // Prevent Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
    }
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Main background="home.png" logo="logo.png" />
      <About background="about.png" title="About" />
      <Experiences background="experience.png" title="Experiences" id="experiences" />
      <Experiences background="experience.png" title="Education" id="education" />
      <Experiences background="experience.png" title="Projects" id="projects" />
      <Skills background="experience.png" />
    </div>
  );
}