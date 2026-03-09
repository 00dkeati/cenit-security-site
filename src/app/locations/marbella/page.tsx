import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors in Marbella | Cenit Security",
  description:
    "Bespoke security doors for private residences across Marbella, including Golden Mile, Sierra Blanca, Los Monteros, Río Real, Elviria and Las Chapas.",
};

export default function MarbellaPage() {
  const areas = [
    "Golden Mile",
    "Sierra Blanca", 
    "Cascada de Camoján",
    "Nagüeles",
    "Marbella Hill Club",
    "Los Monteros",
    "Bahía de Marbella",
    "Río Real",
    "Elviria",
    "Las Chapas",
    "Costabella",
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">
            Cenit Security
          </Link>
          <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/80">
            <Link href="/#installations" className="hover:text-[#c9a961] transition-colors">Portfolio</Link>
            <Link href="/#services" className="hover:text-[#c9a961] transition-colors">Services</Link>
            <Link href="/#locations" className="hover:text-[#c9a961] transition-colors">Locations</Link>
            <Link href="/#contact" className="hover:text-[#c9a961] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/doors/door-02.jpg"
            alt="Luxury security door in Marbella"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/#locations" 
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-6 hover:text-[#d4ba7a] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Locations
            </Link>
            <div className="gold-line mb-6" style={{width: '60px', height: '1px', background: 'linear-gradient(90deg, #c9a961, transparent)'}} />
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              Marbella
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 max-w-2xl">
              Bespoke security doors for the Costa del Sol&apos;s most prestigious address
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-xl leading-relaxed text-[#f5f0e8]/80 space-y-6">
                <p>
                  Cenit Security provides bespoke security doors for private residences across Marbella, from the Golden Mile and Sierra Blanca to Elviria, Río Real and Las Chapas.
                </p>
                <p>
                  Our focus is on high-value villas and apartments where structural security is paramount, yet architectural character cannot be compromised. Every door is engineered around reinforced steel cores and structural frames designed to resist forced entry.
                </p>
                <p>
                  We work extensively in the most established areas of Marbella, where each property presents different architectural constraints and security considerations. Each door is specified accordingly, ensuring a bespoke solution that integrates seamlessly with your home.
                </p>
              </div>

              <div className="pt-8 border-t border-[#2a2a2a]">
                <h2 className="text-2xl font-light mb-6">Our Approach</h2>
                <div className="space-y-6 text-[#f5f0e8]/70 leading-relaxed">
                  <p>
                    Locking systems, hinges and fixing methods are selected and specified as part of the wider security approach, rather than treated as isolated components. Where required, discreet access control and biometric systems can be integrated into the door design.
                  </p>
                  <p>
                    For front entrance security doors, terrace access, safe room installations and internal door upgrades in Marbella, we approach every project as a comprehensive security solution. Surveys are carried out discreetly, technical details are documented with precision, and installation is overseen directly to ensure that the finished door performs as specified.
                  </p>
                  <p>
                    Whether securing a family home above the Golden Mile, a hillside villa in Cascada de Camoján or a beachfront property in Los Monteros, Cenit Security delivers London-standard security doors tailored to Marbella residences.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-[#1a1a1a] p-8">
                <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-6">
                  Areas We Serve
                </p>
                <ul className="space-y-3">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961]/50" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#2a2a2a] p-8">
                <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">
                  Services Available
                </p>
                <ul className="space-y-4 text-[#f5f0e8]/70">
                  <li>Front Entrance Security Doors</li>
                  <li>Terrace & Secondary Access</li>
                  <li>Safe Room Installations</li>
                  <li>Internal Security Upgrades</li>
                  <li>Biometric Access Control</li>
                </ul>
              </div>

              <Link 
                href="/#contact" 
                className="block text-center font-sans text-xs tracking-[0.2em] uppercase py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors"
              >
                Arrange Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-4">
            {["/doors/door-04.jpg", "/doors/door-05.jpg", "/doors/door-06.jpg", "/doors/door-07.jpg"].map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden">
                <Image src={src} alt="Security door installation" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">
            Cenit Security
          </Link>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">
            © 2026 Cenit Security. Bespoke security solutions for distinguished properties.
          </p>
        </div>
      </footer>
    </main>
  );
}
