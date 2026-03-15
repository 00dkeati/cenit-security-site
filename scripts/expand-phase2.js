const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'app');

const services = [
  { slug: 'front-entrance', name: 'Front Entrance Doors' },
  { slug: 'terrace-access', name: 'Terrace Access Doors' },
  { slug: 'safe-rooms', name: 'Safe Room Installation' },
  { slug: 'biometric-access', name: 'Biometric Access Systems' }
];

// All existing + new sub-areas to create service combos
const allSubAreas = [
  // New sub-areas we added
  { parent: 'marbella', slug: 'nueva-andalucia', name: 'Nueva Andalucía' },
  { parent: 'marbella', slug: 'puerto-banus', name: 'Puerto Banús' },
  { parent: 'marbella', slug: 'guadalmina', name: 'Guadalmina' },
  { parent: 'marbella', slug: 'nagüeles', name: 'Nagüeles' },
  { parent: 'marbella', slug: 'marbella-east', name: 'Marbella East' },
  { parent: 'marbella', slug: 'camojan', name: 'Cascada de Camojón' },
  { parent: 'marbella', slug: 'rocio-de-nagüeles', name: 'Rocío de Nagüeles' },
  { parent: 'marbella', slug: 'altos-de-puente-romano', name: 'Altos de Puente Romano' },
  { parent: 'estepona', slug: 'the-new-golden-mile', name: 'The New Golden Mile' },
  { parent: 'estepona', slug: 'los-reales', name: 'Los Reales' },
  { parent: 'estepona', slug: 'el-padron', name: 'El Padrón' },
  { parent: 'estepona', slug: 'seghers', name: 'Seghers' },
  { parent: 'estepona', slug: 'bel-air', name: 'Bel Air' },
  { parent: 'estepona', slug: 'monte-biarritz', name: 'Monte Biarritz' },
  { parent: 'sotogrande', slug: 'sotogrande-alto', name: 'Sotogrande Alto' },
  { parent: 'sotogrande', slug: 'sotogrande-costa', name: 'Sotogrande Costa' },
  { parent: 'sotogrande', slug: 'sotogrande-marina', name: 'Sotogrande Marina' },
  { parent: 'sotogrande', slug: 'la-reserva-sotogrande', name: 'La Reserva Sotogrande' },
  { parent: 'sotogrande', slug: 'san-roque-club', name: 'San Roque Club' },
  { parent: 'sotogrande', slug: 'alcaidesa', name: 'Alcaidesa' },
  { parent: 'san-pedro-de-alcantara', slug: 'linda-vista', name: 'Linda Vista' },
  { parent: 'san-pedro-de-alcantara', slug: 'guadalmina-baja', name: 'Guadalmina Baja' },
  { parent: 'san-pedro-de-alcantara', slug: 'guadalmina-alta', name: 'Guadalmina Alta' },
  { parent: 'san-pedro-de-alcantara', slug: 'cortijo-blanco', name: 'Cortijo Blanco' },
  { parent: 'costa-del-sol', slug: 'nerja', name: 'Nerja' },
  { parent: 'costa-del-sol', slug: 'torrox', name: 'Torrox' },
  { parent: 'costa-del-sol', slug: 'rincon-de-la-victoria', name: 'Rincón de la Victoria' },
  { parent: 'costa-del-sol', slug: 'malaga-city', name: 'Málaga City' },
  { parent: 'costa-del-sol', slug: 'alhaurin-el-grande', name: 'Alhaurín el Grande' },
  { parent: 'costa-del-sol', slug: 'coin', name: 'Coín' },
  { parent: 'costa-del-sol', slug: 'ojen', name: 'Ojén' }
];

