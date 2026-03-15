import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Doors FAQ Marbella | Cenit Security',
  description: 'Frequently asked questions about security doors in Marbella, Costa del Sol. Expert answers from Cenit Security.',
  keywords: 'security doors faq, marbella security, questions security doors',
};

export default function FAQMarbellaPage() {
  const faqs = [
    {
        "q": "How long does security door installation take?",
        "a": "Most residential security door installations are completed within 1-2 days. Complex installations or custom designs may require additional time for fitting and finishing."
    },
    {
        "q": "Do you offer free consultations?",
        "a": "Yes, we provide free on-site security assessments for properties throughout the Costa del Sol. Our experts evaluate your needs and provide tailored recommendations."
    },
    {
        "q": "What warranty do you offer?",
        "a": "Our security doors come with comprehensive warranties covering materials and workmanship. Specific terms vary by product but typically range from 5-10 years."
    },
    {
        "q": "Can security doors be customised to match my property?",
        "a": "Absolutely. We offer a wide range of finishes, colours, and designs to complement any architectural style while maintaining maximum security ratings."
    },
    {
        "q": "Will security doors reduce my insurance premiums?",
        "a": "Many insurers offer reduced premiums for properties with certified security installations. We can provide documentation to support your insurance application."
    },
    {
        "q": "Do you install throughout the Costa del Sol?",
        "a": "Yes, we serve all areas of the Costa del Sol including Marbella and surrounding regions. Our team handles installations from Sotogrande to Málaga."
    },
    {
        "q": "What security ratings should I look for?",
        "a": "European standard EN 1627 rates doors from RC1 to RC6. For residential properties, we typically recommend RC3 or RC4, which resist sustained attack with tools."
    },
    {
        "q": "Can you secure terrace and patio doors?",
        "a": "Yes, we specialise in securing large glass doors common in Costa del Sol properties. Our solutions maintain views and light while providing excellent protection."
    }
];

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/locations/marbella" className="text-[#c9a961] hover:underline">
            ← Back to Marbella
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Doors FAQ
        </h1>
        <h2 className="text-2xl text-gray-400 mb-12">Marbella, Costa del Sol</h2>
        
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
            for your Marbella property.
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
