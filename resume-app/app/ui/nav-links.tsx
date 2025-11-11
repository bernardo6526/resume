'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Experiences', href: 'experiences' },
  { name: 'Education', href: 'education' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
];


export default function NavLinks() {
  const [activeSection, setActiveSection] = useState('home');
  const isAutoScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSection = useRef(0);
  const isNavClick = useRef(false);

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


  // handle section color
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

      console.log(closestSection!.id, activeSection);
      setActiveSection(closestSection!.id);
      console.log("isNavClick", isNavClick);
      
      toggleScroll(false);
      if (activeSection != closestSection!.id && !isNavClick.current) await scrollToElement(closestSection!);
      toggleScroll(true);
 
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // handle mouse wheel
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const handleWheel = (e: WheelEvent) => {
      if (isAutoScrolling.current) return; // ignore while animating

      e.preventDefault(); // prevent default continuous scrolling
      const direction = e.deltaY > 0 ? "down" : "up";

      let nextIndex = currentSection.current;
      if (direction === "down" && nextIndex < sections.length - 1) {
        nextIndex++;
      } else if (direction === "up" && nextIndex > 0) {
        nextIndex--;
      }

      if (nextIndex !== currentSection.current) {
        scrollToSection(nextIndex, sections);
      }
    };

    const scrollToSection = (index: number, sectionsList: HTMLElement[]) => {
      isAutoScrolling.current = true;
      currentSection.current = index;

      sectionsList[index].scrollIntoView({ behavior: "smooth" });
      //setActiveSection(sectionsList[index].id);

      clearTimeout(scrollTimeout.current || undefined);
      scrollTimeout.current = setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1000); // match scroll duration
    };

    // wheel event for section-by-section scrolling
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    isNavClick.current = true;
    const sections = Array.from(document.querySelectorAll("section"));
    const targetIndex = sections.findIndex(
      (section) => section.id === sectionId
    );
    if (targetIndex === -1) return;

    if (isAutoScrolling.current) return; // ignore if animation in progress

    isAutoScrolling.current = true;
    currentSection.current = targetIndex;
    sections[targetIndex].scrollIntoView({ behavior: "smooth" });
    //setActiveSection(sections[targetIndex].id);

    clearTimeout(scrollTimeout.current || undefined);
    scrollTimeout.current = setTimeout(() => {
      isAutoScrolling.current = false;
      isNavClick.current = false;
    }, 1000);
  };

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={"#"}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-cyan-600 md:flex-none md:justify-center md:p-2 md:px-3",
              { 'text-cyan-600': activeSection === link.href, },
            )}
            onClick={() => { handleNavClick(link.href) }}
          >
            <p className="hidden md:block" style={{ fontFamily: "var(--font-lastica)" }}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}