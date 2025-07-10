// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bible from './pages/Bible';
import BibleTimeline from './pages/BibleTimeline';
import Prayers from './pages/Prayers';

import CatholicPrayer1 from './pages/prayer/CatholicPrayer1';
import CatholicPrayer2 from './pages/prayer/CatholicPrayer2';
import CatholicPrayer3 from './pages/prayer/CatholicPrayer3';
import CatholicPrayer4 from './pages/prayer/CatholicPrayer4';
import CatholicPrayer5 from './pages/prayer/CatholicPrayer5';

import GeneralPrayer1 from './pages/prayer/GeneralPrayer1';
import GeneralPrayer2 from './pages/prayer/GeneralPrayer2';
import GeneralPrayer3 from './pages/prayer/GeneralPrayer3';
import GeneralPrayer4 from './pages/prayer/GeneralPrayer4';
import GeneralPrayer5 from './pages/prayer/GeneralPrayer5';
import GeneralPrayer6 from './pages/prayer/GeneralPrayer6';
import GeneralPrayer7 from './pages/prayer/GeneralPrayer7';
import GeneralPrayer8 from './pages/prayer/GeneralPrayer8';
import GeneralPrayer9 from './pages/prayer/GeneralPrayer9';
import GeneralPrayer10 from './pages/prayer/GeneralPrayer10';
import GeneralPrayer11 from './pages/prayer/GeneralPrayer11';
import GeneralPrayer12 from './pages/prayer/GeneralPrayer12';

import MaryNovena1 from './pages/prayer/MaryNovena1';
import MaryNovena2 from './pages/prayer/MaryNovena2';
import MaryNovena3 from './pages/prayer/MaryNovena3';
import MaryNovena4 from './pages/prayer/MaryNovena4';
import MaryNovena5 from './pages/prayer/MaryNovena5';
import MaryNovena6 from './pages/prayer/MaryNovena6';
import MaryNovena7 from './pages/prayer/MaryNovena7';
import MaryNovena8 from './pages/prayer/MaryNovena8';
import MaryNovena9 from './pages/prayer/MaryNovena9';

// Section 2.4 - Saint Novenas
import SaintNovena1 from './pages/prayer/SaintNovena1';
import SaintNovena2 from './pages/prayer/SaintNovena2';
import SaintNovena3 from './pages/prayer/SaintNovena3';
import SaintNovena4 from './pages/prayer/SaintNovena4';
import SaintNovena5 from './pages/prayer/SaintNovena5';
import SaintNovena6 from './pages/prayer/SaintNovena6';
import SaintNovena7 from './pages/prayer/SaintNovena7';
import SaintNovena8 from './pages/prayer/SaintNovena8';
import SaintNovena9 from './pages/prayer/SaintNovena9';
import SaintNovena10 from './pages/prayer/SaintNovena10';
import SaintNovena11 from './pages/prayer/SaintNovena11';

import Blessing from './pages/prayer/Blessing';

import ThiruppaliInfoPDF from './pages/prayer/ThiruppaliInfoPDF';
import BlessingsPDF from './pages/prayer/BlessingsPDF';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8f5ee] text-[#3a3329]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bible" element={<Bible />} />
            <Route path="/bible-timeline" element={<BibleTimeline />} />
            <Route path="/prayers" element={<Prayers />} />

            {/* Catholic Prayers Subsections */}
            <Route path="/prayer/catholic/1" element={<CatholicPrayer1 />} />
            <Route path="/prayer/catholic/2" element={<CatholicPrayer2 />} />
            <Route path="/prayer/catholic/3" element={<CatholicPrayer3 />} />
            <Route path="/prayer/catholic/4" element={<CatholicPrayer4 />} />
            <Route path="/prayer/catholic/5" element={<CatholicPrayer5 />} />

          {/* General Prayers Subsections */}
            <Route path="/prayer/general/1" element={<GeneralPrayer1 />} />
            <Route path="/prayer/general/2" element={<GeneralPrayer2 />} />
            <Route path="/prayer/general/3" element={<GeneralPrayer3 />} />
            <Route path="/prayer/general/4" element={<GeneralPrayer4 />} />
            <Route path="/prayer/general/5" element={<GeneralPrayer5 />} />
            <Route path="/prayer/general/6" element={<GeneralPrayer6 />} />
            <Route path="/prayer/general/7" element={<GeneralPrayer7 />} />
            <Route path="/prayer/general/8" element={<GeneralPrayer8 />} />
            <Route path="/prayer/general/9" element={<GeneralPrayer9 />} />
            <Route path="/prayer/general/10" element={<GeneralPrayer10 />} />
            <Route path="/prayer/general/11" element={<GeneralPrayer11 />} />
            <Route path="/prayer/general/12" element={<GeneralPrayer12 />} />

            {/* Section 2.3 */}
            <Route path="/prayer/marynovena/1" element={<MaryNovena1 />} />
            <Route path="/prayer/marynovena/2" element={<MaryNovena2 />} />
            <Route path="/prayer/marynovena/3" element={<MaryNovena3 />} />
            <Route path="/prayer/marynovena/4" element={<MaryNovena4 />} />
            <Route path="/prayer/marynovena/5" element={<MaryNovena5 />} />
            <Route path="/prayer/marynovena/6" element={<MaryNovena6 />} />
            <Route path="/prayer/marynovena/7" element={<MaryNovena7 />} />
            <Route path="/prayer/marynovena/8" element={<MaryNovena8 />} />
            <Route path="/prayer/marynovena/9" element={<MaryNovena9 />} />

            <Route path="/prayer/saintnovena/1" element={<SaintNovena1 />} />
            <Route path="/prayer/saintnovena/2" element={<SaintNovena2 />} />
            <Route path="/prayer/saintnovena/3" element={<SaintNovena3 />} />
            <Route path="/prayer/saintnovena/4" element={<SaintNovena4 />} />
            <Route path="/prayer/saintnovena/5" element={<SaintNovena5 />} />
            <Route path="/prayer/saintnovena/6" element={<SaintNovena6 />} />
            <Route path="/prayer/saintnovena/7" element={<SaintNovena7 />} />
            <Route path="/prayer/saintnovena/8" element={<SaintNovena8 />} />
            <Route path="/prayer/saintnovena/9" element={<SaintNovena9 />} />
            <Route path="/prayer/saintnovena/10" element={<SaintNovena10 />} />
            <Route path="/prayer/saintnovena/11" element={<SaintNovena11 />} />

            <Route path="/prayer/blessing/1" element={<Blessing />} />

            <Route path="/prayer/thiruppali-info" element={<ThiruppaliInfoPDF />} />
            <Route path="/prayer/blessings" element={<BlessingsPDF />} />


            </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
