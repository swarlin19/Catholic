import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#312d4d] text-[#f0e6cc] py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <hr className="border-t border-[#f0e6cc]/30 mb-4" />
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">கத்தோலிக்க திருச்சபை</span>. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </p>
        <p className="text-xs sm:text-sm mt-1 text-[#e2d9bb]">
          திருவிவிலிய ஆவணங்கள் - தமிழ் வழிகாட்டி
        </p>
      </div>
    </footer>
  );
};

export default Footer;
