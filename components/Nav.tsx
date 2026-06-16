'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/voertuigen', label: 'Voertuigen' },
  { href: '/strand', label: 'Strand' },
  { href: '/transport', label: 'Transport' },
  { href: '/over-ons', label: 'Over ons' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Ontwerp zonder titel-84.png"
              alt="Kenn Best"
              height={64}
              width={0}
              sizes="100vw"
              style={{ height: '64px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0055A5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/offerte"
              className="ml-2 bg-[#0055A5] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#003D7A] transition-colors"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#0055A5] py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/offerte"
            className="mt-2 bg-[#0055A5] text-white text-sm font-medium px-4 py-2 rounded text-center hover:bg-[#003D7A] transition-colors"
            onClick={() => setOpen(false)}
          >
            Offerte aanvragen
          </Link>
        </div>
      )}
    </nav>
  );
}
