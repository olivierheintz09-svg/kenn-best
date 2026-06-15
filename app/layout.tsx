import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Kenn Best – Voertuigen, Strand & Transport',
  description:
    'Kenn Best handelt in tweedehands vrachtwagens, opleggers, bestelwagens en meer. Tevens actief in strand en transport vanuit Heemskerk.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-inter), Arial, sans-serif' }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
