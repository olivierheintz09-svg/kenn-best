import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vehicles } from '../../../data/vehicles';

function formatPrice(price: number | null): string {
  if (price === null) return 'Prijs op aanvraag';
  return `€ ${price.toLocaleString('nl-NL')}`;
}

function formatKm(km: number | null): string | null {
  if (km === null) return null;
  return `${km.toLocaleString('nl-NL')} km`;
}

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  return {
    title: vehicle ? `${vehicle.title} – Kenn Best` : 'Voertuig niet gevonden',
  };
}

export default async function VoertuigDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/voertuigen" className="text-sm text-gray-500 hover:text-[#0055A5] mb-6 inline-block">
        ← Terug naar overzicht
      </Link>

      {/* Large placeholder */}
      <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm rounded-lg mb-8">
        Foto volgt
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main info */}
        <div className="flex-1">
          <span className="inline-block bg-[#F5F5F5] text-gray-600 text-xs font-medium px-2 py-1 rounded mb-3">
            {vehicle.type}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4 leading-snug">
            {vehicle.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <span>Bouwjaar: <strong>{vehicle.year}</strong></span>
            {formatKm(vehicle.km) && (
              <span>Kilometerstand: <strong>{formatKm(vehicle.km)}</strong></span>
            )}
            <span>Merk: <strong>{vehicle.brand}</strong></span>
          </div>

          <p className="text-2xl font-bold text-[#0055A5] mb-6">{formatPrice(vehicle.price)}</p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {vehicle.features.map((f) => (
              <span
                key={f}
                className="bg-blue-50 text-[#0055A5] text-sm px-3 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          <h2 className="font-semibold text-lg mb-2 text-[#1A1A1A]">Omschrijving</h2>
          <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
        </div>

        {/* CTA sidebar */}
        <div className="lg:w-72">
          <div className="bg-[#F5F5F5] rounded-lg p-6 sticky top-24">
            <h3 className="font-bold text-[#1A1A1A] mb-3">Interesse?</h3>
            <p className="text-sm text-gray-600 mb-5">
              Vraag vrijblijvend een offerte aan of neem contact op voor meer informatie.
            </p>
            <Link
              href={`/offerte?voertuig=${encodeURIComponent(vehicle.title)}`}
              className="block bg-[#0055A5] text-white text-center font-medium px-4 py-3 rounded hover:bg-[#003D7A] transition-colors mb-3"
            >
              Offerte aanvragen
            </Link>
            <a
              href="tel:+31653699390"
              className="block border border-[#0055A5] text-[#0055A5] text-center font-medium px-4 py-3 rounded hover:bg-blue-50 transition-colors"
            >
              Bel ons
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
