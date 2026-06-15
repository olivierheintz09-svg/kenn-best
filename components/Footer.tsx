import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="text-2xl font-bold text-[#0055A5] mb-2">← KENN →</div>
            <p className="text-gray-400 text-sm max-w-xs">
              Tweedehands voertuigen, strand & transport – vanuit Heemskerk.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-4 items-start">
            <Link href="/voertuigen" className="text-sm text-gray-300 hover:text-white transition-colors">
              Voertuigen
            </Link>
            <Link href="/strand" className="text-sm text-gray-300 hover:text-white transition-colors">
              Strand
            </Link>
            <Link href="/transport" className="text-sm text-gray-300 hover:text-white transition-colors">
              Transport
            </Link>
            <Link href="/over-ons" className="text-sm text-gray-300 hover:text-white transition-colors">
              Over ons
            </Link>
            <Link href="/offerte" className="text-sm text-gray-300 hover:text-white transition-colors">
              Offerte aanvragen
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-400 space-y-1">
            <p className="font-semibold text-white">Contact</p>
            <p>Strengweg 34, Heemskerk</p>
            <p>+31 6 53699390</p>
            <p>kenn.best</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Kenn Best. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
