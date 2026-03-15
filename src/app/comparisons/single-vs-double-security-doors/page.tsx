import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Single vs Double Security Doors | Cenit Security',
  description: 'Detailed comparison: single vs double security doors. Expert analysis to help Costa del Sol property owners choose.',
  keywords: 'single vs double security doors, security comparison, costa del sol',
};

export default function SingleVsDoubleSecurityDoorsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/comparisons" className="text-[#c9a961] hover:underline">
            ← Back to Comparisons
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-8">
          Single vs Double Security Doors
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Making the right choice for your property's security requires understanding 
            the options available. This detailed comparison examines both approaches to 
            help you make an informed decision.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Overview
          </h2>
          <p className="text-gray-300 mb-4">
            Both options have their place in property security, and the best choice 
            depends on your specific requirements, property type, budget, and 
            preferences. Understanding the key differences helps narrow down the 
            ideal solution.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Security Performance
          </h2>
          <p className="text-gray-300 mb-4">
            Security ratings provide objective measures of resistance to attack. 
            European standards test products against various tools and time periods, 
            giving clear performance benchmarks for comparison.
          </p>
          <p className="text-gray-300 mb-4">
            Higher ratings typically mean greater material strength, more complex 
            locking mechanisms, and better resistance to common attack methods. 
            However, appropriate specification depends on actual risk levels.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Aesthetic Considerations
          </h2>
          <p className="text-gray-300 mb-4">
            Modern security products increasingly balance protection with design. 
            Many options now offer customisation in colours, finishes, and styles 
            to complement various architectural approaches.
          </p>
          <p className="text-gray-300 mb-4">
            For luxury properties on the Costa del Sol, maintaining aesthetic appeal 
            while achieving security goals is particularly important. The best 
            solutions achieve both without compromise.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Cost Comparison
          </h2>
          <p className="text-gray-300 mb-4">
            Initial cost is only part of the equation. Consider installation 
            complexity, maintenance requirements, expected lifespan, and potential 
            impact on insurance premiums when comparing total value.
          </p>
          <p className="text-gray-300 mb-4">
            Premium products often prove more economical over time through durability, 
            lower maintenance needs, and better warranty coverage. Quality pays 
            dividends in security applications.
          </p>
          
          <h2 className="text-2xl font-serif text-[#c9a961] mt-12 mb-4">
            Our Recommendation
          </h2>
          <p className="text-gray-300 mb-4">
            The ideal choice depends on your specific situation. We recommend a 
            professional consultation to assess your property, understand your 
            priorities, and recommend the most appropriate solution.
          </p>
          
          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#c9a961]/20">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">
              Need Help Deciding?
            </h3>
            <p className="text-gray-300 mb-6">
              Our security experts can assess your property and recommend the 
              best option for your specific needs and budget.
            </p>
            <a
              href="https://wa.me/34667793100"
              className="inline-block bg-[#c9a961] text-black px-8 py-3 rounded font-semibold hover:bg-[#d4b872] transition-colors"
            >
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
