import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Guides | Cenit Security Doors Costa del Sol',
  description: 'Comprehensive security guides for Costa del Sol property owners. Expert knowledge for protecting your investment.',
  keywords: 'security guides, property security guide, costa del sol homeowner guide',
};

const guides = [
  {
    "slug": "complete-guide-villa-security-spain",
    "title": "Complete Guide to Villa Security in Spain"
  },
  {
    "slug": "luxury-property-security-handbook",
    "title": "Luxury Property Security Handbook"
  },
  {
    "slug": "costa-del-sol-homeowner-security-guide",
    "title": "Costa del Sol Homeowner Security Guide"
  },
  {
    "slug": "expatriate-property-security-spain",
    "title": "Expatriate Property Security in Spain"
  },
  {
    "slug": "investment-property-security-guide",
    "title": "Investment Property Security Guide"
  },
  {
    "slug": "gated-community-security-additions",
    "title": "Additional Security for Gated Community Homes"
  },
  {
    "slug": "beachfront-property-security",
    "title": "Beachfront Property Security Considerations"
  },
  {
    "slug": "golf-resort-villa-security",
    "title": "Golf Resort Villa Security Guide"
  },
  {
    "slug": "penthouse-apartment-security",
    "title": "Penthouse & Apartment Security Guide"
  },
  {
    "slug": "rural-finca-security-guide",
    "title": "Rural Finca Security Guide"
  },
  {
    "slug": "multi-property-owner-security",
    "title": "Security for Multi-Property Owners"
  },
  {
    "slug": "absentee-owner-property-protection",
    "title": "Absentee Owner Property Protection Guide"
  }
];

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
              href={`/guides/${guide.slug}`}
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
