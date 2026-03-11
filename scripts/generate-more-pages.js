const fs = require('fs');
const path = require('path');

// Key sub-areas for service combos (most valuable for SEO)
const keySubAreas = [
  { locationSlug: 'marbella', slug: 'golden-mile', name: 'Golden Mile', location: 'Marbella' },
  { locationSlug: 'marbella', slug: 'sierra-blanca', name: 'Sierra Blanca', location: 'Marbella' },
  { locationSlug: 'marbella', slug: 'los-monteros', name: 'Los Monteros', location: 'Marbella' },
  { locationSlug: 'marbella', slug: 'elviria', name: 'Elviria', location: 'Marbella' },
  { locationSlug: 'marbella', slug: 'nagueles', name: 'Nagüeles', location: 'Marbella' },
  { locationSlug: 'marbella', slug: 'cascada-de-camojan', name: 'Cascada de Camoján', location: 'Marbella' },
  { locationSlug: 'puerto-banus-nueva-andalucia', slug: 'puerto-banus-marina', name: 'Puerto Banús Marina', location: 'Puerto Banús' },
  { locationSlug: 'puerto-banus-nueva-andalucia', slug: 'nueva-andalucia', name: 'Nueva Andalucía', location: 'Nueva Andalucía' },
  { locationSlug: 'puerto-banus-nueva-andalucia', slug: 'las-brisas', name: 'Las Brisas', location: 'Nueva Andalucía' },
  { locationSlug: 'puerto-banus-nueva-andalucia', slug: 'la-cerquilla', name: 'La Cerquilla', location: 'Nueva Andalucía' },
  { locationSlug: 'benahavis', slug: 'la-zagaleta', name: 'La Zagaleta', location: 'Benahavís' },
  { locationSlug: 'benahavis', slug: 'el-madroñal', name: 'El Madroñal', location: 'Benahavís' },
  { locationSlug: 'benahavis', slug: 'los-flamingos', name: 'Los Flamingos', location: 'Benahavís' },
  { locationSlug: 'sotogrande', slug: 'sotogrande-alto', name: 'Sotogrande Alto', location: 'Sotogrande' },
  { locationSlug: 'sotogrande', slug: 'la-reserva-sotogrande', name: 'La Reserva', location: 'Sotogrande' },
  { locationSlug: 'estepona', slug: 'el-paraiso', name: 'El Paraíso', location: 'Estepona' },
  { locationSlug: 'estepona', slug: 'new-golden-mile', name: 'New Golden Mile', location: 'Estepona' },
  { locationSlug: 'san-pedro-de-alcantara', slug: 'guadalmina', name: 'Guadalmina', location: 'San Pedro' },
];

const services = [
  { slug: 'front-entrance', name: 'Front Entrance Security Doors', shortName: 'Front Entrance' },
  { slug: 'terrace-access', name: 'Terrace & Secondary Access', shortName: 'Terrace Access' },
  { slug: 'safe-rooms', name: 'Safe Rooms & Panic Rooms', shortName: 'Safe Rooms' },
  { slug: 'biometric-access', name: 'Biometric Access Control', shortName: 'Biometric Access' },
];

// Property types for additional pages
const propertyTypes = [
  { slug: 'villas', name: 'Luxury Villas', desc: 'Bespoke security solutions for detached villas' },
  { slug: 'apartments', name: 'Apartments & Penthouses', desc: 'Security doors for high-rise luxury living' },
  { slug: 'townhouses', name: 'Townhouses', desc: 'Security solutions for exclusive townhouse communities' },
  { slug: 'new-builds', name: 'New Build Properties', desc: 'Security integration for new construction projects' },
  { slug: 'renovations', name: 'Property Renovations', desc: 'Security upgrades for renovation projects' },
];

const mainLocations = [
  { slug: 'marbella', name: 'Marbella' },
  { slug: 'puerto-banus-nueva-andalucia', name: 'Puerto Banús' },
  { slug: 'benahavis', name: 'Benahavís' },
  { slug: 'estepona', name: 'Estepona' },
  { slug: 'sotogrande', name: 'Sotogrande' },
];

