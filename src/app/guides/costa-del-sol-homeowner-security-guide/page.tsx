import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Costa del Sol Homeowner Security Guide | Cenit Security Doors',
  description: 'Costa del Sol Homeowner Security Guide - comprehensive security guidance for Costa del Sol property owners from Cenit Security.',
  keywords: 'costa del sol homeowner security guide, property security, costa del sol, spain',
};

export default function CostaDelSolHomeownerSecurityGuidePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/guides" className="text-[#c9a961] hover:underline">
            ← Back to Guides
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          Costa del Sol Homeowner Security Guide
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
            of protecting your valuable asset, whether it is a permanent residence, holiday home, 
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
