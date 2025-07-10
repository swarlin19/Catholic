// src/pages/Bible.js
import React from 'react';
import BibleIntro1 from './BibleIntro1';
import BibleIntro2 from './BibleIntro2';
import BibleTimeline from './BibleTimeline';
import BibleIntro4 from './BibleIntro4';
import BibleMaps from './BibleMaps';
import Biblelogics from './Biblelogics';
import BibleKnowledge from './BibleKnowledge';

const Bible = () => {
  return (
    <div className="bg-[#fefcf5] text-[#3a2c1f] px-4 py-8 min-h-screen font-['Noto Serif Tamil']">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a3924] mb-10">
        📖 திருவிவிலிய ஆவணங்கள்
      </h1>

      <div className="space-y-14">
        <BibleIntro1 />
        <BibleIntro2 />
        <BibleTimeline />
        <BibleIntro4 />
        <BibleMaps />
        <Biblelogics />
        <BibleKnowledge />

        {/* --- External Bible Links --- */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-semibold text-[#3a2c1f]">
            🔗 இணையத்தில் திருவிவிலியம் வாசிக்க:
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
            {/* பழைய ஏற்பாடு */}
            <a
              href="https://bible.catholicgallery.org/tamil/etb-old-testament/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8b0000] text-white px-6 py-3 rounded-lg hover:bg-[#a81e1e] transition duration-200 shadow-md w-full sm:w-auto text-center"
            >
              📜 பழைய ஏற்பாடு (Old Testament)
            </a>

            {/* புதிய ஏற்பாடு */}
            <a
              href="https://bible.catholicgallery.org/tamil/etb-new-testament/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006400] text-white px-6 py-3 rounded-lg hover:bg-[#228b22] transition duration-200 shadow-md w-full sm:w-auto text-center"
            >
              📖 புதிய ஏற்பாடு (New Testament)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bible;
