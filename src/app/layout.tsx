import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin', 'cyrillic-ext'] });

export const metadata = {
  title: 'GoITeens Lab',
  description: 'Лабораторія стартапів розроблених підлітками 🚀'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='uk'>
      <body className={inter.className}>
        <header className='border-b-2 border-gray-200 p-2'>
          <nav className='flex flex-wrap items-baseline gap-4'>
            <NavLink href='/' className='text-xl font-bold'>
              💡 GoITeens Lab
            </NavLink>
            <ul className='flex gap-4'>
              <li>
                <NavLink href='/'>Стартапи</NavLink>
              </li>
              <li>
                <NavLink href='/create-project'>Створити стартап</NavLink>
              </li>
              <li>
                <NavLink href='/events'>Події</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className='p-4'>{children}</main>
        <footer className='mt-10 bg-gray-200 p-4'>
          © Ромашко-Гомоляко Юрій та{' '}
          <Link href='/copyright' className='text-blue-500 hover:underline'>
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
