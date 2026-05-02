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
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

        {/* LEFT: Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="shrink-0 h-[56px] w-auto flex items-center">
            <Image
              src="/the_investment_point.svg"
              alt="The Investment Point logo"
              width={56}
              height={56}
              className="h-[160px] w-auto object-contain shrink-0"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[1.25rem] font-extrabold text-[#0BA6DF] tracking-tight whitespace-nowrap">
              The Investment Point
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-400 whitespace-nowrap">
              Wealth Planning
            </span>
          </div>
        </Link>

        {/* CENTER + RIGHT: Nav links + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0BA6DF] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] transition-colors duration-200">
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl border border-slate-100 shadow-xl p-2 transition-all duration-200 z-50">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 rounded-xl hover:bg-[#0BA6DF]/10 hover:text-[#0BA6DF] transition-colors duration-150"
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
              className="relative text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0BA6DF] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0BA6DF] to-[#0880b5] hover:from-[#0880b5] hover:to-[#0BA6DF] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3">
          <Link href="/" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

          <div>
            <button
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#0BA6DF] py-1 w-full"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
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