// More blog posts (phase 2)
const moreBlogPosts = [
  { slug: 'best-security-doors-2026', title: 'Best Security Doors for 2026', category: 'guide' },
  { slug: 'spanish-property-security-laws', title: 'Spanish Property Security Laws You Should Know', category: 'legal' },
  { slug: 'villa-security-mistakes', title: '5 Villa Security Mistakes and How to Avoid Them', category: 'advice' },
  { slug: 'luxury-door-brands-comparison', title: 'Top Luxury Security Door Brands Compared', category: 'comparison' },
  { slug: 'modern-villa-security-design', title: 'Modern Villa Security: Design Meets Protection', category: 'design' },
  { slug: 'hidden-entry-door-solutions', title: 'Hidden Entry Door Solutions for Seamless Design', category: 'design' },
  { slug: 'coastal-property-security-challenges', title: 'Coastal Property Security: Unique Challenges', category: 'advice' },
  { slug: 'salt-air-resistant-security-doors', title: 'Salt Air Resistant Security Doors for Beachfront', category: 'education' },
  { slug: 'security-for-second-homes', title: 'Security Solutions for Second Home Owners', category: 'advice' },
  { slug: 'keyless-entry-systems-pros-cons', title: 'Keyless Entry Systems: Pros and Cons', category: 'comparison' },
  { slug: 'intruder-deterrent-features', title: 'Intruder Deterrent Features That Actually Work', category: 'advice' },
  { slug: 'bulletproof-doors-residential', title: 'Bulletproof Doors for Residential Properties', category: 'education' },
  { slug: 'blast-resistant-doors-explained', title: 'Blast Resistant Doors Explained', category: 'education' },
  { slug: 'hurricane-resistant-security-doors', title: 'Hurricane Resistant Security Doors', category: 'education' },
  { slug: 'emergency-exit-security-doors', title: 'Emergency Exit Security Doors: Safety and Protection', category: 'education' },
  { slug: 'door-armor-reinforcement-kits', title: 'Door Armor Reinforcement Kits: Are They Worth It?', category: 'comparison' },
  { slug: 'security-door-aesthetics-tips', title: 'Making Security Doors Look Elegant', category: 'design' },
  { slug: 'glass-security-doors-options', title: 'Glass Security Doors: Stylish Protection', category: 'education' },
  { slug: 'double-glazing-security-benefits', title: 'Double Glazing Security Benefits', category: 'education' },
  { slug: 'laminated-glass-vs-tempered', title: 'Laminated vs Tempered Security Glass', category: 'comparison' },
  { slug: 'door-sensors-and-alarms', title: 'Door Sensors and Alarms Integration Guide', category: 'education' },
  { slug: 'video-doorbell-integration', title: 'Video Doorbell Integration with Security Doors', category: 'education' },
  { slug: 'intercom-systems-guide', title: 'Intercom Systems for Gated Properties', category: 'education' },
  { slug: 'access-control-for-staff', title: 'Access Control Solutions for Household Staff', category: 'advice' },
  { slug: 'temporary-access-codes', title: 'Temporary Access Codes for Guests and Services', category: 'advice' },
  { slug: 'security-audit-checklist', title: 'Complete Security Audit Checklist for Villas', category: 'guide' },
  { slug: 'pre-purchase-security-assessment', title: 'Pre-Purchase Property Security Assessment', category: 'guide' },
  { slug: 'new-build-security-specification', title: 'Security Specification for New Build Projects', category: 'guide' },
  { slug: 'renovation-security-upgrade', title: 'Upgrading Security During Renovation', category: 'advice' },
  { slug: 'security-for-elderly-residents', title: 'Security Solutions for Elderly Residents', category: 'advice' },
  { slug: 'family-safe-security-features', title: 'Family-Safe Security Features', category: 'advice' },
  { slug: 'celebrity-level-security', title: 'Celebrity-Level Security for Private Residences', category: 'advice' },
  { slug: 'diplomatic-residence-security', title: 'Security Standards for Diplomatic Residences', category: 'advice' },
  { slug: 'historic-property-security', title: 'Security for Historic and Listed Properties', category: 'advice' },
  { slug: 'minimalist-security-solutions', title: 'Minimalist Security: Less Visible Protection', category: 'design' },
  { slug: 'rustic-finca-security-options', title: 'Security Options for Rustic Fincas', category: 'advice' },
  { slug: 'modern-architecture-security', title: 'Security for Modern Architecture Homes', category: 'design' },
  { slug: 'security-lighting-integration', title: 'Security Lighting Integration with Door Systems', category: 'education' },
  { slug: 'motion-sensor-door-locks', title: 'Motion Sensor Door Lock Systems', category: 'education' },
  { slug: 'time-delay-locks-explained', title: 'Time Delay Locks: What They Are and Why Use Them', category: 'education' },
  { slug: 'anti-drill-lock-cylinders', title: 'Anti-Drill Lock Cylinders: Essential Protection', category: 'education' },
  { slug: 'anti-snap-lock-technology', title: 'Anti-Snap Lock Technology Explained', category: 'education' },
  { slug: 'bump-proof-locks-guide', title: 'Bump-Proof Locks: Complete Guide', category: 'education' },
  { slug: 'pick-resistant-locks', title: 'Pick-Resistant Locks for Maximum Security', category: 'education' },
  { slug: 'master-key-systems-pros-cons', title: 'Master Key Systems: Advantages and Risks', category: 'comparison' },
  { slug: 'electronic-lock-batteries', title: 'Electronic Lock Batteries: Maintenance Guide', category: 'advice' },
  { slug: 'lock-failure-prevention', title: 'Preventing Lock Failure: Maintenance Tips', category: 'advice' },
  { slug: 'emergency-lockout-procedures', title: 'Emergency Lockout Procedures for Security Doors', category: 'advice' },
  { slug: 'backup-access-methods', title: 'Backup Access Methods for Smart Locks', category: 'advice' },
  { slug: 'security-door-insurance-claims', title: 'Security Door Documentation for Insurance', category: 'advice' }
];

