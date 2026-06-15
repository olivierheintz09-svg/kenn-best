import { Suspense } from 'react';
import OfferteForm from './OfferteForm';

export const metadata = {
  title: 'Offerte aanvragen – Kenn Best',
};

export default function OffertePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Offerte aanvragen</h1>
      <p className="text-gray-500 mb-10">
        Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
      </p>
      <Suspense fallback={<div className="text-gray-400 text-sm">Formulier laden...</div>}>
        <OfferteForm />
      </Suspense>
    </div>
  );
}
