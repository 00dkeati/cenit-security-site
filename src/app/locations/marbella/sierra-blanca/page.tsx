import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors Sierra Blanca, Marbella | Cenit Security",
  description: "Bespoke security doors for Sierra Blanca villas. Protecting Marbella's most exclusive hillside enclave with London-standard engineering.",
};

export default function SierraBlancaPage() {
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
          <Image src="/doors/door-02.jpg" alt="Sierra Blanca security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/marbella" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Marbella
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">Sierra Blanca</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              Sierra Blanca&apos;s commanding hillside position offers spectacular views—and requires security engineered for mountain terrain.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Rising above Marbella&apos;s Golden Mile, Sierra Blanca is one of the most sought-after residential areas in southern Spain. This exclusive gated community is home to substantial villas set within expansive grounds, many with panoramic views stretching from La Concha mountain to the Mediterranean and across to the African coast.
              </p>
              <p>
                Security considerations in Sierra Blanca differ from coastal properties. The mountainous terrain, larger plot sizes, and multiple access points require a comprehensive approach to protection. Cenit Security specialises in securing these challenging environments.
              </p>
              <p>
                Our Sierra Blanca projects encompass grand entrance gates and doors, extensive terrace security across multiple elevations, safe room installations integrated within villa designs, and sophisticated access control systems managing both vehicular and pedestrian entry.
              </p>
              <p>
                We work closely with Sierra Blanca&apos;s community management to ensure all installations meet both individual property requirements and community standards, maintaining the exclusive character of the estate.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">Services for Sierra Blanca Properties</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Villa Entrance Security", "Multi-Level Terrace Access", "Safe Room Design", "Gate & Perimeter Integration", "Staff Quarters Security", "Garage & Vehicle Access"].map((service) => (
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
                Sierra Blanca sits on the slopes of La Concha mountain, directly above the Golden Mile, offering elevation and privacy with easy access to Marbella centre.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Property Types</p>
              <ul className="space-y-2 text-[#f5f0e8]/70">
                <li>• Palatial villas</li>
                <li>• Mountain estates</li>
                <li>• Gated compounds</li>
                <li>• Contemporary mansions</li>
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
              { name: "Cascada de Camoján", href: "/locations/marbella/cascada-de-camojan" },
              { name: "Los Monteros", href: "/locations/marbella/los-monteros" },
              { name: "Nagüeles", href: "/locations/marbella/nagueles" },
              { name: "Elviria", href: "/locations/marbella/elviria" },
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
