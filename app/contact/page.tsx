"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-12 sm:py-16 bg-[#0BA6DF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-xl text-white/90">
            Get in touch with our expert financial advisors today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg text-slate-600">
                  Fill out the form below and our team will get back to you
                  shortly with personalized financial solutions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0BA6DF] transition-smooth"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0BA6DF] transition-smooth"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0BA6DF] transition-smooth"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#0BA6DF] text-white font-semibold rounded-lg hover:bg-[#0BA6DF]/90 transition-smooth disabled:opacity-50 active:scale-95 transform"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>

                {submitted && (
                  <div className="p-4 bg-[#0BA6DF]/10 border border-[#0BA6DF]/30 rounded-lg animate-fadeIn">
                    <p className="text-[#0BA6DF] font-semibold">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slideInRight">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-base sm:text-lg text-slate-600">
                  Reach out to us through any of the following channels.
                  We&apos;re here to help you achieve your financial goals.
                </p>
              </div>

              {/* Contact Details Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: "📞",
                    title: "Phone",
                    value: "+91 9039472693",
                    subtext: "Available 9 AM - 6 PM IST",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    value: "varunb1607@gmail.com",
                    subtext: "Response within 24 hours",
                  },
                  {
                    icon: "📍",
                    title: "Address",
                    value: "Near Bus Stand Apollo Crossroad Market Shop No 50",
                    subtext: "Madhya Pradesh, India",
                  },
                  {
                    icon: "⏰",
                    title: "Working Hours",
                    value: "Monday - Friday: 10 AM - 6 PM",
                    subtext: "Saturday: 10 AM - 4 PM",
                  },
                ].map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-[#0BA6DF]/10 to-white rounded-lg border border-[#0BA6DF]/20 hover:shadow-lg transition-smooth"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-3xl sm:text-4xl">{contact.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="break-words font-semibold text-[#0BA6DF] mb-1">
                          {contact.value}
                        </p>
                        <p className="text-sm text-slate-600">
                          {contact.subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:text-[#0BA6DF] hover:border-[#0BA6DF] transition-smooth"
                      >
                        {social}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How soon will I hear back from your team?",
                a: "We typically respond to all inquiries within 24 hours during business days.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes, our initial consultation is completely free. We&apos;ll understand your needs and provide personalized recommendations.",
              },
              {
                q: "What documents do I need to provide?",
                a: "We&apos;ll guide you through the entire process. Usually, we need your ID, address proof, and income documents.",
              },
              {
                q: "Can I modify my investment plan later?",
                a: "Absolutely! Your financial situation may change, and we&apos;re here to help you adjust your plan accordingly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 hover:border-[#0BA6DF] transition-smooth"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
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
