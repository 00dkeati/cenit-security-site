const fs = require('fs');
const path = require('path');

// Configuration
const baseDir = path.join(__dirname, '..', 'src', 'app');

// Existing locations for reference
const mainLocations = [
  { slug: 'marbella', name: 'Marbella' },
  { slug: 'puerto-banus-nueva-andalucia', name: 'Puerto Banús' },
  { slug: 'benahavis', name: 'Benahavís' },
  { slug: 'estepona', name: 'Estepona' },
  { slug: 'sotogrande', name: 'Sotogrande' },
  { slug: 'san-pedro-de-alcantara', name: 'San Pedro de Alcántara' },
  { slug: 'la-cala-de-mijas', name: 'La Cala de Mijas' },
  { slug: 'costa-del-sol', name: 'Costa del Sol' }
];

// ============ BLOG POSTS ============
const blogPosts = [
  // Security advice
  { slug: 'how-to-choose-security-doors-for-your-villa', title: 'How to Choose Security Doors for Your Villa', category: 'advice' },
  { slug: 'what-is-a-panic-room', title: 'What is a Panic Room? Complete Guide', category: 'advice' },
  { slug: 'biometric-vs-keypad-access-control', title: 'Biometric vs Keypad Access Control: Which is Better?', category: 'comparison' },
  { slug: 'home-invasion-prevention-tips', title: 'Home Invasion Prevention: Expert Tips for Villa Owners', category: 'advice' },
  { slug: 'costa-del-sol-crime-statistics', title: 'Costa del Sol Crime Statistics: What Property Owners Should Know', category: 'research' },
  { slug: 'security-doors-vs-standard-doors', title: 'Security Doors vs Standard Doors: Key Differences', category: 'comparison' },
  { slug: 'best-security-features-luxury-villas', title: 'Best Security Features for Luxury Villas in Spain', category: 'advice' },
  { slug: 'reinforced-doors-explained', title: 'Reinforced Doors Explained: Materials, Ratings & Benefits', category: 'education' },
  { slug: 'safe-room-design-guide', title: 'Safe Room Design Guide for Spanish Properties', category: 'advice' },
  { slug: 'security-door-materials-comparison', title: 'Security Door Materials: Steel vs Aluminium vs Composite', category: 'comparison' },
  { slug: 'how-security-doors-are-installed', title: 'How Security Doors Are Installed: Step-by-Step Process', category: 'education' },
  { slug: 'european-security-door-standards', title: 'European Security Door Standards & Certifications', category: 'education' },
  { slug: 'holiday-home-security-checklist', title: 'Holiday Home Security Checklist for Costa del Sol', category: 'advice' },
  { slug: 'smart-locks-vs-traditional-locks', title: 'Smart Locks vs Traditional Locks: Pros and Cons', category: 'comparison' },
  { slug: 'terrace-door-security-solutions', title: 'Terrace Door Security Solutions for Spanish Villas', category: 'advice' },
  { slug: 'garage-door-security-guide', title: 'Garage Door Security: Protecting Your Vehicle and Home', category: 'advice' },
  { slug: 'window-security-options', title: 'Window Security Options for Luxury Properties', category: 'advice' },
  { slug: 'cctv-integration-with-doors', title: 'CCTV Integration with Security Door Systems', category: 'education' },
  { slug: 'fire-rated-security-doors', title: 'Fire-Rated Security Doors: What You Need to Know', category: 'education' },
  { slug: 'soundproof-security-doors', title: 'Soundproof Security Doors for Ultimate Privacy', category: 'education' },
  { slug: 'security-door-maintenance-tips', title: 'Security Door Maintenance: Keeping Your Investment Protected', category: 'advice' },
  { slug: 'insurance-benefits-security-doors', title: 'Insurance Benefits of Installing Security Doors', category: 'advice' },
  { slug: 'property-value-impact-security', title: 'How Security Upgrades Impact Property Value in Spain', category: 'research' },
  { slug: 'child-safety-security-doors', title: 'Child Safety Features in Modern Security Doors', category: 'education' },
  { slug: 'pet-friendly-security-doors', title: 'Pet-Friendly Security Door Options', category: 'education' },
  { slug: 'remote-access-door-systems', title: 'Remote Access Door Systems: Control from Anywhere', category: 'education' },
  { slug: 'security-doors-for-new-builds', title: 'Security Doors for New Build Properties in Spain', category: 'advice' },
  { slug: 'retrofitting-security-doors', title: 'Retrofitting Security Doors to Existing Properties', category: 'education' },
  { slug: 'custom-security-door-designs', title: 'Custom Security Door Designs: Style Meets Protection', category: 'education' },
  { slug: 'hidden-security-features', title: 'Hidden Security Features for Discreet Protection', category: 'education' },
  // Location-specific
  { slug: 'why-marbella-villas-need-security-doors', title: 'Why Marbella Villas Need Security Doors', category: 'location' },
  { slug: 'puerto-banus-property-security-guide', title: 'Puerto Banús Property Security Guide', category: 'location' },
  { slug: 'la-zagaleta-security-requirements', title: 'La Zagaleta Security Requirements for Homeowners', category: 'location' },
  { slug: 'golden-mile-security-solutions', title: 'Golden Mile Marbella: Security Solutions Guide', category: 'location' },
  { slug: 'sotogrande-villa-protection', title: 'Sotogrande Villa Protection: What You Need', category: 'location' },
  { slug: 'estepona-new-developments-security', title: 'Security for Estepona New Developments', category: 'location' },
  { slug: 'benahavis-mountain-property-security', title: 'Benahavís Mountain Property Security', category: 'location' },
  { slug: 'sierra-blanca-luxury-security', title: 'Sierra Blanca Luxury Security Solutions', category: 'location' },
  // Seasonal
  { slug: 'summer-security-tips-costa-del-sol', title: 'Summer Security Tips for Costa del Sol Properties', category: 'seasonal' },
  { slug: 'winter-property-protection-spain', title: 'Winter Property Protection When You\'re Away', category: 'seasonal' },
  { slug: 'rental-property-security-tips', title: 'Security Tips for Rental Properties in Spain', category: 'advice' },
  { slug: 'airbnb-property-security-guide', title: 'Airbnb Property Security Guide for Hosts', category: 'advice' },
  // Technical
  { slug: 'security-door-locking-mechanisms', title: 'Security Door Locking Mechanisms Explained', category: 'education' },
  { slug: 'multi-point-locking-systems', title: 'Multi-Point Locking Systems: How They Work', category: 'education' },
  { slug: 'burglar-resistant-glass-options', title: 'Burglar-Resistant Glass Options for Doors', category: 'education' },
  { slug: 'door-frame-reinforcement', title: 'Door Frame Reinforcement: The Overlooked Essential', category: 'education' },
  { slug: 'electronic-vs-mechanical-locks', title: 'Electronic vs Mechanical Locks: Making the Right Choice', category: 'comparison' },
  { slug: 'fingerprint-door-locks-guide', title: 'Fingerprint Door Locks: Complete Buyer\'s Guide', category: 'education' },
  { slug: 'face-recognition-access-systems', title: 'Face Recognition Access Systems for Homes', category: 'education' },
  { slug: 'security-door-hinges-importance', title: 'Why Security Door Hinges Matter', category: 'education' },
  // Industry trends
  { slug: 'security-door-trends-2026', title: 'Security Door Trends 2026: What\'s New', category: 'trends' },
  { slug: 'smart-home-security-integration', title: 'Smart Home Security Integration Guide', category: 'trends' },
  { slug: 'sustainable-security-doors', title: 'Sustainable Security Doors: Eco-Friendly Options', category: 'trends' },
  { slug: 'invisible-security-features', title: 'Invisible Security: Protecting Without Showing', category: 'trends' },
  // Buying guides
  { slug: 'security-door-buying-guide', title: 'Security Door Buying Guide: Everything to Consider', category: 'guide' },
  { slug: 'how-much-do-security-doors-cost', title: 'How Much Do Security Doors Cost in Spain?', category: 'guide' },
  { slug: 'security-door-installation-timeline', title: 'Security Door Installation: Timeline & What to Expect', category: 'guide' },
  { slug: 'questions-to-ask-security-installer', title: '10 Questions to Ask Your Security Door Installer', category: 'guide' },
  { slug: 'security-door-warranty-guide', title: 'Security Door Warranties: What to Look For', category: 'guide' },
  // Problem/solution
  { slug: 'weak-entry-points-villa-security', title: 'Identifying Weak Entry Points in Villa Security', category: 'advice' },
  { slug: 'common-security-mistakes-homeowners', title: 'Common Security Mistakes Homeowners Make', category: 'advice' },
  { slug: 'burglary-recovery-security-upgrade', title: 'After a Burglary: Security Upgrade Checklist', category: 'advice' },
  { slug: 'security-audit-your-property', title: 'How to Security Audit Your Property', category: 'guide' }
];

