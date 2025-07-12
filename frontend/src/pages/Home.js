import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { FaSearch } from 'react-icons/fa';

const verses = [
  "✝️ 'கடவுள் அன்பே; அவரிடமிருந்துதான் நாம் அன்பைக் கற்றுக்கொண்டோம்.' — 1 யோவான் 4:16",
  "✝️ 'அவரை நேசிப்பவன், அவருடைய கட்டளைகளைக் கைக்கொள்வான்.' — யோவான் 14:21",
  "✝️ 'நம்பிக்கை இல்லாதவர்களுக்கு எல்லாம் அசாத்தியமாகத் தோன்றும்.' — லூக்கா 1:37",
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 6000); // every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff9f0] text-[#3d1f0f] font-['Noto Serif Tamil']">

      {/* 🔃 Auto Swapping Daily Verse Strip */}
      <div className="bg-[#312d4d] text-yellow-50 py-2 px-4 text-center text-sm sm:text-base transition-all duration-500">
        {verses[currentVerse]}
      </div>

      {/* 🔗 Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-[#8b0000] shadow-md sticky top-0 z-50">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
          கத்தோலிக்க <span className="text-yellow-300">குரல்</span>
        </h1>
        <div className="flex items-center gap-6">
          <FaSearch className="text-white text-lg cursor-pointer hover:text-yellow-200" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white focus:outline-none hover:text-yellow-200"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-[#fff9f0] rounded-xl shadow-xl p-4 w-52 z-50 border border-yellow-100 transition-all duration-300">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <NavLink to="/" label="தாயகம்" onClick={() => setMenuOpen(false)} />
            <NavLink to="/about" label="About Us" onClick={() => setMenuOpen(false)} />
            <NavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
          </ul>
        </div>
      )}

      
      {/* 🎉 Banner Last */}
      <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
        <Banner />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          
        </div>
      </div>
      {/* 📚 Dashboard Tiles First */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 my-10">
        <Feature icon="📖" label="திருவிவிலியம்" to="/bible" bgColor="bg-[#8b0000]" textColor="text-white" />
        <Feature icon="🙏" label="செபங்கள்" to="/prayers" bgColor="bg-[#312d4d]" textColor="text-white" />
        <Feature icon="⛪" label="இறையியல்" to="/sacraments" bgColor="bg-[#d4af37]" textColor="text-[#3d1f0f]" />
        <Feature icon="🎵" label="பாடல்கள்" to="/songs" bgColor="bg-[#8b0000]" textColor="text-white" />
        <Feature icon="📅" label="நாட்காட்டி வழிபாடுகள்" to="/events" bgColor="bg-[#312d4d]" textColor="text-white" />
        <Feature icon="✝️" label="செய்திகள்" to="/commandments" bgColor="bg-[#d4af37]" textColor="text-[#3d1f0f]" />
      </section>

    </div>
  );
};

// 🧩 Reusable NavLink
const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="hover:text-yellow-700 hover:underline"
  >
    {label}
  </Link>
);

// 🧩 Reusable Feature Tile
const Feature = ({ icon, label, to, bgColor, textColor }) => (
  <Link
    to={to}
    className={`${bgColor} ${textColor} rounded-2xl shadow-md p-5 text-center hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center h-full`}
  >
    <div className="text-3xl sm:text-4xl mb-3">{icon}</div>
    <div className="text-base sm:text-lg font-semibold">{label}</div>
  </Link>
);

export default Home;