// Property types for location combos
const propertyTypes = [
  { slug: 'luxury-villas', name: 'Luxury Villas' },
  { slug: 'apartments', name: 'Apartments' },
  { slug: 'townhouses', name: 'Townhouses' },
  { slug: 'penthouses', name: 'Penthouses' },
  { slug: 'new-builds', name: 'New Build Properties' }
];

// Near me pages
const nearMePages = [
  { slug: 'security-doors-near-me-marbella', title: 'Security Doors Near Me - Marbella Area', location: 'Marbella' },
  { slug: 'security-doors-near-me-estepona', title: 'Security Doors Near Me - Estepona Area', location: 'Estepona' },
  { slug: 'security-doors-near-me-benahavis', title: 'Security Doors Near Me - Benahavís Area', location: 'Benahavís' },
  { slug: 'security-doors-near-me-sotogrande', title: 'Security Doors Near Me - Sotogrande Area', location: 'Sotogrande' },
  { slug: 'security-doors-near-me-malaga', title: 'Security Doors Near Me - Málaga Area', location: 'Málaga' },
  { slug: 'security-doors-near-me-fuengirola', title: 'Security Doors Near Me - Fuengirola Area', location: 'Fuengirola' },
  { slug: 'security-doors-near-me-mijas', title: 'Security Doors Near Me - Mijas Area', location: 'Mijas' },
  { slug: 'security-doors-near-me-san-pedro', title: 'Security Doors Near Me - San Pedro Area', location: 'San Pedro' },
  { slug: 'best-security-doors-marbella', title: 'Best Security Doors in Marbella', location: 'Marbella' },
  { slug: 'best-security-doors-puerto-banus', title: 'Best Security Doors in Puerto Banús', location: 'Puerto Banús' },
  { slug: 'best-security-doors-costa-del-sol', title: 'Best Security Doors on Costa del Sol', location: 'Costa del Sol' },
  { slug: 'top-rated-security-doors-spain', title: 'Top Rated Security Doors in Spain', location: 'Spain' },
  { slug: 'affordable-security-doors-marbella', title: 'Affordable Security Doors Marbella', location: 'Marbella' },
  { slug: 'luxury-security-doors-golden-mile', title: 'Luxury Security Doors Golden Mile', location: 'Golden Mile' },
  { slug: 'premium-security-doors-la-zagaleta', title: 'Premium Security Doors La Zagaleta', location: 'La Zagaleta' }
];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function generateServiceSubAreaContent(service, area) {
  const parentLocations = {
    'marbella': 'Marbella',
    'estepona': 'Estepona',
    'sotogrande': 'Sotogrande',
    'san-pedro-de-alcantara': 'San Pedro de Alcántara',
    'costa-del-sol': 'Costa del Sol',
    'benahavis': 'Benahavís'
  };
  const parentName = parentLocations[area.parent] || area.parent;
  
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${service.name} ${area.name} | Cenit Security',
  description: 'Professional ${service.name.toLowerCase()} installation in ${area.name}, ${parentName}. Bespoke security solutions for luxury properties.',
  keywords: '${service.name.toLowerCase()} ${area.name.toLowerCase()}, security doors ${area.name.toLowerCase()}, ${parentName.toLowerCase()} security',
};

