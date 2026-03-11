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
      href: "/services/front-entrance",
    },
    {
      title: "Terrace & Secondary Access",
      description: "Reinforced access points that maintain aesthetic elegance whilst providing complete peace of mind.",
      href: "/services/terrace-access",
    },
    {
      title: "Safe Rooms",
      description: "Discreet panic room installations and conversions, protecting what matters most.",
      href: "/services/safe-rooms",
    },
    {
      title: "Access Control",
      description: "Biometric systems and smart integration, designed for effortless security.",
      href: "/services/biometric-access",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="font-sans text-xs tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
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
              <Link
                key={service.title}
                href={service.href}
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
              </Link>
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
          <a 
            href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20security%20doors%20for%20my%20property"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-block"
          >
            Arrange Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line mx-auto mb-8" />
          <p className="font-sans text-[#c9a961] text-xs tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Request Information
          </h2>
          <p className="text-xl text-[#f5f0e8]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&apos;re securing a new property or upgrading existing installations, we provide expert guidance tailored to your specific requirements.
          </p>
          
          {/* Contact Form */}
          <form 
            action="https://formspree.io/f/xvgzjpvd" 
            method="POST"
            className="max-w-xl mx-auto text-left mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 text-[#f5f0e8] font-light focus:border-[#c9a961] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 text-[#f5f0e8] font-light focus:border-[#c9a961] focus:outline-none transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 text-[#f5f0e8] font-light focus:border-[#c9a961] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="location" className="block font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                Property Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 text-[#f5f0e8] font-light focus:border-[#c9a961] focus:outline-none transition-colors"
                placeholder="e.g. Marbella, Puerto Banús"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 text-[#f5f0e8] font-light focus:border-[#c9a961] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="btn-luxury w-full text-center"
            >
              Send Enquiry
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-6 max-w-xl mx-auto mb-12">
            <div className="flex-1 h-px bg-[#2a2a2a]" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/40">Or</span>
            <div className="flex-1 h-px bg-[#2a2a2a]" />
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20security%20doors%20for%20my%20property%20in%20Costa%20del%20Sol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm tracking-[0.15em] uppercase transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>

          <div className="mt-16 pt-12 border-t border-[#1a1a1a]">
            <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto text-left">
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-2">Email</p>
                <a href="mailto:info@cenitsecurity.com" className="text-lg hover:text-[#c9a961] transition-colors">info@cenitsecurity.com</a>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-2">Coverage</p>
                <p className="text-lg">Costa del Sol, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-sans text-sm tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </div>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">
            © 2026 Cenit Security Doors. Bespoke security solutions for distinguished properties.
          </p>
        </div>
      </footer>
    </main>
  );
}
