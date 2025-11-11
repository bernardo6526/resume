'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];


export default function NavLinks({...props}) {
  const [activeSection, setActiveSection] = useState('home');
  const [inputValue, setInputValue] = useState(false);
  const isAutoScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSection = useRef(0);
  const isNavClick = useRef(false);

   const sendToParent = () => {
    setInputValue(!inputValue);
    props.onValueChange(!inputValue);
  };

  function toggleScroll(flag: boolean){
    if (flag){
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }else{
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }

  function scrollToElement(element: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
      const handleScroll = () => {
        const rect = element.getBoundingClientRect();
        // You can adjust the tolerance (e.g. 5px)
        if (Math.abs(rect.top) < 5) {
          window.removeEventListener("scroll", handleScroll);
          resolve();
        }
      };

      window.addEventListener("scroll", handleScroll);
      element.scrollIntoView({ behavior: "smooth" , block: "start"});
    });
  }

  useEffect(() => {
    const handleScroll = async () => {
      const viewportMiddle = window.innerHeight / 2;

      let closestSection: HTMLElement | null = null;
      let minDistance = Infinity;
      const sections = Array.from(document.querySelectorAll("section"));

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }

      setActiveSection(closestSection!.id);
      sendToParent();
      
      toggleScroll(false);
      if (activeSection != closestSection!.id && !isNavClick.current) await scrollToElement(closestSection!);
      toggleScroll(true);
 
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 font-bold hover:text-sky-500 md:flex-none md:justify-center md:p-2 md:px-3",
              { 'text-sky-500': '#'+activeSection === link.href, },
            )}
          >
            <p className="md:block" style={{ fontFamily: "var(--font-lastica)" }}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}