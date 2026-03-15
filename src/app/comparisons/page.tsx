import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Comparisons | Cenit Security Doors',
  description: 'Compare security options for your Costa del Sol property. Expert analysis to help you choose.',
  keywords: 'security door comparison, compare security options, best security doors',
};

const comparisons = [
  {
    "slug": "security-doors-vs-security-grilles",
    "title": "Security Doors vs Security Grilles"
  },
  {
    "slug": "steel-doors-vs-aluminium-doors",
    "title": "Steel Security Doors vs Aluminium"
  },
  {
    "slug": "spanish-vs-german-security-doors",
    "title": "Spanish vs German Security Doors"
  },
  {
    "slug": "residential-vs-commercial-security",
    "title": "Residential vs Commercial Security Doors"
  },
  {
    "slug": "budget-vs-premium-security-doors",
    "title": "Budget vs Premium Security Doors: Worth the Difference?"
  },
  {
    "slug": "pivot-doors-vs-hinged-security-doors",
    "title": "Pivot Doors vs Hinged Security Doors"
  },
  {
    "slug": "sliding-vs-swing-security-doors",
    "title": "Sliding vs Swing Security Doors"
  },
  {
    "slug": "internal-vs-external-security-doors",
    "title": "Internal vs External Security Doors"
  },
  {
    "slug": "wood-clad-vs-metal-finish-doors",
    "title": "Wood-Clad vs Metal Finish Security Doors"
  },
  {
    "slug": "single-vs-double-security-doors",
    "title": "Single vs Double Security Doors"
  }
];

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
              href={`/comparisons/${comparison.slug}`}
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
