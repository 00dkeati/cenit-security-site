import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Safe Rooms & Panic Rooms | Cenit Security",
  description: "Discreet safe room and panic room installations for luxury properties across Costa del Sol. Protect your family and valuables with London-standard security engineering.",
};

export default function SafeRoomsPage() {
  const features = [
    {
      title: "Certified Protection",
      description: "Doors and walls engineered to resist sustained attack, with independent security certification.",
    },
    {
      title: "Communication Systems",
      description: "Dedicated phone lines, cellular backup, and intercom systems that operate independently of main property systems.",
    },
    {
      title: "Environmental Control",
      description: "Independent air filtration, climate control, and emergency power supply for extended occupancy.",
    },
    {
      title: "Complete Discretion",
      description: "Concealed entries and finishes that integrate seamlessly with your home's interior design.",
    },
  ];

  const locations = [
    { name: "Marbella", href: "/locations/marbella" },
    { name: "Puerto Banús", href: "/locations/puerto-banus-nueva-andalucia" },
    { name: "Benahavís", href: "/locations/benahavis" },
    { name: "Sotogrande", href: "/locations/sotogrande" },
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
            src="/doors/door-03.jpg"
            alt="Safe room security door"
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
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Ultimate Protection</p>
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              Safe Rooms &<br />Panic Rooms
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 max-w-2xl">
              Discreet sanctuaries engineered to protect what matters most
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
                Peace of mind for your family, protection for your valuables.
              </h2>
              <div className="space-y-6 text-lg text-[#f5f0e8]/70 leading-relaxed">
                <p>
                  A safe room provides the ultimate layer of security—a fortified space within your home where family members can retreat in an emergency, and where high-value assets remain protected around the clock.
                </p>
                <p>
                  Cenit Security designs and installs bespoke safe rooms that integrate invisibly with your home&apos;s architecture. From converting an existing room to purpose-built installations, we engineer each space to certified security standards whilst maintaining the aesthetic quality your property demands.
                </p>
                <p>
                  Every installation includes independent communication systems, emergency provisions, and environmental controls—ensuring complete self-sufficiency when it matters most.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-4 border border-[#c9a961]/20" />
              <Image
                src="/doors/door-06.jpg"
                alt="Safe room installation"
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
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Comprehensive Protection</p>
            <h2 className="text-4xl font-light">Safe Room Specifications</h2>
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

      {/* Types */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Installation Options</p>
              <h2 className="text-4xl font-light mb-8">Tailored to Your Property</h2>
              <div className="space-y-8">
                {[
                  { title: "Room Conversion", desc: "Transform an existing space—walk-in wardrobe, basement room, or study—into a certified safe room with reinforced walls, ceiling, and security door." },
                  { title: "Purpose-Built Installation", desc: "New construction integrated into building plans, allowing for optimal positioning, concealment, and specification." },
                  { title: "Vault Rooms", desc: "Dedicated secure storage for art, jewellery, documents, and other high-value items, with climate control and fire protection." },
                  { title: "Wine Cellars with Security", desc: "Combining collection protection with safe room functionality for dual-purpose installations." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#c9a961]/30 pl-6">
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-[#f5f0e8]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4]">
                <Image src="/doors/door-07.jpg" alt="Safe room door" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] mt-12">
                <Image src="/doors/door-08.jpg" alt="Security installation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Service Areas</p>
          <h2 className="text-4xl font-light mb-12">Safe Room Installations Across Costa del Sol</h2>
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
          <h2 className="text-4xl font-light mb-6">Confidential Consultation</h2>
          <p className="text-xl text-[#f5f0e8]/60 mb-12">
            Safe room enquiries are handled with complete discretion. Contact us to arrange a private assessment.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors"
          >
            Arrange Private Consultation
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
