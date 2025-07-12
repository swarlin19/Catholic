import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaHome, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#8b0000] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 text-lg sm:text-xl font-bold">
          <FaHome className="text-xl" />
          <span>CatholicVoiceTamil.com</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base">
          <NavItem to="/" icon={<FaHome />} label="தாயகம்" />
          <NavItem to="/bible" icon={<FaBook />} label="விவிலியம்" />
          <NavItem to="/prayers" icon={<FaBook />} label="ஜெபங்கள்" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 text-base text-white">
            <NavItem to="/" label="தாயகம்" onClick={() => setMenuOpen(false)} />
            <NavItem to="/bible" label="விவிலியம்" onClick={() => setMenuOpen(false)} />
            <NavItem to="/prayers" label="ஜெபங்கள்" onClick={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

// Reusable NavItem component
const NavItem = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
  >
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </Link>
);

export default Navbar;
