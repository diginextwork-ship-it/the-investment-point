'use client';

export default function SIP() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-12 sm:py-16 bg-[#0BA6DF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Systematic Investment Plan (SIP)</h1>
          <p className="text-base sm:text-xl text-white/90">
            Invest consistently and build wealth through disciplined investing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          {/* Overview */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 md:gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What is SIP?</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A Systematic Investment Plan (SIP) is a disciplined approach to investing fixed amounts at regular intervals. Instead of timing the market, SIP takes advantage of rupee cost averaging, helping you reduce the impact of market volatility.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you invest ₹500 or ₹50,000 monthly, SIP makes it easy to build long-term wealth without the stress of lump sum investments.
              </p>
              <div className="bg-[#0BA6DF]/10 p-6 rounded-lg border border-[#0BA6DF]/20">
                <h3 className="font-semibold text-[#0BA6DF] mb-3">SIP Advantages:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Rupee Cost Averaging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Low Minimum Investment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Reduces Emotional Investing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0BA6DF]">✓</span> Flexibility & Control
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0BA6DF]/10 to-white p-5 sm:p-8 rounded-xl border border-[#0BA6DF]/20 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">SIP Investment Options</h3>
              {[
                {
                  amount: '₹500 - ₹5,000',
                  duration: 'Monthly',
                  desc: 'Start small, grow big',
                },
                {
                  amount: '₹5,001 - ₹20,000',
                  duration: 'Monthly',
                  desc: 'Regular wealth creation',
                },
                {
                  amount: '₹20,001+',
                  duration: 'Monthly',
                  desc: 'Accelerated growth plans',
                },
                {
                  amount: 'Quarterly',
                  duration: 'Or Bi-Annual',
                  desc: 'Flexible investment periods',
                },
              ].map((option, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-slate-200 last:border-0 group cursor-pointer hover:bg-white p-3 rounded transition-smooth"
                >
                  <p className="font-semibold text-slate-900 group-hover:text-[#0BA6DF] transition-smooth">
                    {option.amount}
                  </p>
                  <p className="text-sm text-slate-600">{option.duration} - {option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How SIP Works */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-12 rounded-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">How SIP Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: 'Choose Amount',
                  desc: 'Select monthly/quarterly investment amount',
                },
                {
                  step: 2,
                  title: 'Select Fund',
                  desc: 'Pick from our curated mutual fund options',
                },
                {
                  step: 3,
                  title: 'Auto Debit',
                  desc: 'Automatic debit from your account',
                },
                {
                  step: 4,
                  title: 'Build Wealth',
                  desc: 'Watch your investment grow over time',
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

          {/* Benefits Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Why Choose SIP?</h2>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {[
                {
                  icon: '📈',
                  title: 'Consistent Returns',
                  desc: 'Build substantial wealth through consistent investing over time',
                },
                {
                  icon: '⏰',
                  title: 'Time Power',
                  desc: 'Leverage the power of compounding for exponential growth',
                },
                {
                  icon: '🎯',
                  title: 'Goal Achievement',
                  desc: 'Reach your financial goals systematically and surely',
                },
                {
                  icon: '💪',
                  title: 'Risk Reduction',
                  desc: 'Minimize market timing risks with rupee cost averaging',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-8 bg-white rounded-lg border border-slate-200 hover:border-[#0BA6DF] hover:shadow-lg transition-smooth"
                >
                  <div className="text-4xl sm:text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0BA6DF] text-white p-6 sm:p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Your SIP Journey</h2>
            <p className="text-lg text-white/90 mb-8">
              Begin your wealth creation with as little as ₹500/month
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#0BA6DF] rounded-lg font-semibold hover:bg-slate-50 transition-smooth"
            >
              Start SIP Today
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
