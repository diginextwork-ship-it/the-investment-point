'use client';

export default function HealthInsurance() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Health Insurance</h1>
          <p className="text-xl text-teal-50">
            Comprehensive health coverage for you and your loved ones
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold text-slate-900">Protect Your Health</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Health insurance is essential protection against unexpected medical expenses. Our comprehensive plans cover hospitalization, surgeries, and preventive care, ensuring you and your family receive the best medical treatment without financial stress.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With cashless treatment at networked hospitals and transparent coverage, we make healthcare accessible and affordable for everyone.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-900 mb-3">Coverage Highlights:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Cashless Hospitalization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Pre & Post Hospitalization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Maternity Coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Dental & Vision Benefits
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Plan Options</h3>
              {[
                {
                  plan: 'Individual Plans',
                  desc: 'Coverage for single individuals',
                },
                {
                  plan: 'Family Plans',
                  desc: 'Complete family protection',
                },
                {
                  plan: 'Senior Citizen Plans',
                  desc: 'Special benefits for 60+ years',
                },
                {
                  plan: 'Group Plans',
                  desc: 'Corporate and bulk coverage',
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-slate-200 last:border-0 group cursor-pointer hover:bg-white p-3 rounded transition-smooth"
                >
                  <p className="font-semibold text-slate-900 group-hover:text-teal-600 transition-smooth">
                    {plan.plan}
                  </p>
                  <p className="text-sm text-slate-600">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Details */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-xl border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What&apos;s Covered</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🏥',
                  title: 'Hospital Stay',
                  items: [
                    'Room & boarding',
                    'Surgeon fees',
                    'Medications & tests',
                  ],
                },
                {
                  icon: '🚑',
                  title: 'Emergency Services',
                  items: [
                    'Ambulance charges',
                    'Emergency care',
                    '24/7 support',
                  ],
                },
                {
                  icon: '👶',
                  title: 'Maternity & Child',
                  items: [
                    'Maternity coverage',
                    'New born benefits',
                    'Childcare coverage',
                  ],
                },
                {
                  icon: '💊',
                  title: 'Preventive Care',
                  items: [
                    'Annual checkup',
                    'Health screening',
                    'Vaccination',
                  ],
                },
              ].map((coverage, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg border border-slate-200">
                  <div className="text-4xl mb-3">{coverage.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-3">{coverage.title}</h3>
                  <ul className="space-y-2">
                    {coverage.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Network Hospitals */}
          <div className="bg-gradient-to-r from-teal-50 to-white p-12 rounded-xl border border-teal-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Network Hospitals</h2>
            <p className="text-lg text-slate-600 mb-8">
              Access to a nationwide network of 10,000+ cashless hospitals across India
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Super Specialty Hospitals',
                'Multi Specialty Centers',
                'Diagnostic Centers',
                'Nursing Homes',
              ].map((hospital, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-3xl mb-2">🏛️</div>
                  <p className="font-semibold text-slate-900">{hospital}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Instant Cashless',
                desc: 'Seamless cashless treatment',
              },
              {
                icon: '📱',
                title: 'Easy Claim',
                desc: 'Simple claims process online',
              },
              {
                icon: '🛡️',
                title: 'Full Protection',
                desc: 'Comprehensive coverage',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-smooth text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Get Health Insurance Today</h2>
            <p className="text-lg text-teal-50 mb-8">
              Protect yourself and your family with comprehensive health coverage
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-slate-50 transition-smooth"
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
