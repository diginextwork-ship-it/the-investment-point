"use client";

const TopStrip = () => {
  const phone = "+91 9039472693";
  const email = "varunb1607@gmail.com";

  return (
    <div className="bg-[#0BA6DF] text-white py-2 px-4 text-xs md:text-sm">
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