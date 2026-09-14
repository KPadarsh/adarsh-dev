import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Preloader from '@/components/layout/Preloader';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Adarsh K P — Full Stack Developer',
  description: 'I build responsive interfaces, robust APIs, and reliable full-stack applications with modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-surface-container-lowest text-on-surface antialiased">
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
