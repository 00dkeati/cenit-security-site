import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Blog | Cenit Security Doors Costa del Sol',
  description: 'Expert security advice, guides, and insights for Costa del Sol property owners. Stay informed about home security.',
  keywords: 'security blog, costa del sol security advice, home security tips spain',
};

const posts = [
  {
    "slug": "how-to-choose-security-doors-for-your-villa",
    "title": "How to Choose Security Doors for Your Villa",
    "category": "advice"
  },
  {
    "slug": "what-is-a-panic-room",
    "title": "What is a Panic Room? Complete Guide",
    "category": "advice"
  },
  {
    "slug": "biometric-vs-keypad-access-control",
    "title": "Biometric vs Keypad Access Control: Which is Better?",
    "category": "comparison"
  },
  {
    "slug": "home-invasion-prevention-tips",
    "title": "Home Invasion Prevention: Expert Tips for Villa Owners",
    "category": "advice"
  },
  {
    "slug": "costa-del-sol-crime-statistics",
    "title": "Costa del Sol Crime Statistics: What Property Owners Should Know",
    "category": "research"
  },
  {
    "slug": "security-doors-vs-standard-doors",
    "title": "Security Doors vs Standard Doors: Key Differences",
    "category": "comparison"
  },
  {
    "slug": "best-security-features-luxury-villas",
    "title": "Best Security Features for Luxury Villas in Spain",
    "category": "advice"
  },
  {
    "slug": "reinforced-doors-explained",
    "title": "Reinforced Doors Explained: Materials, Ratings & Benefits",
    "category": "education"
  },
  {
    "slug": "safe-room-design-guide",
    "title": "Safe Room Design Guide for Spanish Properties",
    "category": "advice"
  },
  {
    "slug": "security-door-materials-comparison",
    "title": "Security Door Materials: Steel vs Aluminium vs Composite",
    "category": "comparison"
  },
  {
    "slug": "how-security-doors-are-installed",
    "title": "How Security Doors Are Installed: Step-by-Step Process",
    "category": "education"
  },
  {
    "slug": "european-security-door-standards",
    "title": "European Security Door Standards & Certifications",
    "category": "education"
  },
  {
    "slug": "holiday-home-security-checklist",
    "title": "Holiday Home Security Checklist for Costa del Sol",
    "category": "advice"
  },
  {
    "slug": "smart-locks-vs-traditional-locks",
    "title": "Smart Locks vs Traditional Locks: Pros and Cons",
    "category": "comparison"
  },
  {
    "slug": "terrace-door-security-solutions",
    "title": "Terrace Door Security Solutions for Spanish Villas",
    "category": "advice"
  },
  {
    "slug": "garage-door-security-guide",
    "title": "Garage Door Security: Protecting Your Vehicle and Home",
    "category": "advice"
  },
  {
    "slug": "window-security-options",
    "title": "Window Security Options for Luxury Properties",
    "category": "advice"
  },
  {
    "slug": "cctv-integration-with-doors",
    "title": "CCTV Integration with Security Door Systems",
    "category": "education"
  },
  {
    "slug": "fire-rated-security-doors",
    "title": "Fire-Rated Security Doors: What You Need to Know",
    "category": "education"
  },
  {
    "slug": "soundproof-security-doors",
    "title": "Soundproof Security Doors for Ultimate Privacy",
    "category": "education"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-4">
          Security Blog
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Expert advice and insights for Costa del Sol property owners
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#c9a961]/50 transition-colors"
            >
              <span className="text-xs text-[#c9a961] uppercase tracking-wider">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mt-2 text-white">
                {post.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
