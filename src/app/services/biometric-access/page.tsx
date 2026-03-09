import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Biometric Access Control | Cenit Security",
  description: "Discreet biometric and smart access control systems for luxury properties. Fingerprint, facial recognition, and integrated home automation across Costa del Sol.",
};

export default function BiometricAccessPage() {
  const features = [
    {
      title: "Fingerprint Recognition",
      description: "High-precision sensors with encrypted storage, allowing keyless entry for authorised family members and staff.",
    },
    {
      title: "Facial Recognition",
      description: "Advanced camera systems that identify and grant access automatically, with anti-spoofing technology.",
    },
    {
      title: "Smart Integration",
      description: "Connect with home automation systems, CCTV, and alarm panels for comprehensive security management.",
    },
    {
      title: "Remote Management",
      description: "Grant or revoke access permissions from anywhere in the world via secure mobile application.",
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
            src="/doors/door-04.jpg"
            alt="Smart access control system"
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
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Intelligent Security</p>
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              Biometric<br />Access Control
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 max-w-2xl">
              The key is you. Effortless entry through advanced recognition technology.
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
                Keys can be copied. Codes can be shared. Your biometrics are uniquely yours.
              </h2>
              <div className="space-y-6 text-lg text-[#f5f0e8]/70 leading-relaxed">
                <p>
                  Biometric access control represents the convergence of security and convenience. Fingerprint sensors, facial recognition cameras, and smart credentials replace traditional keys whilst providing an irrefutable audit trail of who accessed your property and when.
                </p>
                <p>
                  Cenit Security integrates biometric systems discreetly into our door installations or retrofits them to existing security infrastructure. Every system is designed for effortless daily use by family members whilst maintaining rigorous security protocols.
                </p>
                <p>
                  Remote management capabilities allow you to grant temporary access to staff, contractors, or guests from anywhere in the world—and revoke it instantly when no longer required.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-4 border border-[#c9a961]/20" />
              <Image
                src="/doors/door-08.jpg"
                alt="Biometric access installation"
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
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Technology</p>
            <h2 className="text-4xl font-light">Access Control Solutions</h2>
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

      {/* Integration */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Integration</p>
              <h2 className="text-4xl font-light mb-8">Connected Security Ecosystem</h2>
              <div className="space-y-8">
                {[
                  { title: "Home Automation", desc: "Integrate with Control4, Crestron, Savant, and other smart home platforms for unified control." },
                  { title: "CCTV Integration", desc: "Link access events to camera recordings, capturing visual confirmation of every entry and exit." },
                  { title: "Alarm Systems", desc: "Automatic arming and disarming based on access events, with instant alerts for unauthorised attempts." },
                  { title: "Staff Management", desc: "Define access schedules, zones, and permissions for household staff with complete audit trails." },
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
                <Image src="/doors/door-01.jpg" alt="Smart door system" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] mt-12">
                <Image src="/doors/door-06.jpg" alt="Access control" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">Service Areas</p>
          <h2 className="text-4xl font-light mb-12">Biometric Access Installation</h2>
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
          <h2 className="text-4xl font-light mb-6">Upgrade Your Access Control</h2>
          <p className="text-xl text-[#f5f0e8]/60 mb-12">
            Discover how biometric technology can enhance your property&apos;s security and convenience.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0f0f0f] transition-colors"
          >
            Arrange Technology Demo
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
