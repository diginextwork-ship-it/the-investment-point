"use client";

import { useState, useEffect } from "react";
import Counter from "@/components/Counter";

export default function About() {
  const [founderDetails, setFounderDetails] = useState({
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    // Generate random details for the founder
    const randomCity = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"][
      Math.floor(Math.random() * 5)
    ];
    const randomPhone = `+91 ${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 900000 + 100000)}`;
    const randomEmail = `shubham@theinvestmentpoint.com`;
    const randomAddress = `${Math.floor(Math.random() * 9000 + 1000)} Business Street, ${randomCity}, India`;

    setFounderDetails({
      phone: randomPhone,
      email: randomEmail,
      address: randomAddress,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-teal-50">
            Learn about our mission, vision, and commitment to your financial
            success
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Investment Point is a premier financial advisory firm
                dedicated to helping individuals and businesses achieve their
                wealth creation goals through personalized investment strategies
                and expert guidance. We are your trusted partner in building
                long-term wealth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of certified financial advisors and investment
                professionals are committed to understanding your unique needs
                and crafting tailored solutions that align with your
                aspirations. We combine extensive market knowledge, transparent
                practices, and a client-centric approach to deliver
                comprehensive financial solutions.
              </p>
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Core Values
                </h3>
                <ul className="space-y-3">
                  {[
                    "Client-Focused: Your financial goals are our priority",
                    "Transparency: Clear, honest communication always",
                    "Expertise: Deep market knowledge & professional advice",
                    "Integrity: Highest ethical standards in all dealings",
                  ].map((value) => (
                    <li key={value} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      <span className="text-slate-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200 space-y-6 animate-slideInRight">
              <h3 className="text-2xl font-bold text-slate-900">
                Key Highlights
              </h3>
              {[
                { label: "Years of Experience", value: 10 },
                { label: "Happy Clients", value: 500 },
                { label: "Financial Products", value: 50 },
                { label: "Expert Advisors", value: 100 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center pb-4 border-b border-slate-200 last:border-0"
                >
                  <span className="text-slate-600">{item.label}</span>
                  <div className="text-3xl font-bold text-teal-600 flex items-center gap-1">
                    <Counter
                      value={item.value}
                      fontSize={32}
                      fontWeight="900"
                      textColor="currentColor"
                    />
                    <span>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-xl border border-slate-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Meet Our Founder
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-teal-600 mb-2">
                    Mr. Shubham Barsaiyan
                  </h3>
                  <p className="text-xl text-slate-600">Founder & CEO</p>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With a passion for financial education and a commitment to
                  excellence, Mr. Shubham Barsaiyan founded The Investment Point
                  to democratize access to world-class financial services. His
                  vision is to empower individuals and families to build lasting
                  wealth through informed decision-making and strategic
                  planning.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A certified financial advisor with extensive experience in
                  investment management, Mr. Barsaiyan has successfully guided
                  clients through various market cycles and helped them achieve
                  their financial objectives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-slate-200 space-y-6">
                <div>
                  <p className="text-slate-600 font-medium mb-2">Phone</p>
                  <p className="text-2xl font-semibold text-teal-600">
                    {founderDetails.phone}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 font-medium mb-2">Email</p>
                  <p className="text-lg text-teal-600 break-all">
                    {founderDetails.email}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 font-medium mb-2">Address</p>
                  <p className="text-lg text-slate-700">
                    {founderDetails.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed">
                To provide accessible, personalized, and expert financial
                guidance that empowers individuals and families to build
                sustainable wealth and achieve their life goals with confidence
                and clarity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-700 leading-relaxed">
                To be the most trusted and innovative financial services
                partner, recognized for our commitment to client success,
                ethical practices, and transformative financial solutions that
                create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © 2024 The Investment Point. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
