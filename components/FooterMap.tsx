import React from "react";

const FooterMap: React.FC = () => {
  return (
    <div className="w-full h-[250px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.35100927839!2d79.58111215578668!3d24.920109584366163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982bdbb79c7d77b%3A0x43e3bf851d02b55!2sTHE%20INVESTMENT%20POINT!5e0!3m2!1sen!2sin!4v1777712862401!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Investment Point Location"
      />
    </div>
  );
};

export default FooterMap;