import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors Los Monteros, Marbella | Cenit Security",
  description: "Bespoke security doors for Los Monteros beachfront properties. Protecting Marbella East's premier residential area with London-standard engineering.",
};

export default function LosMonterosPage() {
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
          <Image src="/doors/door-03.jpg" alt="Los Monteros security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/marbella" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Marbella
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">Los Monteros</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              Los Monteros combines beachfront prestige with established residential character—security must honour both.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Located east of Marbella centre, Los Monteros is one of the original luxury developments on the Costa del Sol. This mature, prestigious area is characterised by substantial beachfront villas set within private gardens, many with direct beach access.
              </p>
              <p>
                The established nature of Los Monteros means many properties have evolved over decades, with security requirements that have grown alongside family needs and changing circumstances. Cenit Security specialises in upgrading protection for these properties whilst respecting their architectural heritage.
              </p>
              <p>
                Our Los Monteros installations focus on enhancing existing security infrastructure: replacing aging doors with modern certified alternatives, adding discrete access control to heritage properties, and creating safe rooms within established floor plans.
              </p>
              <p>
                We understand that Los Monteros residents value their privacy and the quiet character of the area. All work is conducted with minimal disruption, and our team operates with complete discretion throughout every project.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">Services for Los Monteros Properties</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Security Door Upgrades", "Beach Access Protection", "Heritage-Sensitive Installation", "Safe Room Conversion", "Garden & Pool Security", "24/7 Monitoring Integration"].map((service) => (
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
                Los Monteros is situated on the eastern edge of Marbella, between the town centre and Río Real, with properties enjoying both beach frontage and hillside positions.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Property Types</p>
              <ul className="space-y-2 text-[#f5f0e8]/70">
                <li>• Beachfront villas</li>
                <li>• Established family homes</li>
                <li>• Private estates</li>
                <li>• Boutique developments</li>
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
              { name: "Elviria", href: "/locations/marbella/elviria" },
              { name: "Las Chapas", href: "/locations/marbella/las-chapas" },
              { name: "Río Real", href: "/locations/marbella" },
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
