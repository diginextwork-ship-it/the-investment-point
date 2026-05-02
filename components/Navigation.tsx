'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const serviceLinks = [
  { name: 'Mutual Fund', href: '/services/mutual-fund' },
  { name: 'SIP', href: '/services/sip' },
  { name: 'Health Insurance', href: '/services/health-insurance' },
  { name: 'Life Insurance', href: '/services/life-insurance' },
];

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/contact' },
  { name: 'Founder', href: '/about#founder' },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-teal-600 transition-smooth hover:text-teal-700"
        >
          The Investment Point
        </Link>

        <div className="hidden items-center justify-center gap-10 md:flex">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-semibold text-slate-700 transition-smooth group-hover:text-teal-600">
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-smooth hover:bg-teal-50 hover:text-teal-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {links.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full bg-teal-600 px-7 py-3 text-base font-semibold text-white transition-smooth hover:bg-teal-700 md:inline-flex"
        >
          Get Started
        </Link>

        <button
          className="justify-self-end rounded-lg p-2 transition-smooth hover:bg-slate-100 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="animate-fadeIn space-y-4 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <Link
            href="/"
            className="block text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <div className="space-y-2">
            <div className="text-base font-semibold text-slate-900">Services</div>
            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block pl-3 text-sm font-medium text-slate-700 transition-smooth hover:text-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="block text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about#founder"
            className="block text-base font-semibold text-slate-700 transition-smooth hover:text-teal-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Founder
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-teal-600 px-7 py-3 text-base font-semibold text-white transition-smooth hover:bg-teal-700"
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
