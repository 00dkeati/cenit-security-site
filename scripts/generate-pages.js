const fs = require('fs');
const path = require('path');

// Data structure for all locations and sub-areas
const locations = {
  marbella: {
    name: 'Marbella',
    subAreas: [
      { slug: 'golden-mile', name: 'Golden Mile', desc: 'The crown jewel of Marbella real estate, stretching between the town centre and Puerto Banús' },
      { slug: 'sierra-blanca', name: 'Sierra Blanca', desc: 'Exclusive hillside enclave with panoramic Mediterranean views' },
      { slug: 'los-monteros', name: 'Los Monteros', desc: 'Prestigious beachfront area east of Marbella centre' },
      { slug: 'elviria', name: 'Elviria', desc: 'Family-friendly luxury community with excellent schools' },
      { slug: 'las-chapas', name: 'Las Chapas', desc: 'Established residential area known for spacious villas' },
      { slug: 'nagueles', name: 'Nagüeles', desc: 'Prime hillside location above the Golden Mile' },
      { slug: 'cascada-de-camojan', name: 'Cascada de Camoján', desc: 'Ultra-exclusive gated community in the hills' },
      { slug: 'rio-real', name: 'Río Real', desc: 'Golf course community with luxury villas' },
      { slug: 'bahia-de-marbella', name: 'Bahía de Marbella', desc: 'Beachfront community east of the centre' },
      { slug: 'marbella-hill-club', name: 'Marbella Hill Club', desc: 'Prestigious hillside residential development' },
      { slug: 'altos-de-puente-romano', name: 'Altos de Puente Romano', desc: 'Luxury development near the iconic hotel' },
      { slug: 'monte-paraiso', name: 'Monte Paraíso', desc: 'Elevated community with sea views' },
    ]
  },
  'puerto-banus-nueva-andalucia': {
    name: 'Puerto Banús & Nueva Andalucía',
    subAreas: [
      { slug: 'puerto-banus-marina', name: 'Puerto Banús Marina', desc: 'The iconic marina and luxury shopping destination' },
      { slug: 'nueva-andalucia', name: 'Nueva Andalucía', desc: 'The golf valley with numerous courses and villas' },
      { slug: 'las-brisas', name: 'Las Brisas', desc: 'Prestigious golf community in Nueva Andalucía' },
      { slug: 'los-naranjos', name: 'Los Naranjos', desc: 'Established residential area near golf courses' },
      { slug: 'la-cerquilla', name: 'La Cerquilla', desc: 'Exclusive gated community with large plots' },
      { slug: 'aloha', name: 'Aloha', desc: 'Popular area surrounding Aloha Golf Club' },
      { slug: 'el-herrojo', name: 'El Herrojo', desc: 'Secure gated community in Nueva Andalucía' },
      { slug: 'la-quinta', name: 'La Quinta Golf', desc: 'Golf resort community with luxury properties' },
    ]
  },
  benahavis: {
    name: 'Benahavís',
    subAreas: [
      { slug: 'la-zagaleta', name: 'La Zagaleta', desc: 'Europe\'s most exclusive gated community' },
      { slug: 'el-madroñal', name: 'El Madroñal', desc: 'Prestigious hillside community near La Zagaleta' },
      { slug: 'los-arqueros', name: 'Los Arqueros', desc: 'Golf community with mountain views' },
      { slug: 'la-quinta-benahavis', name: 'La Quinta', desc: 'Golf resort with luxury apartments and villas' },
      { slug: 'monte-mayor', name: 'Monte Mayor', desc: 'Elevated community with panoramic views' },
      { slug: 'los-flamingos', name: 'Los Flamingos', desc: 'Golf resort with Villa Padierna Palace' },
      { slug: 'la-reserva-de-alcuzcuz', name: 'La Reserva de Alcuzcuz', desc: 'Nature reserve community' },
      { slug: 'marbella-club-golf', name: 'Marbella Club Golf Resort', desc: 'Exclusive golf community' },
    ]
  },
  estepona: {
    name: 'Estepona',
    subAreas: [
      { slug: 'el-paraiso', name: 'El Paraíso', desc: 'Golf community between Estepona and Benahavís' },
      { slug: 'cancelada', name: 'Cancelada', desc: 'Residential area with new developments' },
      { slug: 'valle-romano', name: 'Valle Romano', desc: 'Golf resort community' },
      { slug: 'selwo', name: 'Selwo', desc: 'Area near Selwo Aventura park' },
      { slug: 'new-golden-mile', name: 'New Golden Mile', desc: 'Coastal stretch with new luxury developments' },
      { slug: 'estepona-golf', name: 'Estepona Golf', desc: 'Established golf community' },
      { slug: 'el-padron', name: 'El Padrón', desc: 'Countryside area with fincas' },
      { slug: 'bahia-dorada', name: 'Bahía Dorada', desc: 'Beachfront community' },
    ]
  },
  sotogrande: {
    name: 'Sotogrande',
    subAreas: [
      { slug: 'sotogrande-alto', name: 'Sotogrande Alto', desc: 'Hillside area with large villas' },
      { slug: 'sotogrande-costa', name: 'Sotogrande Costa', desc: 'Beachside area near the marina' },
      { slug: 'la-reserva-sotogrande', name: 'La Reserva', desc: 'Exclusive new development with beach club' },
      { slug: 'alcaidesa', name: 'Alcaidesa', desc: 'Golf community near Gibraltar' },
      { slug: 'sotogrande-marina', name: 'Sotogrande Marina', desc: 'The prestigious marina area' },
      { slug: 'los-altos-de-valderrama', name: 'Altos de Valderrama', desc: 'Near the famous Valderrama golf course' },
      { slug: 'kings-and-queens', name: 'Kings & Queens', desc: 'Central Sotogrande residential area' },
    ]
  },
  'san-pedro-de-alcantara': {
    name: 'San Pedro de Alcántara',
    subAreas: [
      { slug: 'guadalmina', name: 'Guadalmina', desc: 'Established beachfront community' },
      { slug: 'guadalmina-alta', name: 'Guadalmina Alta', desc: 'Hillside area above Guadalmina' },
      { slug: 'guadalmina-baja', name: 'Guadalmina Baja', desc: 'Beachside Guadalmina' },
      { slug: 'cortijo-blanco', name: 'Cortijo Blanco', desc: 'Residential area near the beach' },
      { slug: 'linda-vista', name: 'Linda Vista', desc: 'Hillside community with views' },
      { slug: 'nueva-alcantara', name: 'Nueva Alcántara', desc: 'Beach area development' },
    ]
  },
  'la-cala-de-mijas': {
    name: 'La Cala de Mijas',
    subAreas: [
      { slug: 'la-cala-golf', name: 'La Cala Golf', desc: 'Large golf resort community' },
      { slug: 'mijas-costa', name: 'Mijas Costa', desc: 'Coastal area of Mijas' },
      { slug: 'riviera-del-sol', name: 'Riviera del Sol', desc: 'Popular residential area' },
      { slug: 'calahonda', name: 'Calahonda', desc: 'Established beachside community' },
      { slug: 'el-faro', name: 'El Faro', desc: 'Area near the lighthouse' },
    ]
  },
  'costa-del-sol': {
    name: 'Costa del Sol',
    subAreas: [
      { slug: 'benalmadena', name: 'Benalmádena', desc: 'Popular resort town with marina' },
      { slug: 'fuengirola', name: 'Fuengirola', desc: 'Vibrant coastal town' },
      { slug: 'mijas-pueblo', name: 'Mijas Pueblo', desc: 'Charming white village in the hills' },
      { slug: 'torremolinos', name: 'Torremolinos', desc: 'Classic Costa del Sol resort' },
      { slug: 'manilva', name: 'Manilva', desc: 'Western Costa del Sol near Sotogrande' },
      { slug: 'casares', name: 'Casares', desc: 'Mountain village with coastal access' },
    ]
  }
};

