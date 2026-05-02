'use client';

export default function LifeInsurance() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0BA6DF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Life Insurance</h1>
          <p className="text-xl text-white/90">
            Secure your family&apos;s future with reliable life insurance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold text-slate-900">Protect Your Loved Ones</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Life insurance provides financial security to your family in the event of your untimely demise. Our life insurance plans offer affordable premiums with comprehensive coverage, ensuring your family can maintain their lifestyle.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether for children&apos;s education or spouse&apos;s security, our diverse plans cater to every life stage and financial need.
              </p>
              <div className="bg-[#0BA6DF]/10 p-6 rounded-lg border border-[#0BA6DF]/20">
                <h3 className="font-semibold text-[#0BA6DF] mb-3">Coverage Benefits:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Death Benefit Payout
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Survival Benefits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Loan Facility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Rider Options
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0BA6DF]/10 to-white p-8 rounded-xl border border-[#0BA6DF]/20 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Plan Types</h3>
              {[
                {
                  type: 'Term Plans',
                  desc: 'Affordable protection for fixed tenure',
                },
                {
                  type: 'Whole Life Plans',
                  desc: 'Lifetime coverage with investment benefits',
                },
                {
                  type: 'ULIP Plans',
                  desc: 'Insurance + Investment combined',
                },
                {
                  type: 'Endowment Plans',
                  desc: 'Savings + Protection with maturity benefit',
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-slate-200 last:border-0 group cursor-pointer hover:bg-white p-3 rounded transition-smooth"
                >
                  <p className="font-semibold text-slate-900 group-hover:text-[#0BA6DF] transition-smooth">
                    {plan.type}
                  </p>
                  <p className="text-sm text-slate-600">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Life Insurance */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '👨‍👩‍👧',
                title: 'Family Security',
                desc: 'Ensure your family has funds for their lifestyle and expenses',
              },
              {
                icon: '📚',
                title: 'Education Fund',
                desc: 'Secure your children&apos;s higher education',
              },
              {
                icon: '🏠',
                title: 'Home Security',
                desc: 'Help pay off home loan and property expenses',
              },
              {
                icon: '💪',
                title: 'Income Replacement',
                desc: 'Replace lost income and maintain living standards',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg border border-slate-200 hover:border-[#0BA6DF] hover:shadow-lg transition-smooth"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-[#0BA6DF]/10 to-white p-12 rounded-xl border border-[#0BA6DF]/20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">How Life Insurance Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Apply',
                  desc: 'Submit application with details',
                },
                {
                  step: 2,
                  title: 'Underwrite',
                  desc: 'Medical tests & assessment',
                },
                {
                  step: 3,
                  title: 'Policy Issued',
                  desc: 'Get your policy document',
                },
                {
                  step: 4,
                  title: 'Pay Premium',
                  desc: 'Regular premium payments',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-[#0BA6DF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0BA6DF] text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Get Life Insurance Today</h2>
            <p className="text-lg text-white/90 mb-8">
              Protect your family&apos;s future with comprehensive life insurance coverage
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#0BA6DF] rounded-lg font-semibold hover:bg-slate-50 transition-smooth"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            © 2024 The Investment Point. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
