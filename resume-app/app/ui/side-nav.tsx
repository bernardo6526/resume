'use client';
import NavLinks from '@/app/ui/nav-links';
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";


export default function SideNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [childValue, setChildValue] = useState<string>('initial');

  const handleChildValueChange = (value: string) => {
    setChildValue(value);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [childValue]);

  return (
    <>
      <aside className="w-45 relative hidden md:block bg-blue-800">
        <div className="fixed hidden flex h-full flex-col px-3 py-4 md:px-2 md:block">
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 text-sm">
            <NavLinks onValueChange={handleChildValueChange} />
            <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          </div>
        </div>
      </aside>
      <button
        className={`fixed top-0 right-0 p-4 text-3xl text-black md:hidden z-50`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <IoMdMenu />
      </button>
      <aside className={
        `fixed top-0 right-0 h-full w-35 bg-blue-800 z-20
        md:hidden ${isMobileMenuOpen ? "" : "hidden"}`
        }>
        <div className="fixed pt-10 w-35 text-xs">
          <NavLinks onValueChange={handleChildValueChange} />
        </div>
      </aside>
    </>
  );
}