'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/'},
  { name: 'About',href: '/about' },
  { name: 'Experiences', href: '/professional-experiences'},
  { name: 'Education', href: '/education'},
  { name: 'Projects', href: '/projects'},
  { name: 'Skills', href: '/skills'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-cyan-600 md:flex-none md:justify-center md:p-2 md:px-3",
              {'text-cyan-600': pathname === link.href,},
            )}
          >
            <p className="hidden md:block" style={{ fontFamily: "var(--font-lastica)" }}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}