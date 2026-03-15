import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors Rocío de Nagüeles | Cenit Security',
  description: 'Professional security door installation in Rocío de Nagüeles, Marbella. Bespoke solutions for luxury properties. Free consultation.',
  keywords: 'security doors rocío de nagüeles, rocío de nagüeles security, marbella security doors',
};

export default function RocioDeNagüelesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations/marbella" className="text-[#c9a961] hover:underline">
            ← Back to Marbella
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Doors Rocío de Nagüeles
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">Marbella, Costa del Sol</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cenit Security provides premium security door installation throughout 
            Rocío de Nagüeles. Our bespoke solutions protect luxury villas and apartments 
            in this prestigious Marbella location.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Security Solutions for Rocío de Nagüeles
          </h2>
          <p className="text-gray-300 mb-4">
            Rocío de Nagüeles features some of the most desirable properties in Marbella, 
            attracting discerning owners who expect the highest standards in every 
            aspect of their homes – including security.
          </p>
          <p className="text-gray-300 mb-4">
            Our security solutions are designed specifically for the property types 
            common in Rocío de Nagüeles, from contemporary villas to traditional estates. 
            We balance robust protection with aesthetic elegance.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Services in Rocío de Nagüeles
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
            With extensive experience in Marbella and surrounding areas, we 
            understand the specific security requirements of Rocío de Nagüeles properties. 
            Our local presence means fast response times and ongoing support.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Free Consultation in Rocío de Nagüeles
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free security assessment of your Rocío de Nagüeles property. 
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
