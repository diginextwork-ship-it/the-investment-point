'use client';

export default function MutualFund() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mutual Funds</h1>
          <p className="text-xl text-teal-50">
            Grow your wealth with professionally managed mutual fund portfolios
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold text-slate-900">What are Mutual Funds?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mutual funds pool money from multiple investors to create a diversified portfolio of stocks, bonds, or other securities. Our expert fund managers carefully select investments to maximize returns while managing risk according to your financial goals.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you&apos;re a beginner or an experienced investor, our curated selection of mutual funds offers options for every risk appetite and investment horizon.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-900 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Professional Fund Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Instant Diversification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Low Minimum Investment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600">✓</span> Tax Efficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Fund Categories</h3>
              {[
                {
                  category: 'Equity Funds',
                  desc: 'Invest in stocks for long-term growth',
                },
                {
                  category: 'Debt Funds',
                  desc: 'Fixed income securities for stability',
                },
                {
                  category: 'Hybrid Funds',
                  desc: 'Mix of stocks and bonds for balance',
                },
                {
                  category: 'Index Funds',
                  desc: 'Track market indices cost-effectively',
                },
              ].map((fund, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-slate-200 last:border-0 group cursor-pointer hover:bg-white p-3 rounded transition-smooth"
                >
                  <p className="font-semibold text-slate-900 group-hover:text-teal-600 transition-smooth">
                    {fund.category}
                  </p>
                  <p className="text-sm text-slate-600">{fund.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-xl border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Our Mutual Funds?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📊',
                  title: 'Transparent Reporting',
                  desc: 'Regular updates and performance tracking',
                },
                {
                  icon: '💼',
                  title: 'Expert Selection',
                  desc: 'Hand-picked funds from top performers',
                },
                {
                  icon: '🎯',
                  title: 'Goal-Based Planning',
                  desc: 'Funds aligned with your objectives',
                },
                {
                  icon: '📱',
                  title: 'Easy Management',
                  desc: 'Online portal for complete control',
                },
                {
                  icon: '💰',
                  title: 'Competitive Returns',
                  desc: 'Consistent performance benchmarking',
                },
                {
                  icon: '🛡️',
                  title: 'Secure & Regulated',
                  desc: 'SEBI approved and regulated',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-smooth text-center"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Start Investing Today</h2>
            <p className="text-lg text-teal-50 mb-8">
              Let our experts help you build a mutual fund portfolio tailored to your goals
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-slate-50 transition-smooth"
            >
              Consult an Expert
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
