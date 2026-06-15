import Link from 'next/link';

export const metadata = {
  title: 'Strand – Kenn Best',
};

const services = [
  { title: 'Zandsuppletie', desc: 'Aanvoer en verdeling van zand op stranden en terreinen.' },
  { title: 'Opbouw strandpaviljoens', desc: 'Professionele opbouw van strandpaviljoens aan het begin van het seizoen.' },
  { title: 'Afbouw strandpaviljoens', desc: 'Snelle en zorgvuldige afbouw na afloop van het seizoen.' },
  { title: 'Strandevenementen', desc: 'Logistiek en opbouw voor evenementen op het strand.' },
  { title: 'Terreinvoorbereiding', desc: 'Egaliseren, ophogen en klaarmaken van strandterreinen.' },
  { title: 'Transport op maat', desc: 'Materiaal- en materieeltransport naar strandlocaties.' },
];

export default function StrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Strand</h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Kenn Best verzorgt alles rondom strandwerkzaamheden – van zandsuppletie tot de opbouw van complete strandpaviljoens.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Ervaren in strandwerk</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Al jarenlang zijn wij actief aan de kust. Of het nu gaat om zandsuppletie, het seizoensklaar maken van een strandpaviljoen of de logistiek rondom een groot strandevenement – wij doen het.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Met onze gespecialiseerde voertuigen en ervaren team zorgen wij voor een vlotte uitvoering, ook in uitdagende strandomstandigheden.
            </p>
            <Link
              href="/offerte"
              className="bg-[#0055A5] text-white font-medium px-6 py-3 rounded hover:bg-[#003D7A] transition-colors inline-block"
            >
              Neem contact op
            </Link>
          </div>
          <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm rounded-lg">
            Foto volgt
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">Onze stranddiensten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio placeholders */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">Projecten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm">
                  Foto volgt
                </div>
                <p className="mt-2 text-sm text-gray-500">Strandproject {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0055A5] text-white text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Strandwerk laten uitvoeren?</h2>
          <p className="text-blue-100 mb-8">
            Neem contact op voor een vrijblijvende offerte.
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
