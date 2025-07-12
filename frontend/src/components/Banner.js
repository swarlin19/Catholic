import React, { useEffect, useState } from 'react';

const bannerImages = [
  { image: "/banner1.jpg", verse: "✝️ கடவுள் அன்பே - 1 யோவான் 4:16" },
  { image: "/banner2.jpg", verse: "✨ தம்மை நேசிக்கிறவர்களுக்கு நன்மை ஏற்படுகிறது - ரோமர் 8:28" },
  { image: "/banner3.jpg", verse: "🕊️ அவருடைய கிருபை என்றும் நிலைத்திருக்கிறது - சங்கீதம் 136:1" },
  { image: "/banner4.jpg", verse: "🌟 என் பலமும் என் கோட்டையும் தேவனே - சங்கீதம் 18:2" },
  { image: "/banner5.jpg", verse: "💖 அன்பு செய்வது கடவுளை தெரிந்துக்கொள்வது - 1 யோவான் 4:7" },
  { image: "/banner6.jpg", verse: "📖 உன் பாதத்திற்கு விளக்காயும் - சங்கீதம் 119:105" },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-[250px] sm:h-[380px] relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${bannerImages[index].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-3xl"></div>

      {/* Verse Text */}
      <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
        <p className="text-sm sm:text-lg font-semibold drop-shadow-lg">
          {bannerImages[index].verse}
        </p>
      </div>
    </div>
  );
};

export default Banner;
