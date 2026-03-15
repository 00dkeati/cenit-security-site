import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biometric Access Systems Málaga City | Cenit Security',
  description: 'Professional biometric access systems installation in Málaga City, Costa del Sol. Bespoke security solutions for luxury properties.',
  keywords: 'biometric access systems málaga city, security doors málaga city, costa del sol security',
};

export default function BiometricAccessMalagaCityPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/services/biometric-access" className="text-[#c9a961] hover:underline">
            ← Back to Biometric Access Systems
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Biometric Access Systems
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">Málaga City, Costa del Sol</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cenit Security provides expert biometric access systems installation 
            throughout Málaga City. Our bespoke solutions are designed specifically 
            for the prestigious properties in this exclusive Costa del Sol location.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Biometric Access Systems Solutions for Málaga City
          </h2>
          <p className="text-gray-300 mb-4">
            Málaga City properties demand security solutions that match their exceptional 
            quality. Our biometric access systems installations combine maximum 
            protection with elegant design, ensuring your property remains both secure 
            and aesthetically stunning.
          </p>
          <p className="text-gray-300 mb-4">
            We understand the unique architectural styles found in Málaga City and 
            customize each installation to complement your property's character while 
            meeting the highest security standards.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Why Málaga City Properties Need Premium Security
          </h2>
          <p className="text-gray-300 mb-4">
            The high-value properties in Málaga City require security solutions that 
            match their status. Our biometric access systems options provide peace 
            of mind for discerning homeowners who expect the best.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Biometric Access Systems Features
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
              Get a Quote for Málaga City
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free consultation about biometric access systems 
              for your Málaga City property.
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
