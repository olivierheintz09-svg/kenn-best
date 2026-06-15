import Link from 'next/link';
import { vehicles } from '../data/vehicles';

function formatPrice(price: number | null): string {
  if (price === null) return 'Prijs op aanvraag';
  return `€ ${price.toLocaleString('nl-NL')}`;
}

export default function HomePage() {
  const featured = vehicles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Voertuigen. Strand. Transport.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            Kenn Best levert tweedehands vrachtwagens en opleggers, verzorgt transport voor bedrijven, en bouwt strandpaviljoens op en af – vanuit Heemskerk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/voertuigen"
              className="bg-[#0055A5] text-white font-medium px-6 py-3 rounded hover:bg-[#003D7A] transition-colors"
            >
              Bekijk voertuigen
            </Link>
            <Link
              href="/offerte"
              className="border border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Vraag een offerte aan
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-[#1A1A1A]">Wat wij doen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/voertuigen"
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Voertuigen</h3>
              <p className="text-gray-500 text-sm">
                Tweedehands vrachtwagens, opleggers, personenauto&apos;s en aanhangwagens.
              </p>
            </Link>
            <Link
              href="/strand"
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Strand</h3>
              <p className="text-gray-500 text-sm">
                Op- en afbouw strandpaviljoens, zandsuppletie en strandevenementen.
              </p>
            </Link>
            <Link
              href="/transport"
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Transport</h3>
              <p className="text-gray-500 text-sm">
                Betrouwbaar transport voor bedrijven. Nationaal en internationaal.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured vehicles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-[#1A1A1A]">Uitgelichte voertuigen</h2>
          <p className="text-gray-500 mb-10">Een selectie uit ons actuele aanbod.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((v) => (
              <div key={v.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm">
                  Foto volgt
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{v.type} · {v.year}</p>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2 leading-snug">{v.title}</h3>
                  <p className="text-[#0055A5] font-bold">{formatPrice(v.price)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/voertuigen" className="text-[#0055A5] font-medium hover:underline">
              Alle voertuigen bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#0055A5] text-white text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Interesse in een voertuig? Of wil je iets verkopen?
          </h2>
          <p className="text-blue-100 mb-8">
            Neem contact op of vraag vrijblijvend een offerte aan.
          </p>
          <Link
            href="/offerte"
            className="bg-white text-[#0055A5] font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block"
          >
            Offerte aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
