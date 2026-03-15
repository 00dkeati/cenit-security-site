import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors for Law Firms | Cenit Security Costa del Sol',
  description: 'Security Doors for Law Firms - specialist commercial security solutions for Costa del Sol businesses. Professional installation.',
  keywords: 'security doors for law firms, commercial security doors, costa del sol business security',
};

export default function SecurityDoorsLawFirmsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/commercial" className="text-[#c9a961] hover:underline">
            ← Back to Commercial Solutions
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          Security Doors for Law Firms
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Specialist security solutions designed for the unique requirements of 
            professional businesses on the Costa del Sol. We understand the 
            specific challenges and provide tailored protection.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Understanding Your Industry
          </h2>
          <p className="text-gray-300 mb-4">
            Professional businesses face 
            specific security challenges that require specialist solutions. From 
            access control requirements to insurance compliance, we address the 
            full spectrum of commercial security needs.
          </p>
          <p className="text-gray-300 mb-4">
            Our experience working with professional clients across the Costa del Sol 
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
