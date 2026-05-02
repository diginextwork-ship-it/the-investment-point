"use client";

const TopStrip = () => {
  const phone = "+91 9039472693";
  const email = "varunb1607@gmail.com";

  return (
    <div className="bg-[#0BA6DF] px-3 py-2 text-xs text-white md:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-semibold">📞</span>
          <span>{phone}</span>
        </div>
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-semibold">✉️</span>
          <span className="break-all">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
