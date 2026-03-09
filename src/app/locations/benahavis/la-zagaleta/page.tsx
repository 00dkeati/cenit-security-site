import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors La Zagaleta, Benahavís | Cenit Security",
  description: "Bespoke security doors for La Zagaleta estates. Protecting Europe's most exclusive gated community with London-standard engineering and absolute discretion.",
};

export default function LaZagaletaPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">Cenit Security</Link>
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
          <Image src="/doors/door-01.jpg" alt="La Zagaleta security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/benahavis" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Benahavís
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">La Zagaleta</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              La Zagaleta is Europe&apos;s most exclusive address. Security here is not optional—it is existential.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Set within 900 hectares of private estate in the hills above Marbella, La Zagaleta represents the pinnacle of European residential exclusivity. With only 420 plots within double-gated perimeters, 24-hour security patrols, and a resident population of billionaires, royalty, and global business leaders, La Zagaleta demands security providers who operate at a commensurate level.
              </p>
              <p>
                Cenit Security has established a trusted presence within La Zagaleta, working with residents and the estate management to provide security installations that complement the community&apos;s existing infrastructure whilst meeting the elevated requirements of individual properties.
              </p>
              <p>
                La Zagaleta residences typically require comprehensive security packages: reinforced entrance doors engineered to the highest certification levels, extensive safe room installations protecting both family members and valuable assets, sophisticated biometric access systems, and integration with the estate&apos;s security protocols.
              </p>
              <p>
                Every La Zagaleta project is handled with absolute confidentiality. We coordinate directly with estate management regarding access, scheduling, and any works that interface with community systems. Residents can be assured that their privacy is protected throughout.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">La Zagaleta Security Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Highest-Rated Security Doors", "Multi-Room Safe Installations", "Art & Asset Protection", "Estate Integration", "Helipad & Garage Security", "Confidential Project Management"].map((service) => (
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
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">The Estate</p>
              <p className="text-[#f5f0e8]/70 leading-relaxed">
                La Zagaleta encompasses 900 hectares with two 18-hole golf courses, equestrian facilities, a private clubhouse, and the highest level of estate-wide security in Europe.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Property Scale</p>
              <ul className="space-y-2 text-[#f5f0e8]/70">
                <li>• €5M - €50M+ residences</li>
                <li>• 2,000 - 10,000+ sqm villas</li>
                <li>• Multiple staff quarters</li>
                <li>• Private grounds 1-10 hectares</li>
              </ul>
            </div>
            <Link href="/#contact" className="block text-center font-sans text-xs tracking-[0.2em] uppercase py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors">
              Confidential Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-6">Other Benahavís Areas</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "El Madroñal", href: "/locations/benahavis/el-madroñal" },
              { name: "La Quinta", href: "/locations/benahavis/la-quinta" },
              { name: "Los Arqueros", href: "/locations/benahavis" },
              { name: "Monte Mayor", href: "/locations/benahavis" },
            ].map((area) => (
              <Link key={area.href} href={area.href} className="px-4 py-2 border border-[#2a2a2a] hover:border-[#c9a961] text-[#f5f0e8]/60 hover:text-[#c9a961] transition-colors text-sm">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">Cenit Security</Link>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">© 2026 Cenit Security. Bespoke security solutions for distinguished properties.</p>
        </div>
      </footer>
    </main>
  );
}
