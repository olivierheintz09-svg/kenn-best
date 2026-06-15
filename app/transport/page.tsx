import Link from 'next/link';

export const metadata = {
  title: 'Transport – Kenn Best',
};

const whatWeTransport = [
  { title: 'Bouwmaterialen', desc: 'Zand, grind, stenen en overige bouwmaterialen.' },
  { title: 'Machines & materieel', desc: 'Graafmachines, kranen en ander zwaar materieel.' },
  { title: 'Pallets & colli', desc: 'Stukgoederen op pallets, nationaal en internationaal.' },
  { title: 'Maatwerk', desc: 'Uitzonderlijk transport en opdrachten op maat.' },
];

export default function TransportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Transport</h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Betrouwbaar transport voor bedrijven. Nationaal en internationaal, met een vaste chauffeur en scherpe tarieven.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Flexibel en betrouwbaar</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kenn Best verzorgt transport voor grote en kleine opdrachtgevers. Onze vloot bestaat uit vrachtwagens en opleggers die breed inzetbaar zijn.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wij werken graag op vaste basis samen of verzorgen eenmalige transporten. Neem contact op voor een scherpe offerte.
            </p>
            <Link
              href="/offerte"
              className="bg-[#0055A5] text-white font-medium px-6 py-3 rounded hover:bg-[#003D7A] transition-colors inline-block"
            >
              Offerte aanvragen
            </Link>
          </div>
          <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm rounded-lg">
            Foto volgt
          </div>
        </div>
      </section>

      {/* What we transport */}
      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">Wat wij transporteren</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeTransport.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Werkwijze</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-[#0055A5] mb-2">01</div>
              <h3 className="font-semibold text-[#1A1A1A] mb-1">Aanvraag</h3>
              <p className="text-gray-500 text-sm">Stuur ons een aanvraag via het offerteformulier of bel direct.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0055A5] mb-2">02</div>
              <h3 className="font-semibold text-[#1A1A1A] mb-1">Offerte</h3>
              <p className="text-gray-500 text-sm">U ontvangt binnen 24 uur een scherpe offerte op maat.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0055A5] mb-2">03</div>
              <h3 className="font-semibold text-[#1A1A1A] mb-1">Uitvoering</h3>
              <p className="text-gray-500 text-sm">Wij verzorgen het transport punctueel en professioneel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0055A5] text-white text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Transport nodig?</h2>
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