export default function ${toPascalCase(service.slug)}${toPascalCase(area.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/services/${service.slug}" className="text-[#c9a961] hover:underline">
            ← Back to ${service.name}
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          ${service.name}
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">${area.name}, ${parentName}</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cenit Security provides expert ${service.name.toLowerCase()} installation 
            throughout ${area.name}. Our bespoke solutions are designed specifically 
            for the prestigious properties in this exclusive ${parentName} location.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            ${service.name} Solutions for ${area.name}
          </h2>
          <p className="text-gray-300 mb-4">
            ${area.name} properties demand security solutions that match their exceptional 
            quality. Our ${service.name.toLowerCase()} installations combine maximum 
            protection with elegant design, ensuring your property remains both secure 
            and aesthetically stunning.
          </p>
          <p className="text-gray-300 mb-4">
            We understand the unique architectural styles found in ${area.name} and 
            customize each installation to complement your property's character while 
            meeting the highest security standards.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Why ${area.name} Properties Need Premium Security
          </h2>
          <p className="text-gray-300 mb-4">
            The high-value properties in ${area.name} require security solutions that 
            match their status. Our ${service.name.toLowerCase()} options provide peace 
            of mind for discerning homeowners who expect the best.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our ${service.name} Features
          </h2>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li>• European-certified security ratings</li>
            <li>• Custom designs to match your property</li>
            <li>• Professional installation by expert teams</li>
            <li>• Smart integration options available</li>
            <li>• Comprehensive warranty coverage</li>
            <li>• Ongoing maintenance and support</li>
          </ul>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Get a Quote for ${area.name}
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free consultation about ${service.name.toLowerCase()} 
              for your ${area.name} property.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              WhatsApp: +34 667 79 31 00
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateBlogContent(post) {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${post.title} | Cenit Security Doors',
  description: 'Expert guide: ${post.title.toLowerCase()}. Professional security door advice from Costa del Sol specialists.',
  keywords: '${post.title.toLowerCase()}, security doors spain, costa del sol security',
};

export default function ${toPascalCase(post.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/blog" className="text-[#c9a961] hover:underline">
            ← Back to Blog
          </Link>
        </div>
        
        <article>
          <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-6">
            ${post.title}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              When it comes to protecting your Costa del Sol property, making informed 
              decisions is essential. This comprehensive guide covers everything you 
              need to know about ${post.title.toLowerCase()}.
            </p>
            
            <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
              Understanding the Basics
            </h2>
            <p className="text-gray-300 mb-4">
              Security is a multi-layered concern for property owners on the Costa del Sol. 
              Whether you own a villa in Marbella, an apartment in Estepona, or a townhouse 
              in Puerto Banús, understanding your options is the first step to proper protection.
            </p>
            <p className="text-gray-300 mb-4">
              Modern security solutions have evolved significantly, combining physical barriers 
              with electronic systems and smart technology. This integration provides comprehensive 
              protection while maintaining convenience for daily life.
            </p>
            
            <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
              Key Considerations
            </h2>
            <p className="text-gray-300 mb-4">
              Every property has unique security requirements based on its location, design, 
              and how it's used. A thorough assessment helps identify vulnerabilities and 
              prioritise the most effective improvements for your specific situation.
            </p>
            <p className="text-gray-300 mb-4">
              Professional security consultants can evaluate your property and recommend 
              solutions that address specific weak points while maintaining the aesthetic 
              appeal that attracted you to the Costa del Sol in the first place.
            </p>
            
            <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
              Making the Right Choice
            </h2>
            <p className="text-gray-300 mb-4">
              Quality security installations represent an investment in your property that 
              can reduce insurance premiums, increase resale value, and most importantly, 
              provide peace of mind for you and your family.
            </p>
            <p className="text-gray-300 mb-4">
              The Costa del Sol property market increasingly values security features, with 
              buyers actively seeking homes with comprehensive protection systems already in place.
            </p>
            
            <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
              Expert Recommendations
            </h2>
            <p className="text-gray-300 mb-4">
              Working with security specialists who understand the local market ensures 
              solutions appropriate for Costa del Sol conditions, property types, and 
              the specific security challenges of the region.
            </p>
            <p className="text-gray-300 mb-4">
              Local installers can provide faster response times for maintenance, have 
              established relationships with quality suppliers, and understand regional 
              security trends based on years of experience in the area.
            </p>
            
            <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
              <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
                Ready to Improve Your Security?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact Cenit Security for a free consultation about security solutions 
                for your Costa del Sol property.
              </p>
              <a
                href="https://wa.me/34667793100"
                className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

function generateNearMeContent(page) {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${page.title} | Cenit Security',
  description: '${page.title}. Professional security door installation and service. Free consultation available.',
  keywords: '${page.title.toLowerCase()}, security doors ${page.location.toLowerCase()}, local security installer',
};

export default function ${toPascalCase(page.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations" className="text-[#c9a961] hover:underline">
            ← Back to Locations
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          ${page.title}
        </h1>
        <p className="text-2xl text-gray-400 mb-8">Professional Security Door Installation</p>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Looking for security doors in ${page.location}? Cenit Security is your local 
            specialist for premium security door installation throughout the Costa del Sol. 
            We serve ${page.location} and surrounding areas with professional, reliable service.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Local Security Door Experts
          </h2>
          <p className="text-gray-300 mb-4">
            As a ${page.location}-based security company, we understand the specific needs 
            of properties in this area. Our team provides fast response times, local 
            expertise, and ongoing support for all installations.
          </p>
          <p className="text-gray-300 mb-4">
            We've installed security doors throughout ${page.location} for villas, 
            apartments, townhouses, and commercial properties. Our experience means 
            we know what works best for local property types and conditions.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Services
          </h2>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li>• High-security entrance doors</li>
            <li>• Reinforced terrace and patio doors</li>
            <li>• Safe room installation</li>
            <li>• Biometric and smart access systems</li>
            <li>• Security upgrades for existing doors</li>
            <li>• Commercial security solutions</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Why Choose Cenit Security
          </h2>
          <p className="text-gray-300 mb-4">
            We combine European-certified products with expert local installation. 
            Every project includes a free consultation, detailed quotation, 
            professional fitting, and comprehensive aftercare.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Free Consultation in ${page.location}
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us today for a free security assessment of your property. 
              We provide honest advice and competitive quotes with no obligation.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              WhatsApp: +34 667 79 31 00
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

function main() {
  let created = 0;
  
  // Create service × sub-area combos
  console.log('Creating service × sub-area pages...');
  for (const service of services) {
    for (const area of allSubAreas) {
      const dir = path.join(baseDir, 'services', service.slug, area.slug);
      ensureDir(dir);
      const pagePath = path.join(dir, 'page.tsx');
      if (!fs.existsSync(pagePath)) {
        fs.writeFileSync(pagePath, generateServiceSubAreaContent(service, area));
        created++;
      }
    }
  }
  console.log(`  Service × sub-area: ${services.length * allSubAreas.length}`);
  
  // Create more blog posts
  console.log('Creating more blog posts...');
  for (const post of moreBlogPosts) {
    const dir = path.join(baseDir, 'blog', post.slug);
    ensureDir(dir);
    const pagePath = path.join(dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateBlogContent(post));
      created++;
    }
  }
  console.log(`  Blog posts: ${moreBlogPosts.length}`);
  
  // Create near me pages
  console.log('Creating near-me pages...');
  for (const page of nearMePages) {
    const dir = path.join(baseDir, 'near-me', page.slug);
    ensureDir(dir);
    const pagePath = path.join(dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateNearMeContent(page));
      created++;
    }
  }
  console.log(`  Near-me pages: ${nearMePages.length}`);
  
  console.log(`\nTotal new pages created: ${created}`);
  
  // Count total
  const { execSync } = require('child_process');
  const totalPages = execSync(`find ${baseDir} -name "page.tsx" | wc -l`).toString().trim();
  console.log(`Total pages now: ${totalPages}`);
}

main();
