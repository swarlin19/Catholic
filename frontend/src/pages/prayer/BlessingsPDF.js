// src/pages/prayer/BlessingsPDF.jsx
import React from 'react';

const BlessingsPDF = () => {
  return (
    <div className="min-h-screen bg-[#f8f5ee] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#3a3329] mb-6 text-center">
        2.6.1 ஆசியுரைகளும் மந்திரிப்புகளும்
      </h1>
      <iframe
        src="/assets/pdfs/blessings.pdf"
        title="ஆசியுரைகள் PDF"
        className="w-full md:w-3/4 h-[80vh] shadow-lg border rounded-xl"
      />
    </div>
  );
};

export default BlessingsPDF;
