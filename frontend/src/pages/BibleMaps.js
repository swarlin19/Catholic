import React from 'react';
import { useNavigate } from 'react-router-dom';
const maps = [
  {
    title: '🌍 உலகப்படத்தில் விவிலிய நாடுகள்',
    src: '/images/world.png',
    alt: 'World Map - Bible Regions'
  },
  {
    title: '📜 பழைய ஏற்பாடு - முக்கிய ஊர்கள்',
    src: '/images/oldtestimony.png',
    alt: 'Old Testament Key Locations'
  },
  {
    title: '🚶 விடுதலைப் பயணத்தின் வரைபடம்',
    src: '/images/travel.png',
    alt: 'Exodus Journey Map'
  },
  {
    title: '🧭 பவுலின் முதல் தூதுரைப் பயணம்',
    src: '/images/paultravel1.png',
    alt: 'Paul First Journey'
  },
  {
    title: '🧭 பவுலின் இரண்டாம் தூதுரைப் பயணம்',
    src: '/images/paultravel2.png',
    alt: 'Paul Second Journey'
  },
  {
    title: '🧭 பவுலின் மூன்றாம் தூதுரைப் பயணம்',
    src: '/images/paultravel3.png',
    alt: 'Paul Third Journey'
  }
];

const BibleMaps = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fffdf5] text-[#3a2c1f] p-6 font-['Noto Serif Tamil'] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">🗺️ உலகப் படத்தில் விவிலிய நாடுகள்</h1>

      <div className="grid gap-10 max-w-6xl mx-auto">
        {maps.map((map, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">{map.title}</h2>
            <img 
  src={map.src} 
  alt={map.alt} 
  className="max-h-[400px] w-auto mx-auto rounded object-contain shadow border"
/>

          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-600">© அனைத்து வரைபடங்களும் கல்விக்காக பயன்படுத்தப்படுகிறது.</p>
      {/* Back Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          ← பின்செல் (Back)
        </button>
      </div>

    </div>

    
  );
};

export default BibleMaps;