const services = [
  { slug: 'front-entrance', name: 'Front Entrance Security Doors', shortName: 'Front Entrance' },
  { slug: 'terrace-access', name: 'Terrace & Secondary Access', shortName: 'Terrace Access' },
  { slug: 'safe-rooms', name: 'Safe Rooms & Panic Rooms', shortName: 'Safe Rooms' },
  { slug: 'biometric-access', name: 'Biometric Access Control', shortName: 'Biometric Access' },
];

// Template for sub-area pages
function generateSubAreaPage(location, subArea, locationSlug) {
  return `import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors ${subArea.name}, ${location.name} | Cenit Security Doors",
  description: "Bespoke security doors for ${subArea.name} properties. ${subArea.desc}. London-standard engineering with discreet installation.",
};

export default function ${subArea.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
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
          <Image src="/doors/door-0${Math.floor(Math.random() * 10) + 1}.jpg" alt="${subArea.name} security installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/${locationSlug}" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4 hover:text-[#d4ba7a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              ${location.name}
            </Link>
            <h1 className="text-5xl md:text-6xl font-light">${subArea.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              ${subArea.desc}. Cenit Security Doors provides bespoke security solutions for this prestigious area.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Properties in ${subArea.name} represent significant investments that deserve protection matching their value. Cenit Security Doors specialises in engineering bespoke security solutions for the unique requirements of this distinguished address.
              </p>
              <p>
                Our installations in ${subArea.name} encompass front entrance security doors, terrace and secondary access protection, safe room installations, and sophisticated biometric access control systems. Each project is approached with the discretion and precision that residents of ${subArea.name} expect.
              </p>
              <p>
                We understand the architectural character of ${subArea.name} and ensure every security installation complements your property&apos;s aesthetic whilst providing certified protection against forced entry.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2a2a]">
              <h2 className="text-2xl font-light mb-6">Security Services in ${subArea.name}</h2>
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
              <p className="text-[#f5f0e8]/70 leading-relaxed">${subArea.name} is located within ${location.name}, one of the Costa del Sol&apos;s most sought-after areas.</p>
            </div>
            <a 
              href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20security%20doors%20for%20my%20property%20in%20${encodeURIComponent(subArea.name)}"
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
}`;
}

