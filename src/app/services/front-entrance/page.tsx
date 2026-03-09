import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Front Entrance Security Doors | Cenit Security",
  description: "Bespoke front entrance security doors for luxury villas and apartments across Costa del Sol. London-standard engineering with seamless architectural integration.",
};

export default function FrontEntrancePage() {
  const features = [
    {
      title: "Reinforced Steel Core",
      description: "Multi-point locking systems with hardened steel cores engineered to resist forced entry attempts.",
    },
    {
      title: "Architectural Integration",
      description: "Custom designed to complement your property's aesthetic, from Mediterranean villas to contemporary homes.",
    },
    {
      title: "Discreet Installation",
      description: "Professional fitting with minimal disruption, conducted with complete privacy and discretion.",
    },
    {
      title: "Climate Engineered",
      description: "Specified for the Mediterranean climate with thermal efficiency and weather resistance.",
    },
  ];

  const locations = [
    { name: "Marbella", href: "/locations/marbella" },
    { name: "Puerto Banús", href: "/locations/puerto-banus-nueva-andalucia" },
    { name: "Benahavís", href: "/locations/benahavis" },
    { name: "Estepona", href: "/locations/estepona" },
    { name: "Sotogrande", href: "/locations/sotogrande" },
    { name: "San Pedro de Alcántara", href: "/locations/san-pedro-de-alcantara" },
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
            src="/doors/door-01.jpg"
            alt="Luxury front entrance security door"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-6 hover:text-[#d4ba7a] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Our Services
            </Link>
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Security Solutions</p>
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              Front Entrance<br />Security Doors
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 max-w-2xl">
              The first line of defence, engineered to the highest standards without compromising elegance
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent mb-8" />
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
                Your entrance makes a statement. It should also provide absolute security.
              </h2>
              <div className="space-y-6 text-lg text-[#f5f0e8]/70 leading-relaxed">
                <p>
                  Every Cenit front entrance door is engineered around a reinforced steel core, with multi-point locking systems and structural frames designed to resist forced entry. Yet from the outside, they present the elegant aesthetic your property demands.
                </p>
                <p>
                  We work with architects, interior designers, and directly with homeowners to ensure each door integrates seamlessly with the property&apos;s architecture—whether a traditional Andalusian villa, a contemporary masterpiece, or a historic renovation.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-4 border border-[#c9a961]/20" />
              <Image
                src="/doors/door-04.jpg"
                alt="Bespoke entrance door installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Engineering Excellence</p>
            <h2 className="text-4xl font-light">What Sets Us Apart</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="p-8 border border-[#2a2a2a] hover:border-[#c9a961]/30 transition-colors">
                <div className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-light mb-4">{feature.title}</h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Our Process</p>
              <h2 className="text-4xl font-light mb-8">From Consultation to Completion</h2>
              <div className="space-y-8">
                {[
                  { step: "Consultation", desc: "Discreet site visit to assess requirements, architectural style, and security needs." },
                  { step: "Specification", desc: "Detailed technical drawings and material selection, approved before manufacture." },
                  { step: "Manufacture", desc: "Precision engineering to exact specifications, typically 6-8 weeks." },
                  { step: "Installation", desc: "Professional fitting by our specialist team, with full testing and handover." },
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="font-sans text-[#c9a961] text-sm">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h3 className="text-xl font-light mb-2">{item.step}</h3>
                      <p className="text-[#f5f0e8]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4]">
                <Image src="/doors/door-02.jpg" alt="Security door detail" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] mt-12">
                <Image src="/doors/door-05.jpg" alt="Entrance installation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Service Areas</p>
          <h2 className="text-4xl font-light mb-12">Available Across Costa del Sol</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="px-6 py-3 border border-[#2a2a2a] hover:border-[#c9a961] text-[#f5f0e8]/70 hover:text-[#c9a961] transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Discuss Your Entrance Security</h2>
          <p className="text-xl text-[#f5f0e8]/60 mb-12">
            Every project begins with a private consultation to assess your specific requirements.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors"
          >
            Arrange Consultation
          </Link>
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