// ============ GUIDES ============
const guides = [
  { slug: 'complete-guide-villa-security-spain', title: 'Complete Guide to Villa Security in Spain' },
  { slug: 'luxury-property-security-handbook', title: 'Luxury Property Security Handbook' },
  { slug: 'costa-del-sol-homeowner-security-guide', title: 'Costa del Sol Homeowner Security Guide' },
  { slug: 'expatriate-property-security-spain', title: 'Expatriate Property Security in Spain' },
  { slug: 'investment-property-security-guide', title: 'Investment Property Security Guide' },
  { slug: 'gated-community-security-additions', title: 'Additional Security for Gated Community Homes' },
  { slug: 'beachfront-property-security', title: 'Beachfront Property Security Considerations' },
  { slug: 'golf-resort-villa-security', title: 'Golf Resort Villa Security Guide' },
  { slug: 'penthouse-apartment-security', title: 'Penthouse & Apartment Security Guide' },
  { slug: 'rural-finca-security-guide', title: 'Rural Finca Security Guide' },
  { slug: 'multi-property-owner-security', title: 'Security for Multi-Property Owners' },
  { slug: 'absentee-owner-property-protection', title: 'Absentee Owner Property Protection Guide' }
];

// ============ FAQ PAGES ============
const faqPages = mainLocations.map(loc => ({
  slug: `faq-${loc.slug}`,
  title: `Security Doors FAQ - ${loc.name}`,
  location: loc
}));

