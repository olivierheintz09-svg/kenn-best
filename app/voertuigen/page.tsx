import Link from 'next/link';
import { vehicles } from '../../data/vehicles';

function formatPrice(price: number | null): string {
  if (price === null) return 'Prijs op aanvraag';
  return `€ ${price.toLocaleString('nl-NL')}`;
}

function formatKm(km: number | null): string | null {
  if (km === null) return null;
  return `${km.toLocaleString('nl-NL')} km`;
}

export const metadata = {
  title: 'Voertuigen – Kenn Best',
};

export default function VoertuigenPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Voertuigen</h1>
      <p className="text-gray-500 mb-10">Ons actuele aanbod van tweedehands voertuigen.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Placeholder image */}
            <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm">
              Foto volgt
            </div>

            <div className="p-5 flex flex-col flex-1">
              {/* Type badge */}
              <span className="inline-block bg-[#F5F5F5] text-gray-600 text-xs font-medium px-2 py-1 rounded mb-3 self-start">
                {v.type}
              </span>

              <h2 className="font-semibold text-[#1A1A1A] leading-snug mb-1">{v.title}</h2>

              <p className="text-sm text-gray-500 mb-3">
                {v.year}
                {formatKm(v.km) ? ` · ${formatKm(v.km)}` : ''}
              </p>

              <p className="font-bold text-[#0055A5] mb-4">{formatPrice(v.price)}</p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {v.features.map((f) => (
                  <span
                    key={f}
                    className="bg-blue-50 text-[#0055A5] text-xs px-2 py-0.5 rounded"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`/voertuigen/${v.slug}`}
                  className="text-sm font-medium text-[#0055A5] hover:underline"
                >
                  Meer info →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