// Template for service + location combo pages
function generateServiceLocationPage(service, location, locationSlug) {
  return `import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "${service.name} in ${location.name} | Cenit Security Doors",
  description: "${service.name} for luxury properties in ${location.name}. London-standard security engineering with bespoke design and discreet installation.",
};

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}${locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
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
          <Image src="/doors/door-0${Math.floor(Math.random() * 10) + 1}.jpg" alt="${service.shortName} in ${location.name}" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 mb-4">
              <Link href="/services/${service.slug}" className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] hover:text-[#d4ba7a] transition-colors">
                ${service.shortName}
              </Link>
              <span className="text-[#f5f0e8]/30">|</span>
              <Link href="/locations/${locationSlug}" className="font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] hover:text-[#d4ba7a] transition-colors">
                ${location.name}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-light">${service.shortName} in ${location.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
              Specialist ${service.name.toLowerCase()} for luxury properties throughout ${location.name}.
            </p>
            <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
              <p>
                Cenit Security Doors provides bespoke ${service.name.toLowerCase()} across ${location.name}, from initial consultation through to installation and commissioning. Our solutions are engineered to the highest standards whilst complementing the architectural character of your property.
              </p>
              <p>
                ${location.name} properties demand security solutions that match their prestige. We work with homeowners, architects, and developers to deliver ${service.name.toLowerCase()} that provide certified protection without compromising on aesthetics.
              </p>
              <p>
                Every installation in ${location.name} is handled with complete discretion. Our team operates with minimal disruption to your household, and all technical specifications are documented with precision.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Service</p>
              <p className="text-xl mb-4">${service.name}</p>
              <Link href="/services/${service.slug}" className="text-[#c9a961] text-sm hover:underline">Learn more →</Link>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <p className="font-sans text-[#c9a961] text-xs tracking-[0.2em] uppercase mb-4">Location</p>
              <p className="text-xl mb-4">${location.name}</p>
              <Link href="/locations/${locationSlug}" className="text-[#c9a961] text-sm hover:underline">View area →</Link>
            </div>
            <a 
              href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.name.toLowerCase())}%20for%20my%20property%20in%20${encodeURIComponent(location.name)}"
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
}`;
}

// Main generation function
function generateAllPages() {
  const basePath = path.join(__dirname, '../src/app');
  let pageCount = 0;

  // Generate sub-area pages
  for (const [locationSlug, location] of Object.entries(locations)) {
    for (const subArea of location.subAreas) {
      const dirPath = path.join(basePath, 'locations', locationSlug, subArea.slug);
      const filePath = path.join(dirPath, 'page.tsx');
      
      // Skip if already exists
      if (fs.existsSync(filePath)) {
        console.log(`Skipping existing: ${locationSlug}/${subArea.slug}`);
        continue;
      }

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(filePath, generateSubAreaPage(location, subArea, locationSlug));
      console.log(`Created: locations/${locationSlug}/${subArea.slug}`);
      pageCount++;
    }
  }

  // Generate service + location combo pages
  for (const service of services) {
    for (const [locationSlug, location] of Object.entries(locations)) {
      const dirPath = path.join(basePath, 'services', service.slug, locationSlug);
      const filePath = path.join(dirPath, 'page.tsx');

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(filePath, generateServiceLocationPage(service, location, locationSlug));
      console.log(`Created: services/${service.slug}/${locationSlug}`);
      pageCount++;
    }
  }

  console.log(`\nGenerated ${pageCount} new pages`);
}

generateAllPages();