// ============ COMPARISON PAGES ============
const comparisonPages = [
  { slug: 'security-doors-vs-security-grilles', title: 'Security Doors vs Security Grilles' },
  { slug: 'steel-doors-vs-aluminium-doors', title: 'Steel Security Doors vs Aluminium' },
  { slug: 'spanish-vs-german-security-doors', title: 'Spanish vs German Security Doors' },
  { slug: 'residential-vs-commercial-security', title: 'Residential vs Commercial Security Doors' },
  { slug: 'budget-vs-premium-security-doors', title: 'Budget vs Premium Security Doors: Worth the Difference?' },
  { slug: 'pivot-doors-vs-hinged-security-doors', title: 'Pivot Doors vs Hinged Security Doors' },
  { slug: 'sliding-vs-swing-security-doors', title: 'Sliding vs Swing Security Doors' },
  { slug: 'internal-vs-external-security-doors', title: 'Internal vs External Security Doors' },
  { slug: 'wood-clad-vs-metal-finish-doors', title: 'Wood-Clad vs Metal Finish Security Doors' },
  { slug: 'single-vs-double-security-doors', title: 'Single vs Double Security Doors' }
];

// ============ INDUSTRY VERTICALS ============
const industryPages = [
  { slug: 'security-doors-hotels-resorts', title: 'Security Doors for Hotels & Resorts', industry: 'hospitality' },
  { slug: 'security-doors-restaurants-bars', title: 'Security Doors for Restaurants & Bars', industry: 'hospitality' },
  { slug: 'security-doors-retail-shops', title: 'Security Doors for Retail Shops', industry: 'retail' },
  { slug: 'security-doors-offices', title: 'Security Doors for Offices', industry: 'commercial' },
  { slug: 'security-doors-medical-clinics', title: 'Security Doors for Medical Clinics', industry: 'healthcare' },
  { slug: 'security-doors-dental-practices', title: 'Security Doors for Dental Practices', industry: 'healthcare' },
  { slug: 'security-doors-jewellery-stores', title: 'Security Doors for Jewellery Stores', industry: 'retail' },
  { slug: 'security-doors-art-galleries', title: 'Security Doors for Art Galleries', industry: 'cultural' },
  { slug: 'security-doors-banks-financial', title: 'Security Doors for Banks & Financial Services', industry: 'finance' },
  { slug: 'security-doors-car-dealerships', title: 'Security Doors for Car Dealerships', industry: 'automotive' },
  { slug: 'security-doors-warehouses', title: 'Security Doors for Warehouses & Storage', industry: 'industrial' },
  { slug: 'security-doors-schools-education', title: 'Security Doors for Schools & Education', industry: 'education' },
  { slug: 'security-doors-gyms-fitness', title: 'Security Doors for Gyms & Fitness Centres', industry: 'leisure' },
  { slug: 'security-doors-spas-wellness', title: 'Security Doors for Spas & Wellness Centres', industry: 'leisure' },
  { slug: 'security-doors-yacht-clubs', title: 'Security Doors for Yacht Clubs & Marinas', industry: 'maritime' },
  { slug: 'security-doors-golf-clubs', title: 'Security Doors for Golf Clubs', industry: 'leisure' },
  { slug: 'security-doors-real-estate-agencies', title: 'Security Doors for Real Estate Agencies', industry: 'commercial' },
  { slug: 'security-doors-law-firms', title: 'Security Doors for Law Firms', industry: 'professional' },
  { slug: 'security-doors-embassies-consulates', title: 'Security Doors for Embassies & Consulates', industry: 'government' },
  { slug: 'security-doors-private-schools', title: 'Security Doors for Private International Schools', industry: 'education' }
];

