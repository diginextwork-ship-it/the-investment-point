'use client';

import TopStrip from '@/components/TopStrip';
import Navigation from '@/components/Navigation';
import FooterMap from '@/components/FooterMap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Star, Wifi } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, transition: 'transform 0.6s ease-out' });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 8,
      y: (x / rect.width) * 8,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0, transition: 'transform 0.6s ease-out' });
  };

  return (
    <>
      <TopStrip />
      <Navigation />
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
      `}</style>

      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative bg-gradient-to-br from-white via-slate-50 to-white px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div
              className={`space-y-8 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0BA6DF]" />
                Trusted by 50+ investors
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                  <span className="block">Invest with</span>
                  <span className="block text-[#0BA6DF]">Confidence</span>
                </h1>
                <div className="h-2 w-28 rounded-full border-l-8 border-[#0BA6DF] bg-[#0BA6DF]/15" />
              </div>

              <p className="border-l-4 border-[#0BA6DF] pl-4 text-lg leading-relaxed text-slate-600">
                Secure your future with The Investment Point. We blend data-driven strategies
                with ethical transparency to engineer sustainable wealth growth for you.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0BA6DF] px-8 py-3.5 font-semibold text-white transition-smooth hover:bg-[#0BA6DF]/90"
                >
                  Start Investing -&gt;
                </Link>
                <Link
                  href="/services/mutual-fund"
                  className="inline-flex items-center justify-center rounded-full border border-[#0BA6DF] px-8 py-3.5 font-semibold text-[#0BA6DF] transition-smooth hover:bg-[#0BA6DF]/10"
                >
                  View Strategies
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <img
                      key={item}
                      src="/placeholder-user.jpg"
                      alt="Client"
                      className="h-11 w-11 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-slate-900">
                  <span className="text-lg font-bold text-[#0BA6DF]">500+</span>
                  <span className="font-bold">Clients</span>
                </div>
                <div className="flex items-center gap-1 text-[#0BA6DF]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-12 md:justify-end">
              <div
                className="relative [--float-a:6s] [--float-b:8s] [--float-c:7s]"
                style={{
                  width: '500px',
                  height: '380px',
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: tilt.transition,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative z-20"
                  style={{ animation: 'floatA var(--float-a,6s) ease-in-out infinite' }}
                >
                  <div
                    className="flex h-[240px] w-[360px] flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white px-8 py-6 shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
                    style={{
                      transform: 'translateZ(24px) rotateX(5deg) rotateY(-10deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div>
                      <div className="mb-8 flex items-start justify-between">
                        <div className="h-[56px] w-[76px] rounded-[18px] bg-[#0BA6DF]/95" />
                        <span className="pt-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                          PREMIUM
                        </span>
                      </div>
                      <div className="text-[22px] font-semibold tracking-[0.38em] text-slate-900">
                        **** **** 4582
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          CARD HOLDER
                        </p>
                        <p className="mt-2 text-[16px] font-semibold leading-tight text-slate-900">
                          Investment Point Member
                        </p>
                      </div>
                      <Wifi className="h-7 w-7 rotate-90 text-slate-500" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-[20px] left-[40px] z-30"
                  style={{ animation: 'floatB var(--float-b,8s) ease-in-out infinite' }}
                >
                  <div
                    className="w-[200px] rounded-[20px] border border-slate-200/80 bg-white px-6 py-5 shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
                    style={{
                      transform: 'translateZ(46px) rotateX(4deg) rotateY(-8deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">Growth</p>
                        <p className="mt-2 text-[18px] font-bold text-[#0BA6DF]">+24.5%</p>
                      </div>
                      <div className="flex h-[48px] items-end gap-[8px]">
                        {[16, 32, 20, 44, 36].map((h, i) => (
                          <div
                            key={i}
                            className="w-[12px] rounded-full bg-[#0BA6DF]"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute right-[80px] top-[-30px] z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#0BA6DF] text-3xl font-bold text-white shadow-xl"
                  style={{
                    animation: 'floatC var(--float-c,7s) ease-in-out infinite',
                    transform: 'translateZ(50px)',
                  }}
                >
                  ₹
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive financial solutions tailored for your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Mutual Fund',
                desc: 'Invest in professionally managed mutual funds with various options.',
                icon: 'MF',
              },
              {
                title: 'SIP',
                desc: 'Systematic Investment Plan for consistent wealth creation.',
                icon: 'SIP',
              },
              {
                title: 'Health Insurance',
                desc: 'Comprehensive health coverage with cashless benefits.',
                icon: 'HI',
              },
              {
                title: 'Life Insurance',
                desc: "Secure your family's future with life insurance plans.",
                icon: 'LI',
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <div className="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition-smooth hover:border-[#0BA6DF] hover:shadow-xl">
                  <div className="mb-4 inline-block text-5xl transition-smooth group-hover:scale-125">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-smooth group-hover:text-[#0BA6DF]">
                    {service.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">{service.desc}</p>
                  <div className="font-semibold text-[#0BA6DF] transition-smooth group-hover:translate-x-2">
                    Explore -&gt;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0BA6DF] px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90">
            Get in touch with our experts today and take the first step towards financial
            success.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-10 py-4 font-semibold text-[#0BA6DF] shadow-xl transition-smooth hover:bg-slate-50 hover:shadow-2xl active:scale-95"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 px-4 py-12 text-slate-100">
        {/* Top: footer info (left) + map (right) */}
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-10 mb-10">

          {/* Left: footer nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#0BA6DF]">The Investment Point</h3>
              <p className="text-sm text-slate-400">
                Your trusted partner in financial growth and security.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0BA6DF]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="transition-smooth hover:text-[#0BA6DF]">About Us</Link></li>
                <li><Link href="/services/mutual-fund" className="transition-smooth hover:text-[#0BA6DF]">Services</Link></li>
                <li><Link href="/contact" className="transition-smooth hover:text-[#0BA6DF]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0BA6DF]">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/mutual-fund" className="transition-smooth hover:text-[#0BA6DF]">Mutual Funds</Link></li>
                <li><Link href="/services/sip" className="transition-smooth hover:text-[#0BA6DF]">SIP</Link></li>
                <li><Link href="/services/health-insurance" className="transition-smooth hover:text-[#0BA6DF]">Health Insurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0BA6DF]">Follow Us</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#" className="transition-smooth hover:text-[#0BA6DF]">Twitter</a>
                <a href="#" className="transition-smooth hover:text-[#0BA6DF]">LinkedIn</a>
                <a href="#" className="transition-smooth hover:text-[#0BA6DF]">Facebook</a>
              </div>
            </div>
          </div>

          {/* Right: map - half width */}
          <div className="w-full md:w-1/2 shrink-0">
            <h4 className="mb-3 font-semibold text-[#0BA6DF]">Find Us</h4>
            <FooterMap />
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            (c) 2024 The Investment Point. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
