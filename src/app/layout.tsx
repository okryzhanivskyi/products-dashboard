"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.scss';
import { navItems } from '@/config/navigation';

const buildNavigationItems = (activePathname: string) => (
  navItems.map(el => (
    <li>
      <Link
        className={activePathname === el.href ? 'active' : ''}
        href={el.href}
      >
        {el.title}
      </Link>
    </li>
  ))
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            { buildNavigationItems(pathname) }
          </ul>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