// ============ ADDITIONAL SUB-AREAS ============
const newSubAreas = [
  // Marbella extras
  { parent: 'marbella', slug: 'nueva-andalucia', name: 'Nueva Andalucía' },
  { parent: 'marbella', slug: 'puerto-banus', name: 'Puerto Banús' },
  { parent: 'marbella', slug: 'guadalmina', name: 'Guadalmina' },
  { parent: 'marbella', slug: 'nagüeles', name: 'Nagüeles' },
  { parent: 'marbella', slug: 'marbella-east', name: 'Marbella East' },
  { parent: 'marbella', slug: 'camojan', name: 'Cascada de Camojón' },
  { parent: 'marbella', slug: 'rocio-de-nagüeles', name: 'Rocío de Nagüeles' },
  { parent: 'marbella', slug: 'altos-de-puente-romano', name: 'Altos de Puente Romano' },
  // Estepona extras  
  { parent: 'estepona', slug: 'the-new-golden-mile', name: 'The New Golden Mile' },
  { parent: 'estepona', slug: 'los-reales', name: 'Los Reales' },
  { parent: 'estepona', slug: 'el-padron', name: 'El Padrón' },
  { parent: 'estepona', slug: 'seghers', name: 'Seghers' },
  { parent: 'estepona', slug: 'bel-air', name: 'Bel Air' },
  { parent: 'estepona', slug: 'monte-biarritz', name: 'Monte Biarritz' },
  // Sotogrande extras
  { parent: 'sotogrande', slug: 'sotogrande-alto', name: 'Sotogrande Alto' },
  { parent: 'sotogrande', slug: 'sotogrande-costa', name: 'Sotogrande Costa' },
  { parent: 'sotogrande', slug: 'sotogrande-marina', name: 'Sotogrande Marina' },
  { parent: 'sotogrande', slug: 'la-reserva-sotogrande', name: 'La Reserva Sotogrande' },
  { parent: 'sotogrande', slug: 'san-roque-club', name: 'San Roque Club' },
  { parent: 'sotogrande', slug: 'alcaidesa', name: 'Alcaidesa' },
  // San Pedro extras
  { parent: 'san-pedro-de-alcantara', slug: 'linda-vista', name: 'Linda Vista' },
  { parent: 'san-pedro-de-alcantara', slug: 'guadalmina-baja', name: 'Guadalmina Baja' },
  { parent: 'san-pedro-de-alcantara', slug: 'guadalmina-alta', name: 'Guadalmina Alta' },
  { parent: 'san-pedro-de-alcantara', slug: 'cortijo-blanco', name: 'Cortijo Blanco' },
  // Costa del Sol general
  { parent: 'costa-del-sol', slug: 'nerja', name: 'Nerja' },
  { parent: 'costa-del-sol', slug: 'torrox', name: 'Torrox' },
  { parent: 'costa-del-sol', slug: 'rincon-de-la-victoria', name: 'Rincón de la Victoria' },
  { parent: 'costa-del-sol', slug: 'malaga-city', name: 'Málaga City' },
  { parent: 'costa-del-sol', slug: 'alhaurin-el-grande', name: 'Alhaurín el Grande' },
  { parent: 'costa-del-sol', slug: 'coin', name: 'Coín' },
  { parent: 'costa-del-sol', slug: 'ojen', name: 'Ojén' }
];

