'use client';

import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type FormValues = {
  naam: string;
  bedrijfsnaam: string;
  email: string;
  telefoon: string;
  onderwerp: string;
  voertuig: string;
  bericht: string;
};

export default function OfferteForm() {
  const searchParams = useSearchParams();
  const prefillVoertuig = searchParams.get('voertuig') ?? '';
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      voertuig: prefillVoertuig,
    },
  });

  function onSubmit(_data: FormValues) {
    // No actual email sending — just show success
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold text-green-800 mb-2">Aanvraag verstuurd</h2>
        <p className="text-green-700 text-sm">
          Bedankt voor uw aanvraag. Wij nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Naam */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="naam">
          Naam <span className="text-red-500">*</span>
        </label>
        <input
          id="naam"
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent"
          {...register('naam', { required: 'Naam is verplicht' })}
        />
        {errors.naam && (
          <p className="text-red-500 text-xs mt-1">{errors.naam.message}</p>
        )}
      </div>

      {/* Bedrijfsnaam */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="bedrijfsnaam">
          Bedrijfsnaam
        </label>
        <input
          id="bedrijfsnaam"
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent"
          {...register('bedrijfsnaam')}
        />
      </div>

      {/* E-mail */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="email">
          E-mailadres <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent"
          {...register('email', {
            required: 'E-mailadres is verplicht',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ongeldig e-mailadres' },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Telefoon */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="telefoon">
          Telefoonnummer
        </label>
        <input
          id="telefoon"
          type="tel"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent"
          {...register('telefoon')}
        />
      </div>

      {/* Onderwerp */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="onderwerp">
          Onderwerp
        </label>
        <select
          id="onderwerp"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent bg-white"
          {...register('onderwerp')}
        >
          <option value="">Selecteer een onderwerp</option>
          <option value="voertuig-aankoop">Voertuig aankoop</option>
          <option value="voertuig-verkoop">Voertuig verkoop</option>
          <option value="strand">Strandwerkzaamheden</option>
          <option value="transport">Transport</option>
          <option value="overig">Overig</option>
        </select>
      </div>

      {/* Voertuig */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="voertuig">
          Voertuig (optioneel)
        </label>
        <input
          id="voertuig"
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent"
          placeholder="Bijv. Mercedes-Benz Atego"
          {...register('voertuig')}
        />
      </div>

      {/* Bericht */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1" htmlFor="bericht">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="bericht"
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055A5] focus:border-transparent resize-y"
          placeholder="Omschrijf uw aanvraag..."
          {...register('bericht', { required: 'Bericht is verplicht' })}
        />
        {errors.bericht && (
          <p className="text-red-500 text-xs mt-1">{errors.bericht.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0055A5] text-white font-medium py-3 rounded hover:bg-[#003D7A] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Versturen...' : 'Aanvraag versturen'}
      </button>
    </form>
  );
}
