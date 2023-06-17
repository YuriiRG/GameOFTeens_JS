import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin', 'cyrillic-ext'] });

export const metadata = {
  title: {
    default: 'GoITeens Lab',
    template: '%s | GoITeens Lab'
  },
  description: 'Лабораторія стартапів розроблених підлітками 🚀'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='uk'>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <header className='border-b-2 border-gray-200 p-2'>
          <nav className='flex flex-col items-stretch gap-4 sm:flex-row sm:items-baseline'>
            <ul className='flex flex-grow items-baseline justify-between sm:flex-grow-0'>
              <li>
                <NavLink href='/' className='text-xl font-bold'>
                  💡 GoITeens Lab
                </NavLink>
              </li>
              <li className='mr-2 block sm:hidden'>
                <NavLink href='/signin'>Увійти</NavLink>
              </li>
            </ul>
            <ul className='flex flex-grow justify-around gap-4 sm:justify-start'>
              <li>
                <NavLink href='/projects'>Стартапи</NavLink>
              </li>
              <li>
                <NavLink href='/create-project'>Створити проєкт</NavLink>
              </li>
              <li>
                <NavLink href='/events'>Події</NavLink>
              </li>
              <li className='hidden flex-grow sm:block' aria-hidden></li>
              <li className='mr-2 hidden sm:block'>
                <NavLink href='/signin'>Увійти</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className='flex-grow p-4'>{children}</main>
        <footer className='mt-10 bg-gray-200 p-4'>
          © Ромашко-Гомоляко Юрій та{' '}
          <Link href='/copyright' className='text-blue-700 hover:underline'>
            інші
          </Link>
        </footer>
      </body>
    </html>
  );
}

function NavLink({
  href,
  children,
  className = ''
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={twMerge('', className)} href={href}>
      {children}
    </Link>
  );
}
