import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors Elviria, Marbella | Cenit Security",
  description: "Bespoke security doors for Elviria properties. Protecting Marbella East's family-friendly luxury community with London-standard engineering.",
};

export default function ElviriaPage() {
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
          <Image src="/doors/door-04.jpg" alt="Elviria security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/marbella" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Marbella
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">Elviria</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              Elviria&apos;s family-focused community demands security that protects without creating fortress atmospheres.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Elviria has established itself as Marbella&apos;s premier family neighbourhood, combining excellent international schools, quality dining, and accessible beaches with the privacy and space that substantial properties afford.
              </p>
              <p>
                Security in Elviria must balance robust protection with the relaxed, community-oriented lifestyle that draws families to the area. Cenit Security designs installations that provide certified resistance to forced entry whilst maintaining welcoming aesthetics.
              </p>
              <p>
                Our Elviria projects frequently include family-focused features: safe rooms designed for quick access during emergencies, biometric systems that children can operate easily, and integrated alarm systems with child-friendly protocols.
              </p>
              <p>
                We also serve Elviria&apos;s growing community of contemporary new-builds, where security can be integrated from the architectural planning stage for seamless, invisible protection.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">Services for Elviria Properties</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Family Home Security", "Child-Friendly Systems", "New-Build Integration", "School Run Access", "Garden & Pool Safety", "Smart Home Connection"].map((service) => (
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
              <p className="text-[#f5f0e8]/70 leading-relaxed">
                Elviria is located east of Marbella, known for its family-friendly atmosphere, international schools, and excellent beach clubs including Nikki Beach.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Property Types</p>
              <ul className="space-y-2 text-[#f5f0e8]/70">
                <li>• Family villas</li>
                <li>• Contemporary new-builds</li>
                <li>• Gated communities</li>
                <li>• Golf course properties</li>
              </ul>
            </div>
            <Link href="/#contact" className="block text-center font-sans text-xs tracking-[0.2em] uppercase py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors">
              Arrange Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-6">Other Marbella Areas</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Golden Mile", href: "/locations/marbella/golden-mile" },
              { name: "Sierra Blanca", href: "/locations/marbella/sierra-blanca" },
              { name: "Los Monteros", href: "/locations/marbella/los-monteros" },
              { name: "Las Chapas", href: "/locations/marbella/las-chapas" },
              { name: "Nagüeles", href: "/locations/marbella/nagueles" },
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
