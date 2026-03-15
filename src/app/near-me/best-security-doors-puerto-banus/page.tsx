import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Security Doors in Puerto Banús | Cenit Security',
  description: 'Best Security Doors in Puerto Banús. Professional security door installation and service. Free consultation available.',
  keywords: 'best security doors in puerto banús, security doors puerto banús, local security installer',
};

export default function BestSecurityDoorsPuertoBanusPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations" className="text-[#c9a961] hover:underline">
            ← Back to Locations
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Best Security Doors in Puerto Banús
        </h1>
        <p className="text-2xl text-gray-400 mb-8">Professional Security Door Installation</p>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Looking for security doors in Puerto Banús? Cenit Security is your local 
            specialist for premium security door installation throughout the Costa del Sol. 
            We serve Puerto Banús and surrounding areas with professional, reliable service.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Local Security Door Experts
          </h2>
          <p className="text-gray-300 mb-4">
            As a Puerto Banús-based security company, we understand the specific needs 
            of properties in this area. Our team provides fast response times, local 
            expertise, and ongoing support for all installations.
          </p>
          <p className="text-gray-300 mb-4">
            We've installed security doors throughout Puerto Banús for villas, 
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
              Free Consultation in Puerto Banús
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
