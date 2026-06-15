export const metadata = {
  title: 'Over Kenn Best',
};

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Over Kenn Best</h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Eerlijk handelen, korte lijnen en jarenlange ervaring in voertuigen, strand en transport.
          </p>
        </div>
      </section>

      {/* 2-col text + image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Wie zijn wij?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kenn Best is een handelsbedrijf gevestigd in Heemskerk. Wij zijn gespecialiseerd in de aan- en verkoop van tweedehands vrachtwagens, opleggers, personenauto&apos;s en aanhangwagens.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Naast voertuigenhandel zijn wij actief in strandwerkzaamheden en transport. Door onze brede ervaring kunnen wij klanten op meerdere vlakken ontzorgen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wij geloven in eerlijke prijzen, persoonlijk contact en een no-nonsense aanpak. Kom langs in Heemskerk of neem telefonisch contact op.
            </p>
          </div>
          <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-400 text-sm rounded-lg">
            Foto volgt
          </div>
        </div>
      </section>

      {/* 3 service blocks */}
      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">Wat wij bieden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">🚛</div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Voertuigenhandel</h3>
              <p className="text-gray-500 text-sm">
                Breed aanbod van tweedehands voertuigen. Eerlijk geprijsd, goed onderhouden.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">🏖️</div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Strandwerk</h3>
              <p className="text-gray-500 text-sm">
                Zandsuppletie, op- en afbouw strandpaviljoens en strandevenementen.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Transport</h3>
              <p className="text-gray-500 text-sm">
                Betrouwbaar nationaal en internationaal transport voor bedrijven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info block */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-[#1A1A1A] mb-1">Adres</p>
              <p className="text-gray-600 text-sm">Strengweg 34<br />Heemskerk</p>
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A] mb-1">Telefoon</p>
              <a href="tel:+31653699390" className="text-[#0055A5] text-sm hover:underline">
                +31 6 53699390
              </a>
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A] mb-1">Website</p>
              <p className="text-gray-600 text-sm">kenn.best</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
