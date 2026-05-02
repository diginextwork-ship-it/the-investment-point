'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const serviceLinks = [
  { name: 'Mutual Fund', href: '/services/mutual-fund' },
  { name: 'SIP', href: '/services/sip' },
  { name: 'Health Insurance', href: '/services/health-insurance' },
  { name: 'Life Insurance', href: '/services/life-insurance' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/contact' },
  { name: 'Founder', href: '/about#founder' },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[72px] md:gap-8">

        {/* LEFT: Logo + Brand Name */}
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <div className="flex h-12 shrink-0 items-center md:h-[56px]">
            <Image
              src="/the_investment_point.svg"
              alt="The Investment Point logo"
              width={56}
              height={56}
              className="h-20 w-auto shrink-0 object-contain sm:h-24 md:h-[160px]"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[0.98rem] font-extrabold tracking-tight text-[#0BA6DF] sm:text-[1.25rem]">
              The Investment Point
            </span>
            <span className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[0.65rem] sm:tracking-[0.22em]">
              Wealth Planning
            </span>
          </div>
        </Link>

        {/* CENTER + RIGHT: Nav links + CTA (desktop) */}
        <div className="ml-auto hidden items-center gap-5 lg:flex xl:gap-8">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-semibold text-slate-700 transition-colors duration-150 hover:text-[#0BA6DF]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#0BA6DF] transition-all duration-150 group-hover:w-full" />
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:text-[#0BA6DF]">
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-150 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-[#0BA6DF]/10 hover:text-[#0BA6DF]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-semibold text-slate-700 transition-colors duration-150 hover:text-[#0BA6DF]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#0BA6DF] transition-all duration-150 group-hover:w-full" />
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-gradient-to-r from-[#0BA6DF] to-[#0880b5] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:from-[#0880b5] hover:to-[#0BA6DF] hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="space-y-3 border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <Link href="/" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

          <div>
            <button
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1 w-full"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block text-sm text-slate-600 hover:text-[#0BA6DF] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/about#founder" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>Founder</Link>

          <Link
            href="/contact"
            className="inline-flex mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0BA6DF] to-[#0880b5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
