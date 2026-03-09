import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const locations = [
    { name: "Marbella", href: "/locations/marbella" },
    { name: "Puerto Banús", href: "/locations/puerto-banus-nueva-andalucia" },
    { name: "Benahavís", href: "/locations/benahavis" },
    { name: "San Pedro de Alcántara", href: "/locations/san-pedro-de-alcantara" },
    { name: "Estepona", href: "/locations/estepona" },
    { name: "Sotogrande", href: "/locations/sotogrande" },
    { name: "La Cala de Mijas", href: "/locations/la-cala-de-mijas" },
    { name: "Costa del Sol", href: "/locations/costa-del-sol" },
  ];

  const galleryImages = [
    { src: "/doors/door-01.jpg", alt: "Bespoke entrance with artisan bronze detailing" },
    { src: "/doors/door-02.jpg", alt: "Villa entrance with reinforced glazing" },
    { src: "/doors/door-03.jpg", alt: "Contemporary security installation" },
    { src: "/doors/door-04.jpg", alt: "Mediterranean villa security entrance" },
    { src: "/doors/door-05.jpg", alt: "Private residence security door" },
    { src: "/doors/door-06.jpg", alt: "Penthouse entrance security system" },
    { src: "/doors/door-07.jpg", alt: "Exclusive property entrance" },
    { src: "/doors/door-08.jpg", alt: "High-security residential door" },
  ];

  const services = [
    {
      title: "Front Entrance",
      description: "Bespoke security doors engineered to the highest standards, seamlessly integrated with your property's architecture.",
    },
    {
      title: "Terrace & Secondary Access",
      description: "Reinforced access points that maintain aesthetic elegance whilst providing complete peace of mind.",
    },
    {
      title: "Safe Rooms",
      description: "Discreet panic room installations and conversions, protecting what matters most.",
    },
    {
      title: "Access Control",
      description: "Biometric systems and smart integration, designed for effortless security.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">
            Cenit Security
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/80">
            <a href="#installations" className="hover:text-[#c9a961] transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-[#c9a961] transition-colors">Services</a>
            <a href="#locations" className="hover:text-[#c9a961] transition-colors">Locations</a>
            <a href="#contact" className="hover:text-[#c9a961] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/doors/door-01.jpg"
            alt="Luxury security door installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f0f0f]" />
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="gold-line mx-auto mb-8 animate-fade-in" />
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in animate-delay-1">
            Bespoke Security for Distinguished Properties
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 animate-fade-in animate-delay-2">
            Where Elegance<br />Meets Security
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#f5f0e8]/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-3">
            London-standard engineering, crafted for the Costa del Sol&apos;s most prestigious residences
          </p>
          <a href="#installations" className="btn-luxury inline-block animate-fade-in animate-delay-3">
            View Our Work
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line mx-auto mb-8" />
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-6">
            The Cenit Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
            Every installation is a testament to uncompromising craftsmanship, engineered to protect whilst enhancing the aesthetic integrity of your home.
          </h2>
          <p className="text-lg text-[#f5f0e8]/60 leading-relaxed">
            From initial consultation to final commissioning, we oversee every detail with the discretion and precision your property deserves.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="installations" className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="gold-line mx-auto mb-8" />
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-light">
              Selected Installations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`luxury-image-container relative ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                } aspect-[3/4] group cursor-pointer`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-sans tracking-wide text-[#f5f0e8]">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="gold-line mx-auto mb-8" />
            <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-light">
              Comprehensive Security Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 border border-[#2a2a2a] hover:border-[#c9a961]/30 transition-colors duration-500"
              >
                <div className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-light mb-4 group-hover:text-[#c9a961] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-32 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line mb-8" />
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">
                Serving the Costa del Sol
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                From Marbella to Sotogrande
              </h2>
              <p className="text-xl text-[#f5f0e8]/60 leading-relaxed mb-12">
                We serve the most prestigious addresses across the Costa del Sol, delivering London-standard security to homes that demand nothing less than excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="group flex items-center gap-3 py-3 text-lg hover:text-[#c9a961] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#c9a961]/40 group-hover:bg-[#c9a961] transition-colors" />
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-8 border border-[#c9a961]/20" />
              <Image
                src="/doors/door-03.jpg"
                alt="Luxury security installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/doors/door-05.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Discuss Your Requirements
          </h2>
          <p className="text-xl text-[#f5f0e8]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            Every project begins with a private consultation. Contact us to arrange a discreet assessment of your property.
          </p>
          <a href="#contact" className="btn-luxury inline-block">
            Arrange Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-line mb-8" />
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl font-light mb-8">
                Begin Your Consultation
              </h2>
              <p className="text-[#f5f0e8]/60 leading-relaxed mb-12">
                Whether you&apos;re securing a new property or upgrading existing installations, we provide expert guidance tailored to your specific requirements.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-2">Email</p>
                  <p className="text-xl">enquiries@cenitsecurity.com</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-2">Telephone</p>
                  <p className="text-xl">+34 951 XXX XXX</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-2">Coverage</p>
                  <p className="text-xl">Costa del Sol, Spain</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-10">
              <form className="space-y-6">
                <div>
                  <label className="block font-sans text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-lg focus:border-[#c9a961] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-lg focus:border-[#c9a961] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 mb-3">
                    Property Location
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-lg focus:border-[#c9a961] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-lg focus:border-[#c9a961] outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-luxury w-full mt-8">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#c9a961] font-sans text-xs tracking-[0.3em] uppercase">
            Cenit Security
          </div>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">
            © 2026 Cenit Security. Bespoke security solutions for distinguished properties.
          </p>
        </div>
      </footer>
    </main>
  );
}
