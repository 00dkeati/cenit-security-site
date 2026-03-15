import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Security Solutions | Cenit Security Costa del Sol',
  description: 'Professional security solutions for businesses on the Costa del Sol. Hotels, retail, offices and more.',
  keywords: 'commercial security doors, business security spain, costa del sol commercial security',
};

const industries = [
  {
    "slug": "security-doors-hotels-resorts",
    "title": "Security Doors for Hotels & Resorts",
    "industry": "hospitality"
  },
  {
    "slug": "security-doors-restaurants-bars",
    "title": "Security Doors for Restaurants & Bars",
    "industry": "hospitality"
  },
  {
    "slug": "security-doors-retail-shops",
    "title": "Security Doors for Retail Shops",
    "industry": "retail"
  },
  {
    "slug": "security-doors-offices",
    "title": "Security Doors for Offices",
    "industry": "commercial"
  },
  {
    "slug": "security-doors-medical-clinics",
    "title": "Security Doors for Medical Clinics",
    "industry": "healthcare"
  },
  {
    "slug": "security-doors-dental-practices",
    "title": "Security Doors for Dental Practices",
    "industry": "healthcare"
  },
  {
    "slug": "security-doors-jewellery-stores",
    "title": "Security Doors for Jewellery Stores",
    "industry": "retail"
  },
  {
    "slug": "security-doors-art-galleries",
    "title": "Security Doors for Art Galleries",
    "industry": "cultural"
  },
  {
    "slug": "security-doors-banks-financial",
    "title": "Security Doors for Banks & Financial Services",
    "industry": "finance"
  },
  {
    "slug": "security-doors-car-dealerships",
    "title": "Security Doors for Car Dealerships",
    "industry": "automotive"
  },
  {
    "slug": "security-doors-warehouses",
    "title": "Security Doors for Warehouses & Storage",
    "industry": "industrial"
  },
  {
    "slug": "security-doors-schools-education",
    "title": "Security Doors for Schools & Education",
    "industry": "education"
  },
  {
    "slug": "security-doors-gyms-fitness",
    "title": "Security Doors for Gyms & Fitness Centres",
    "industry": "leisure"
  },
  {
    "slug": "security-doors-spas-wellness",
    "title": "Security Doors for Spas & Wellness Centres",
    "industry": "leisure"
  },
  {
    "slug": "security-doors-yacht-clubs",
    "title": "Security Doors for Yacht Clubs & Marinas",
    "industry": "maritime"
  },
  {
    "slug": "security-doors-golf-clubs",
    "title": "Security Doors for Golf Clubs",
    "industry": "leisure"
  },
  {
    "slug": "security-doors-real-estate-agencies",
    "title": "Security Doors for Real Estate Agencies",
    "industry": "commercial"
  },
  {
    "slug": "security-doors-law-firms",
    "title": "Security Doors for Law Firms",
    "industry": "professional"
  },
  {
    "slug": "security-doors-embassies-consulates",
    "title": "Security Doors for Embassies & Consulates",
    "industry": "government"
  },
  {
    "slug": "security-doors-private-schools",
    "title": "Security Doors for Private International Schools",
    "industry": "education"
  }
];

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
              href={`/commercial/${industry.slug}`}
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
