import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors Benalmádena, Costa del Sol | Cenit Security Doors",
  description: "Bespoke security doors for Benalmádena properties. Popular resort town with marina. London-standard engineering with discreet installation.",
};

export default function BenalmadenaPage() {
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
          <Image src="/doors/door-05.jpg" alt="Benalmádena security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/costa-del-sol" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Costa del Sol
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">Benalmádena</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              Popular resort town with marina. Cenit Security Doors provides bespoke security solutions for this prestigious area.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Properties in Benalmádena represent significant investments that deserve protection matching their value. Cenit Security Doors specialises in engineering bespoke security solutions for the unique requirements of this distinguished address.
              </p>
              <p>
                Our installations in Benalmádena encompass front entrance security doors, terrace and secondary access protection, safe room installations, and sophisticated biometric access control systems. Each project is approached with the discretion and precision that residents of Benalmádena expect.
              </p>
              <p>
                We understand the architectural character of Benalmádena and ensure every security installation complements your property&apos;s aesthetic whilst providing certified protection against forced entry.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">Security Services in Benalmádena</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Front Entrance Security", "Terrace & Pool Access", "Safe Room Installation", "Biometric Access Control", "Staff Entry Systems", "CCTV Integration"].map((service) => (
                  <div key={service} className="flex items-center gap-3 text-[#f5f0e8]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961]" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Location</p>
              <p className="text-[#f5f0e8]/70 leading-relaxed">Benalmádena is located within Costa del Sol, one of the Costa del Sol&apos;s most sought-after areas.</p>
            </div>
            <a 
              href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20security%20doors%20for%20my%20property%20in%20Benalm%C3%A1dena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs tracking-[0.15em] uppercase transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
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