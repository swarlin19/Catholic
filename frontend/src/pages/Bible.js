// src/pages/Bible.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const bibleSections = [
  { label: "📘 திருவிவிலியம்", route: "/bible/intro1", bg: "bg-[#fde2e2]" },
  { label: "📖 முன்னுரை", route: "/bible/intro2", bg: "bg-[#e2f0cb]" },
  { label: "🕰️ கால அட்டவணை", route: "/bible/timeline", bg: "bg-[#ffe8cc]" },
  { label: "📚 பொதுமொழிபெயர்ப்பு", route: "/bible/intro4", bg: "bg-[#e0ecff]" },
  { label: "🗺️ விவிலிய நாடுகள்", route: "/bible/maps", bg: "bg-[#ffe4f0]" },
  { label: "💡 விவிலியத்தில் அனைத்தும்", route: "/bible/logics", bg: "bg-[#daf4f0]" },
  { label: "🔍 புரிந்து கொள்வது எப்படி?", route: "/bible/knowledge", bg: "bg-[#f0e4ff]" },
];

const Bible = () => {
  return (
    <div className="bg-[#fff9f0] min-h-screen px-4 py-10 font-['Noto Serif Tamil']">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a2d2d] mb-10">
        📖 திருவிவிலியம்
      </h1>

      {/* Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {bibleSections.map((section, idx) => (
          <Link
            to={section.route}
            key={idx}
            className={`${section.bg} p-5 rounded-xl border border-[#ddd] hover:bg-opacity-80 transition-all text-center text-lg font-medium text-[#4b2d2d]`}
          >
            {section.label}
          </Link>
        ))}
      </div>

      {/* External Links */}
      <div className="mt-16 text-center space-y-6">
        <h2 className="text-xl font-semibold text-[#4b2d2d]">🔗 இணையத்தில் திருவிவிலியம் வாசிக்க:</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://bible.catholicgallery.org/tamil/etb-old-testament/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a83232] text-white px-6 py-3 rounded-lg hover:bg-[#902020] transition duration-200"
          >
            📜 பழைய ஏற்பாடு
          </a>
          <a
            href="https://bible.catholicgallery.org/tamil/etb-new-testament/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2e8b57] text-white px-6 py-3 rounded-lg hover:bg-[#23704b] transition duration-200"
          >
            📖 புதிய ஏற்பாடு
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bible;