function generateServiceSubAreaPage(service, subArea) {
  return `import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "${service.shortName} ${subArea.name} | Cenit Security Doors",
  description: "${service.name} for properties in ${subArea.name}, ${subArea.location}. Bespoke security engineering with discreet installation.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
        </div>
      </nav>

      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="/doors/door-0${Math.floor(Math.random() * 10) + 1}.jpg" alt="${service.shortName} ${subArea.name}" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light">${service.shortName} in ${subArea.name}</h1>
            <p className="text-xl text-[#f5f0e8]/70 mt-4">${subArea.location}, Costa del Sol</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
          <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
            Specialist ${service.name.toLowerCase()} for ${subArea.name} properties.
          </p>
          <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
            <p>
              ${subArea.name} is one of the most prestigious addresses in ${subArea.location}. Properties here demand ${service.name.toLowerCase()} that match their exceptional standards.
            </p>
            <p>
              Cenit Security Doors provides bespoke ${service.name.toLowerCase()} throughout ${subArea.name}, working with homeowners and architects to deliver solutions that integrate seamlessly with each property&apos;s unique character.
            </p>
            <p>
              Every installation is handled with the discretion and precision that ${subArea.name} residents expect. Contact us to arrange a private consultation.
            </p>
          </div>
          <a 
            href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.name.toLowerCase())}%20for%20my%20property%20in%20${encodeURIComponent(subArea.name)}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm tracking-[0.15em] uppercase transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-sans text-sm tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">© 2026 Cenit Security Doors.</p>
        </div>
      </footer>
    </main>
  );
}`;
}

function generatePropertyTypePage(propertyType, location) {
  return `import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Doors for ${propertyType.name} in ${location.name} | Cenit Security Doors",
  description: "${propertyType.desc} in ${location.name}. London-standard security engineering for Costa del Sol properties.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
        </div>
      </nav>

      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="/doors/door-0${Math.floor(Math.random() * 10) + 1}.jpg" alt="${propertyType.name} security in ${location.name}" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 w-full pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/locations/${location.slug}" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#c9a961] mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              ${location.name}
            </Link>
            <h1 className="text-4xl md:text-5xl font-light">Security Doors for ${propertyType.name}</h1>
            <p className="text-xl text-[#f5f0e8]/70 mt-4">${location.name}, Costa del Sol</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
          <p className="text-2xl font-light leading-relaxed text-[#f5f0e8]/90">
            ${propertyType.desc} across ${location.name}.
          </p>
          <div className="text-lg text-[#f5f0e8]/70 leading-relaxed space-y-6">
            <p>
              ${propertyType.name.toLowerCase()} in ${location.name} present unique security challenges and opportunities. Cenit Security Doors specialises in engineering bespoke solutions that address the specific requirements of ${propertyType.name.toLowerCase()}.
            </p>
            <p>
              Whether you&apos;re securing a front entrance, terrace access points, or installing a safe room, our team delivers London-standard security with complete discretion and precision.
            </p>
            <p>
              Contact us to discuss your ${propertyType.name.toLowerCase().replace('luxury ', '')} security requirements in ${location.name}.
            </p>
          </div>
          <a 
            href="https://wa.me/34667793100?text=Hello%2C%20I%27m%20interested%20in%20security%20doors%20for%20my%20${encodeURIComponent(propertyType.name.toLowerCase())}%20in%20${encodeURIComponent(location.name)}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm tracking-[0.15em] uppercase transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-sans text-sm tracking-[0.2em] uppercase">
            <span className="text-[#c9a961]">Cenit</span> <span className="text-[#f5f0e8]/60">Security</span> <span className="text-[#f5f0e8]">Doors</span>
          </Link>
          <p className="font-sans text-xs tracking-wide text-[#f5f0e8]/40">© 2026 Cenit Security Doors.</p>
        </div>
      </footer>
    </main>
  );
}`;
}

function generateMorePages() {
  const basePath = path.join(__dirname, '../src/app');
  let pageCount = 0;

  // Generate service + sub-area combo pages
  for (const service of services) {
    for (const subArea of keySubAreas) {
      const dirPath = path.join(basePath, 'services', service.slug, subArea.locationSlug, subArea.slug);
      const filePath = path.join(dirPath, 'page.tsx');

      if (fs.existsSync(filePath)) continue;

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(filePath, generateServiceSubAreaPage(service, subArea));
      console.log(`Created: services/${service.slug}/${subArea.locationSlug}/${subArea.slug}`);
      pageCount++;
    }
  }

  // Generate property type pages
  for (const propertyType of propertyTypes) {
    for (const location of mainLocations) {
      const dirPath = path.join(basePath, 'property-types', propertyType.slug, location.slug);
      const filePath = path.join(dirPath, 'page.tsx');

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(filePath, generatePropertyTypePage(propertyType, location));
      console.log(`Created: property-types/${propertyType.slug}/${location.slug}`);
      pageCount++;
    }
  }

  console.log(`\nGenerated ${pageCount} additional pages`);
}

generateMorePages();
