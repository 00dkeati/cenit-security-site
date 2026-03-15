import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors Alhaurín el Grande | Cenit Security',
  description: 'Professional security door installation in Alhaurín el Grande, Costa del Sol. Bespoke solutions for luxury properties. Free consultation.',
  keywords: 'security doors alhaurín el grande, alhaurín el grande security, costa del sol security doors',
};

export default function AlhaurinElGrandePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations/costa-del-sol" className="text-[#c9a961] hover:underline">
            ← Back to Costa del Sol
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Doors Alhaurín el Grande
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">Costa del Sol, Costa del Sol</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cenit Security provides premium security door installation throughout 
            Alhaurín el Grande. Our bespoke solutions protect luxury villas and apartments 
            in this prestigious Costa del Sol location.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Security Solutions for Alhaurín el Grande
          </h2>
          <p className="text-gray-300 mb-4">
            Alhaurín el Grande features some of the most desirable properties in Costa del Sol, 
            attracting discerning owners who expect the highest standards in every 
            aspect of their homes – including security.
          </p>
          <p className="text-gray-300 mb-4">
            Our security solutions are designed specifically for the property types 
            common in Alhaurín el Grande, from contemporary villas to traditional estates. 
            We balance robust protection with aesthetic elegance.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Services in Alhaurín el Grande
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
            With extensive experience in Costa del Sol and surrounding areas, we 
            understand the specific security requirements of Alhaurín el Grande properties. 
            Our local presence means fast response times and ongoing support.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Free Consultation in Alhaurín el Grande
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free security assessment of your Alhaurín el Grande property. 
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
