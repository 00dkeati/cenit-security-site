import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Front Entrance in Nueva Andalucía, Nueva Andalucía | Cenit Security Doors",
  description: "Front Entrance Security Doors for luxury properties in Nueva Andalucía. London-standard security engineering with bespoke design and discreet installation across Nueva Andalucía.",
  keywords: "front entrance security doors, Nueva Andalucía, Nueva Andalucía, security doors, Costa del Sol, luxury security",
};

export default function Page() {
  const features = ["Multi-point locking with hardened steel bolts","Reinforced steel core construction","Custom finishes to match property architecture","Thermal and acoustic insulation","Optional smart lock integration","Concealed hinges for enhanced security"];
  
  const faqs = [{"q":"How long does front entrance door installation take in Nueva Andalucía?","a":"Typical installations in Nueva Andalucía take 1-2 days, depending on structural requirements and any custom finishes specified."},{"q":"Can you match the architectural style of my Nueva Andalucía property?","a":"Absolutely. We work with a range of finishes and styles to complement Nueva Andalucía's diverse architecture, from traditional Andalusian to contemporary designs."},{"q":"What security certifications do your doors meet?","a":"All our security doors meet European standards for forced entry resistance, with options up to RC4 certification for maximum protection."}];

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/80">
            <Link href="/#installations" className="hover:text-[#c9a961] transition-colors">Portfolio</Link>
            <Link href="/#services" className="hover:text-[#c9a961] transition-colors">Services</Link>
            <Link href="/#locations" className="hover:text-[#c9a961] transition-colors">Locations</Link>
            <Link href="/#contact" className="hover:text-[#c9a961] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="/doors/door-01.jpg" alt="Front Entrance in Nueva Andalucía" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="/services/front-entrance" className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] hover:text-[#d4ba7a] transition-colors">
                Front Entrance
              </Link>
              <span className="text-[#f5f0e8]/30">|</span>
              <Link href="/locations/puerto-banus-nueva-andalucia" className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] hover:text-[#d4ba7a] transition-colors">
                Nueva Andalucía
              </Link>
              <span className="text-[#f5f0e8]/30">|</span>
              <Link href="/locations/puerto-banus-nueva-andalucia/nueva-andalucia" className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] hover:text-[#d4ba7a] transition-colors">
                Nueva Andalucía
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-light">Front Entrance in Nueva Andalucía</h1>
            <p className="text-xl text-[#f5f0e8]/70 mt-4">Nueva Andalucía, Costa del Sol</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
              <h2 className="text-3xl font-light leading-relaxed text-[#f5f0e8]/90">
                Expert Front Entrance Security Doors for Nueva Andalucía Properties
              </h2>
              <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
                <p>Front entrance security is paramount for Nueva Andalucía properties. As the primary point of entry, your front door must project prestige while providing certified protection against forced entry. Cenit Security Doors engineers bespoke entrance solutions that achieve both objectives.</p>
                <p>
                  Nueva Andalucía is one of Nueva Andalucía&apos;s most sought-after addresses, home to discerning residents who expect nothing less than excellence. Our security solutions are engineered to match these expectations—combining certified protection with aesthetic refinement.
                </p>
                <p>Our Nueva Andalucía installations begin with a discrete site survey to assess structural requirements and aesthetic preferences. We then provide detailed specifications and 3D visualisations before manufacturing commences. Installation is completed by our specialist team, typically within 1-2 days, with minimal disruption to your household.</p>
                <p>
                  Whether you&apos;re building a new property in Nueva Andalucía, renovating an existing home, or upgrading your current security, Cenit Security Doors provides the expertise and discretion your project requires.
                </p>
              </div>

              <div className="pt-8 border-t border-[#2a2a2a]">
                <h3 className="text-2xl font-light mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-[#f5f0e8]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-[#2a2a2a]">
                <h3 className="text-2xl font-light mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-l-2 border-[#c9a961]/30 pl-6">
                      <h4 className="text-lg font-light mb-2 text-[#f5f0e8]">{faq.q}</h4>
                      <p className="text-[#f5f0e8]/60">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-8">
                <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Service</p>
                <p className="text-xl mb-4">Front Entrance Security Doors</p>
                <Link href="/services/front-entrance" className="text-[#c9a961] text-sm hover:underline">View all Front Entrance services →</Link>
              </div>
              <div className="bg-[#1a1a1a] p-8">
                <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Location</p>
                <p className="text-xl mb-2">Nueva Andalucía</p>
                <p className="text-[#f5f0e8]/60 mb-4">Nueva Andalucía, Costa del Sol</p>
                <Link href="/locations/puerto-banus-nueva-andalucia/nueva-andalucia" className="text-[#c9a961] text-sm hover:underline">View Nueva Andalucía area guide →</Link>
              </div>
              <a 
                href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20front%20entrance%20security%20doors%20for%20my%20property%20in%20Nueva%20Andaluc%C3%ADa%2C%20Nueva%20Andaluc%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs tracking-[0.15em] uppercase transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Contact via WhatsApp
              </a>
              <div className="border border-[#2a2a2a] p-6">
                <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Also in Nueva Andalucía</p>
                <div className="space-y-2 text-sm">
                  <Link href="/services/front-entrance/puerto-banus-nueva-andalucia" className="block text-[#f5f0e8]/60 hover:text-[#c9a961]">Front Entrance in Nueva Andalucía →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-sans text-sm tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">© 2026 Cenit Security Doors. Bespoke security solutions for distinguished properties.</p>
        </div>
      </footer>
    </main>
  );
}