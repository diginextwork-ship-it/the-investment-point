"use client";

const TopStrip = () => {
  const phone = "+91 9039472693";
  const email = "Varunb1607@gmail.com";

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 px-4 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold">📞</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">✉️</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
