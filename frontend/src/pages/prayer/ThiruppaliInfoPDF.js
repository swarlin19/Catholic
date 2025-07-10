// src/pages/prayer/ThiruppaliInfoPDF.jsx
import React from 'react';

const ThiruppaliInfoPDF = () => {
  return (
    <div className="min-h-screen bg-[#f8f5ee] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#3a3329] mb-6 text-center">
        2.5.2 திருப்பலி பற்றி நாம் அறிய வேண்டியவை
      </h1>
      <iframe
        src="/assets/pdfs/thiruppali.pdf"
        title="திருப்பலி பற்றி"
        className="w-full md:w-3/4 h-[80vh] shadow-lg border rounded-xl"
      />
    </div>
  );
};

export default ThiruppaliInfoPDF;
