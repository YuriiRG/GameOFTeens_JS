import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic-ext'] });

export const metadata = {
  title: 'GoITeens Lab💡',
  description: 'Лабораторія стартапів розроблених підлітками🚀'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='uk'>
      <body className={inter.className}>
        <header className='p-2'>
          <nav>
            <ul>
              <li>
                <a>GoITeens Lab</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