// ============ HELPER FUNCTIONS ============

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateBlogContent(post) {
  const wordCount = 600 + Math.floor(Math.random() * 200);
  const intro = getIntroForCategory(post.category, post.title);
  const sections = generateSections(post.title, post.category);
  
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
              ${intro}
            </p>
            
            ${sections}
            
            <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
              <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
                Ready to Secure Your Property?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact Cenit Security for a free consultation about security doors 
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

function getIntroForCategory(category, title) {
  const intros = {
    advice: `When it comes to protecting your property on the Costa del Sol, making informed decisions is crucial. This guide covers everything you need to know about ${title.toLowerCase()}, helping you make the right choice for your home security needs.`,
    comparison: `Choosing the right security solution requires understanding your options. In this detailed comparison, we examine the key differences, advantages, and considerations to help Costa del Sol property owners make an informed decision.`,
    education: `Understanding security technology helps you make better decisions for your property. This educational guide explains the concepts, mechanisms, and benefits that every homeowner should know.`,
    research: `Data-driven insights help property owners understand the security landscape on the Costa del Sol. This research-based article examines trends, statistics, and expert recommendations.`,
    location: `The Costa del Sol has unique security considerations based on property type, location, and local factors. This location-specific guide addresses the particular needs of homeowners in this prestigious area.`,
    seasonal: `Security needs change throughout the year, especially for properties that may be unoccupied during certain seasons. This guide helps you prepare for these variations.`,
    trends: `The security industry continues to evolve with new technologies and approaches. Stay informed about the latest developments that could benefit your property.`,
    guide: `This comprehensive guide walks you through everything you need to know, from initial considerations to final decisions. Perfect for property owners who want thorough, reliable information.`
  };
  return intros[category] || intros.advice;
}

function generateSections(title, category) {
  const sectionCount = 4 + Math.floor(Math.random() * 3);
  let sections = '';
  
  const sectionTopics = getSectionTopics(category);
  
  for (let i = 0; i < sectionCount; i++) {
    const topic = sectionTopics[i % sectionTopics.length];
    sections += `
            <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
              ${topic.heading}
            </h2>
            <p className="text-gray-300 mb-4">
              ${topic.content}
            </p>
            <p className="text-gray-300 mb-4">
              ${topic.detail}
            </p>
    `;
  }
  
  return sections;
}

function getSectionTopics(category) {
  return [
    {
      heading: 'Understanding Your Security Needs',
      content: 'Every property has unique security requirements based on location, design, and usage patterns. A thorough assessment helps identify vulnerabilities and prioritise improvements.',
      detail: 'Professional security consultants can evaluate your property and recommend solutions that address specific weak points while maintaining aesthetic appeal and ease of use.'
    },
    {
      heading: 'Key Features to Consider',
      content: 'Modern security doors incorporate multiple protective elements including reinforced frames, multi-point locking systems, and burglar-resistant materials rated to European standards.',
      detail: 'The best solutions balance security with practicality, ensuring daily use remains convenient while providing robust protection against intrusion attempts.'
    },
    {
      heading: 'Installation Considerations',
      content: 'Professional installation is essential for security doors to perform as designed. Improper fitting can compromise even the highest-rated products.',
      detail: 'Experienced installers understand local building requirements and can integrate new security elements with existing structures without compromising integrity.'
    },
    {
      heading: 'Long-term Value',
      content: 'Quality security installations represent an investment in your property that can reduce insurance premiums, increase resale value, and provide peace of mind.',
      detail: 'The Costa del Sol property market increasingly values security features, with buyers actively seeking homes with comprehensive protection systems.'
    },
    {
      heading: 'Integration with Smart Home Systems',
      content: 'Modern security doors can connect with home automation systems, allowing remote monitoring, access control, and integration with cameras and alarms.',
      detail: 'This connectivity provides convenience for homeowners while maintaining security, particularly valuable for those who travel frequently or own multiple properties.'
    },
    {
      heading: 'Maintenance and Longevity',
      content: 'Quality security doors require minimal maintenance but benefit from periodic inspection to ensure continued optimal performance.',
      detail: 'Regular maintenance checks can identify potential issues before they become problems, extending the life of your security investment.'
    },
    {
      heading: 'Local Expertise Matters',
      content: 'Working with security specialists who understand the Costa del Sol market ensures solutions appropriate for local conditions, property types, and security challenges.',
      detail: 'Local installers can provide faster response times for maintenance, have established relationships with suppliers, and understand regional security trends.'
    }
  ];
}

function generateGuideContent(guide) {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${guide.title} | Cenit Security Doors',
  description: '${guide.title} - comprehensive security guidance for Costa del Sol property owners from Cenit Security.',
  keywords: '${guide.title.toLowerCase()}, property security, costa del sol, spain',
};

export default function ${toPascalCase(guide.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/guides" className="text-[#c9a961] hover:underline">
            ← Back to Guides
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          ${guide.title}
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            This comprehensive guide provides everything you need to know about securing 
            your property on the Costa del Sol. From initial assessment to final installation, 
            we cover all aspects of modern security solutions.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Introduction to Property Security
          </h2>
          <p className="text-gray-300 mb-4">
            The Costa del Sol attracts property owners from around the world, drawn by the 
            climate, lifestyle, and investment opportunities. With this comes the responsibility 
            of protecting your valuable asset, whether it's a permanent residence, holiday home, 
            or rental property.
          </p>
          <p className="text-gray-300 mb-4">
            Modern security goes beyond simple locks and alarms. Today's solutions integrate 
            physical barriers, electronic systems, and smart technology to create comprehensive 
            protection that adapts to your lifestyle and usage patterns.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Assessing Your Security Needs
          </h2>
          <p className="text-gray-300 mb-4">
            Every property is unique, and security solutions should be tailored accordingly. 
            Factors to consider include property type, location, occupancy patterns, valuable 
            contents, and personal preferences for convenience versus maximum protection.
          </p>
          <p className="text-gray-300 mb-4">
            A professional security assessment identifies potential vulnerabilities and 
            prioritises improvements based on risk level and budget. This systematic approach 
            ensures resources are allocated effectively.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Physical Security Elements
          </h2>
          <p className="text-gray-300 mb-4">
            Physical barriers remain the foundation of property security. High-quality security 
            doors, reinforced frames, protected windows, and secure perimeter fencing create 
            multiple layers of protection that deter and delay intruders.
          </p>
          <p className="text-gray-300 mb-4">
            European security standards (EN 1627-1630) provide objective ratings for door and 
            window resistance. Understanding these classifications helps you specify appropriate 
            protection levels for different areas of your property.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Electronic Security Integration
          </h2>
          <p className="text-gray-300 mb-4">
            Modern security systems combine physical barriers with electronic monitoring and 
            access control. CCTV, motion sensors, alarm systems, and smart locks work together 
            to provide comprehensive protection and convenient management.
          </p>
          <p className="text-gray-300 mb-4">
            Remote monitoring capabilities allow property owners to check security status from 
            anywhere in the world, receive instant alerts, and even grant or revoke access 
            remotely – particularly valuable for holiday homes and rental properties.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Choosing the Right Partner
          </h2>
          <p className="text-gray-300 mb-4">
            Selecting a security provider requires consideration of experience, product quality, 
            installation expertise, and after-sales support. Local knowledge of Costa del Sol 
            properties and conditions adds significant value.
          </p>
          <p className="text-gray-300 mb-4">
            Look for providers who offer comprehensive consultations, certified products, 
            professional installation by trained teams, and ongoing maintenance services. 
            Quality guarantees and insurance compliance should be standard.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Get Your Free Security Assessment
            </h3>
            <p className="text-gray-300 mb-6">
              Contact Cenit Security for a professional evaluation of your property's 
              security needs. Our experts provide tailored recommendations with no obligation.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateFAQContent(faq) {
  const faqs = [
    { q: 'How long does security door installation take?', a: 'Most residential security door installations are completed within 1-2 days. Complex installations or custom designs may require additional time for fitting and finishing.' },
    { q: 'Do you offer free consultations?', a: 'Yes, we provide free on-site security assessments for properties throughout the Costa del Sol. Our experts evaluate your needs and provide tailored recommendations.' },
    { q: 'What warranty do you offer?', a: 'Our security doors come with comprehensive warranties covering materials and workmanship. Specific terms vary by product but typically range from 5-10 years.' },
    { q: 'Can security doors be customised to match my property?', a: 'Absolutely. We offer a wide range of finishes, colours, and designs to complement any architectural style while maintaining maximum security ratings.' },
    { q: 'Will security doors reduce my insurance premiums?', a: 'Many insurers offer reduced premiums for properties with certified security installations. We can provide documentation to support your insurance application.' },
    { q: 'Do you install throughout the Costa del Sol?', a: `Yes, we serve all areas of the Costa del Sol including ${faq.location.name} and surrounding regions. Our team handles installations from Sotogrande to Málaga.` },
    { q: 'What security ratings should I look for?', a: 'European standard EN 1627 rates doors from RC1 to RC6. For residential properties, we typically recommend RC3 or RC4, which resist sustained attack with tools.' },
    { q: 'Can you secure terrace and patio doors?', a: 'Yes, we specialise in securing large glass doors common in Costa del Sol properties. Our solutions maintain views and light while providing excellent protection.' }
  ];
  
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors FAQ ${faq.location.name} | Cenit Security',
  description: 'Frequently asked questions about security doors in ${faq.location.name}, Costa del Sol. Expert answers from Cenit Security.',
  keywords: 'security doors faq, ${faq.location.name.toLowerCase()} security, questions security doors',
};

export default function FAQ${toPascalCase(faq.location.slug)}Page() {
  const faqs = ${JSON.stringify(faqs, null, 4)};

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations/${faq.location.slug}" className="text-[#c9a961] hover:underline">
            ← Back to ${faq.location.name}
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Doors FAQ
        </h1>
        <h2 className="text-2xl text-gray-400 mb-12">${faq.location.name}, Costa del Sol</h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800 pb-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
          <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
            Have More Questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact our team for personalised advice about security solutions 
            for your ${faq.location.name} property.
          </p>
          <a
            href="https://wa.me/34667793100"
            className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateComparisonContent(comparison) {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${comparison.title} | Cenit Security',
  description: 'Detailed comparison: ${comparison.title.toLowerCase()}. Expert analysis to help Costa del Sol property owners choose.',
  keywords: '${comparison.title.toLowerCase()}, security comparison, costa del sol',
};

export default function ${toPascalCase(comparison.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/comparisons" className="text-[#c9a961] hover:underline">
            ← Back to Comparisons
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          ${comparison.title}
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Making the right choice for your property's security requires understanding 
            the options available. This detailed comparison examines both approaches to 
            help you make an informed decision.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Overview
          </h2>
          <p className="text-gray-300 mb-4">
            Both options have their place in property security, and the best choice 
            depends on your specific requirements, property type, budget, and 
            preferences. Understanding the key differences helps narrow down the 
            ideal solution.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Security Performance
          </h2>
          <p className="text-gray-300 mb-4">
            Security ratings provide objective measures of resistance to attack. 
            European standards test products against various tools and time periods, 
            giving clear performance benchmarks for comparison.
          </p>
          <p className="text-gray-300 mb-4">
            Higher ratings typically mean greater material strength, more complex 
            locking mechanisms, and better resistance to common attack methods. 
            However, appropriate specification depends on actual risk levels.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Aesthetic Considerations
          </h2>
          <p className="text-gray-300 mb-4">
            Modern security products increasingly balance protection with design. 
            Many options now offer customisation in colours, finishes, and styles 
            to complement various architectural approaches.
          </p>
          <p className="text-gray-300 mb-4">
            For luxury properties on the Costa del Sol, maintaining aesthetic appeal 
            while achieving security goals is particularly important. The best 
            solutions achieve both without compromise.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Cost Comparison
          </h2>
          <p className="text-gray-300 mb-4">
            Initial cost is only part of the equation. Consider installation 
            complexity, maintenance requirements, expected lifespan, and potential 
            impact on insurance premiums when comparing total value.
          </p>
          <p className="text-gray-300 mb-4">
            Premium products often prove more economical over time through durability, 
            lower maintenance needs, and better warranty coverage. Quality pays 
            dividends in security applications.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Recommendation
          </h2>
          <p className="text-gray-300 mb-4">
            The ideal choice depends on your specific situation. We recommend a 
            professional consultation to assess your property, understand your 
            priorities, and recommend the most appropriate solution.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Need Help Deciding?
            </h3>
            <p className="text-gray-300 mb-6">
              Our security experts can assess your property and recommend the 
              best option for your specific needs and budget.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateIndustryContent(industry) {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${industry.title} | Cenit Security Costa del Sol',
  description: '${industry.title} - specialist commercial security solutions for Costa del Sol businesses. Professional installation.',
  keywords: '${industry.title.toLowerCase()}, commercial security doors, costa del sol business security',
};

export default function ${toPascalCase(industry.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/commercial" className="text-[#c9a961] hover:underline">
            ← Back to Commercial Solutions
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          ${industry.title}
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Specialist security solutions designed for the unique requirements of 
            ${industry.industry} businesses on the Costa del Sol. We understand the 
            specific challenges and provide tailored protection.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Understanding Your Industry
          </h2>
          <p className="text-gray-300 mb-4">
            ${industry.industry.charAt(0).toUpperCase() + industry.industry.slice(1)} businesses face 
            specific security challenges that require specialist solutions. From 
            access control requirements to insurance compliance, we address the 
            full spectrum of commercial security needs.
          </p>
          <p className="text-gray-300 mb-4">
            Our experience working with ${industry.industry} clients across the Costa del Sol 
            means we understand operational requirements and can design security 
            that enhances rather than impedes daily business activities.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Key Security Requirements
          </h2>
          <p className="text-gray-300 mb-4">
            Commercial properties require security solutions that balance 
            protection with practicality. High-traffic areas need different 
            approaches than secure storage, and staff access must be managed 
            alongside visitor flow.
          </p>
          <p className="text-gray-300 mb-4">
            We provide solutions ranging from reinforced entry points to 
            sophisticated access control systems, all designed to integrate 
            with your operational procedures.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Compliance and Insurance
          </h2>
          <p className="text-gray-300 mb-4">
            Many businesses have specific security requirements for insurance 
            purposes or regulatory compliance. Our certified products and 
            professional installations meet or exceed these standards.
          </p>
          <p className="text-gray-300 mb-4">
            We provide full documentation for insurance and compliance purposes, 
            helping you demonstrate appropriate security measures and potentially 
            reduce premiums.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Minimal Disruption Installation
          </h2>
          <p className="text-gray-300 mb-4">
            We understand that business continuity is essential. Our commercial 
            installation teams work efficiently and can schedule around your 
            operating hours to minimise disruption.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Commercial Security Consultation
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us to discuss your business security requirements. We offer 
              free consultations and can provide quotes tailored to your needs.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              Contact Our Commercial Team
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateSubAreaContent(area) {
  const parentName = mainLocations.find(l => l.slug === area.parent)?.name || area.parent;
  
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors ${area.name} | Cenit Security',
  description: 'Professional security door installation in ${area.name}, ${parentName}. Bespoke solutions for luxury properties. Free consultation.',
  keywords: 'security doors ${area.name.toLowerCase()}, ${area.name.toLowerCase()} security, ${parentName.toLowerCase()} security doors',
};

export default function ${toPascalCase(area.slug)}Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations/${area.parent}" className="text-[#c9a961] hover:underline">
            ← Back to ${parentName}
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Doors ${area.name}
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">${parentName}, Costa del Sol</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cenit Security provides premium security door installation throughout 
            ${area.name}. Our bespoke solutions protect luxury villas and apartments 
            in this prestigious ${parentName} location.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Security Solutions for ${area.name}
          </h2>
          <p className="text-gray-300 mb-4">
            ${area.name} features some of the most desirable properties in ${parentName}, 
            attracting discerning owners who expect the highest standards in every 
            aspect of their homes – including security.
          </p>
          <p className="text-gray-300 mb-4">
            Our security solutions are designed specifically for the property types 
            common in ${area.name}, from contemporary villas to traditional estates. 
            We balance robust protection with aesthetic elegance.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Services in ${area.name}
          </h2>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li>• High-security entrance doors</li>
            <li>• Reinforced terrace and patio doors</li>
            <li>• Safe room installation</li>
            <li>• Biometric access systems</li>
            <li>• Smart lock integration</li>
            <li>• Security upgrades for existing properties</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Why Choose Cenit Security
          </h2>
          <p className="text-gray-300 mb-4">
            With extensive experience in ${parentName} and surrounding areas, we 
            understand the specific security requirements of ${area.name} properties. 
            Our local presence means fast response times and ongoing support.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Free Consultation in ${area.name}
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free security assessment of your ${area.name} property. 
              Our experts provide tailored recommendations with no obligation.
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

function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// ============ MAIN GENERATION ============

function main() {
  let created = 0;
  
  // Create blog directory and posts
  console.log('Creating blog posts...');
  const blogDir = path.join(baseDir, 'blog');
  ensureDir(blogDir);
  
  // Blog index page
  const blogIndexPath = path.join(blogDir, 'page.tsx');
  if (!fs.existsSync(blogIndexPath)) {
    fs.writeFileSync(blogIndexPath, generateBlogIndexPage());
    created++;
  }
  
  for (const post of blogPosts) {
    const postDir = path.join(blogDir, post.slug);
    ensureDir(postDir);
    const pagePath = path.join(postDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateBlogContent(post));
      created++;
    }
  }
  console.log(`  Blog posts: ${blogPosts.length}`);
  
  // Create guides directory and pages
  console.log('Creating guide pages...');
  const guidesDir = path.join(baseDir, 'guides');
  ensureDir(guidesDir);
  
  // Guides index page
  const guidesIndexPath = path.join(guidesDir, 'page.tsx');
  if (!fs.existsSync(guidesIndexPath)) {
    fs.writeFileSync(guidesIndexPath, generateGuidesIndexPage());
    created++;
  }
  
  for (const guide of guides) {
    const guideDir = path.join(guidesDir, guide.slug);
    ensureDir(guideDir);
    const pagePath = path.join(guideDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateGuideContent(guide));
      created++;
    }
  }
  console.log(`  Guides: ${guides.length}`);
  
  // Create FAQ pages
  console.log('Creating FAQ pages...');
  const faqDir = path.join(baseDir, 'faq');
  ensureDir(faqDir);
  
  for (const faq of faqPages) {
    const faqPageDir = path.join(faqDir, faq.location.slug);
    ensureDir(faqPageDir);
    const pagePath = path.join(faqPageDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateFAQContent(faq));
      created++;
    }
  }
  console.log(`  FAQ pages: ${faqPages.length}`);
  
  // Create comparison pages
  console.log('Creating comparison pages...');
  const comparisonsDir = path.join(baseDir, 'comparisons');
  ensureDir(comparisonsDir);
  
  // Comparisons index page
  const comparisonsIndexPath = path.join(comparisonsDir, 'page.tsx');
  if (!fs.existsSync(comparisonsIndexPath)) {
    fs.writeFileSync(comparisonsIndexPath, generateComparisonsIndexPage());
    created++;
  }
  
  for (const comparison of comparisonPages) {
    const comparisonDir = path.join(comparisonsDir, comparison.slug);
    ensureDir(comparisonDir);
    const pagePath = path.join(comparisonDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateComparisonContent(comparison));
      created++;
    }
  }
  console.log(`  Comparisons: ${comparisonPages.length}`);
  
  // Create commercial/industry pages
  console.log('Creating commercial pages...');
  const commercialDir = path.join(baseDir, 'commercial');
  ensureDir(commercialDir);
  
  // Commercial index page
  const commercialIndexPath = path.join(commercialDir, 'page.tsx');
  if (!fs.existsSync(commercialIndexPath)) {
    fs.writeFileSync(commercialIndexPath, generateCommercialIndexPage());
    created++;
  }
  
  for (const industry of industryPages) {
    const industryDir = path.join(commercialDir, industry.slug);
    ensureDir(industryDir);
    const pagePath = path.join(industryDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateIndustryContent(industry));
      created++;
    }
  }
  console.log(`  Commercial pages: ${industryPages.length}`);
  
  // Create new sub-area pages
  console.log('Creating new sub-area pages...');
  for (const area of newSubAreas) {
    const areaDir = path.join(baseDir, 'locations', area.parent, area.slug);
    ensureDir(areaDir);
    const pagePath = path.join(areaDir, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, generateSubAreaContent(area));
      created++;
    }
  }
  console.log(`  New sub-areas: ${newSubAreas.length}`);
  
  console.log(`\nTotal new pages created: ${created}`);
  
  // Count total pages
  const { execSync } = require('child_process');
  const totalPages = execSync(`find ${baseDir} -name "page.tsx" | wc -l`).toString().trim();
  console.log(`Total pages now: ${totalPages}`);
}

// Index page generators
function generateBlogIndexPage() {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Blog | Cenit Security Doors Costa del Sol',
  description: 'Expert security advice, guides, and insights for Costa del Sol property owners. Stay informed about home security.',
  keywords: 'security blog, costa del sol security advice, home security tips spain',
};

const posts = ${JSON.stringify(blogPosts.slice(0, 20).map(p => ({ slug: p.slug, title: p.title, category: p.category })), null, 2)};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Blog
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Expert advice and insights for Costa del Sol property owners
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={\`/blog/\${post.slug}\`}
              className="block p-6 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#c9a961]/50 transition-colors"
            >
              <span className="text-xs text-[#c9a961] uppercase tracking-wider">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mt-2 text-white">
                {post.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

function generateGuidesIndexPage() {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Guides | Cenit Security Doors Costa del Sol',
  description: 'Comprehensive security guides for Costa del Sol property owners. Expert knowledge for protecting your investment.',
  keywords: 'security guides, property security guide, costa del sol homeowner guide',
};

const guides = ${JSON.stringify(guides, null, 2)};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Guides
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Comprehensive guides for protecting your Costa del Sol property
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={\`/guides/\${guide.slug}\`}
              className="block p-8 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#c9a961]/50 transition-colors"
            >
              <h2 className="text-2xl font-serif text-[#c9a961]">
                {guide.title}
              </h2>
              <p className="text-gray-400 mt-2">
                Comprehensive coverage of security considerations and solutions.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

function generateComparisonsIndexPage() {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Comparisons | Cenit Security Doors',
  description: 'Compare security options for your Costa del Sol property. Expert analysis to help you choose.',
  keywords: 'security door comparison, compare security options, best security doors',
};

const comparisons = ${JSON.stringify(comparisonPages, null, 2)};

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Comparisons
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Detailed comparisons to help you make informed decisions
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={\`/comparisons/\${comparison.slug}\`}
              className="block p-6 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#c9a961]/50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-white">
                {comparison.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

function generateCommercialIndexPage() {
  return `import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Security Solutions | Cenit Security Costa del Sol',
  description: 'Professional security solutions for businesses on the Costa del Sol. Hotels, retail, offices and more.',
  keywords: 'commercial security doors, business security spain, costa del sol commercial security',
};

const industries = ${JSON.stringify(industryPages, null, 2)};

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Commercial Security Solutions
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Specialist security for Costa del Sol businesses
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={\`/commercial/\${industry.slug}\`}
              className="block p-6 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#c9a961]/50 transition-colors"
            >
              <span className="text-xs text-[#c9a961] uppercase tracking-wider">
                {industry.industry}
              </span>
              <h2 className="text-lg font-semibold mt-2 text-white">
                {industry.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

main();
