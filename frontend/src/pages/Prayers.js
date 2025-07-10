import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, links }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-3 border-l-4 border-yellow-600 pl-3">{title}</h2>
    <ul className="list-disc list-inside pl-4 space-y-2 text-lg">
      {links.map(({ to, label }, index) => (
        <li key={index}>
          <Link to={to} className="text-blue-700 hover:text-yellow-700 transition-colors">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const Prayers = () => {
  return (
    <div className="min-h-screen p-6 bg-[#fefcf5] text-[#3a2c1f] font-['Noto Serif Tamil']">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#6b4226]">📿 ஜெபங்கள்</h1>

      <Section
        title="2.1 கத்தோலிக்க ஜெபங்கள்"
        links={[
          { to: "/prayer/catholic/1", label: "2.1.1 பாரம்பரிய கத்தோலிக்க ஜெபங்கள்" },
          { to: "/prayer/catholic/2", label: "2.1.2 பொதுவான நவநாள் ஜெபங்கள்" },
          { to: "/prayer/catholic/3", label: "2.1.3 அன்னை மரியா செபமாலை" },
          { to: "/prayer/catholic/4", label: "2.1.4 அர்ப்பண செபம்" },
          { to: "/prayer/catholic/5", label: "2.1.5 உதவி வேண்டி செபம்" },
        ]}
      />

      <Section
        title="2.2 பொதுவான ஜெபங்கள்"
        links={[
          { to: "/prayer/general/1", label: "2.2.1 ஆராதனை ஆயிரம்  அன்பிற்காக அழும்போது" },
          { to: "/prayer/general/2", label: "2.2.2 இயேசு என்னும் வல்லமைமிகு நாமத்தின் செபம்" },
          { to: "/prayer/general/3", label: "2.2.3 இயேசுவின் இரத்தத்தால் நம்மை கழுவும் செபம்" },
          { to: "/prayer/general/4", label: "2.2.4 இயேசுவின் கல்லறையில் கண்டெடுக்கப்பட்ட செபம்" },
          { to: "/prayer/general/5", label: "2.2.5 இரக்கத்திற்கான செபம்" },
          { to: "/prayer/general/6", label: "2.2.6 இறை இரக்கத்தின் பக்தி" },
          { to: "/prayer/general/7", label: "2.2.7 கல்லறை ஆண்டவர் செபம்" },
          { to: "/prayer/general/8", label: "2.2.8 திவ்விய நற்கருணை முன் செபம்" },
          { to: "/prayer/general/9", label: "2.2.9 தீயச் சக்திகளை கட்டும் செபம்" },
          { to: "/prayer/general/10", label: "2.2.10 தூய ஆவியார் நவநாள்" },
          { to: "/prayer/general/11", label: "2.2.11 தூய ஆவியின் செபம்" },
          { to: "/prayer/general/12", label: "2.2.12 ஜெயம் தரும் இயேசுவின் இரத்தம்" },
        ]}
      />

      <Section
        title="2.3 மரியன்னை நவநாள் செபம்"
        links={[
          { to: "/prayer/marynovena/1", label: "2.3.1 அடைக்கல அன்னை நவநாள் செபம்" },
          { to: "/prayer/marynovena/2", label: "2.3.2 இடைவிடா சகாய மாதா நவநாள்" },
          { to: "/prayer/marynovena/3", label: "2.3.3 சம்மனசுக்களின் இராக்கினி நவநாள்" },
          { to: "/prayer/marynovena/4", label: "2.3.4 செபமாலைத்தியானம்" },
          { to: "/prayer/marynovena/5", label: "2.3.5 தூய லூர்து அன்னை நவநாள்" },
          { to: "/prayer/marynovena/6", label: "2.3.6 பாத்திமா அன்னை நவநாள்" },
          { to: "/prayer/marynovena/7", label: "2.3.7 மரியன்னைக்கு துதிகள் செலுத்துவோம்" },
          { to: "/prayer/marynovena/8", label: "2.3.8 வியாகுல அன்னை நவநாள்" },
          { to: "/prayer/marynovena/9", label: "2.3.9 வேளாங்கண்ணி அன்னை நவநாள்" },
        ]}
      />

      <Section
        title="2.4 புனிதர்கள் நவநாள் செபம்"
        links={[
          { to: "/prayer/saintnovena/1", label: "2.4.1 அசிசியின் புனித கிளாரம்மாள் நவநாள்" },
          { to: "/prayer/saintnovena/2", label: "2.4.2 அசிசியின் புனித பிரான்சிஸ் நவநாள்" },
          { to: "/prayer/saintnovena/3", label: "2.4.3 குழந்தை இயேசு நவநாள்" },
          { to: "/prayer/saintnovena/4", label: "2.4.4 தந்தை பியோ நவநாள் செபம்" },
          { to: "/prayer/saintnovena/5", label: "2.4.5 தூய அந்தோணியார் நவநாள்" },
          { to: "/prayer/saintnovena/6", label: "2.4.6 தூய யூதா ததேயு நவநாள்" },
          { to: "/prayer/saintnovena/7", label: "2.4.7 புனித அல்போன்சா நவநாள்" },
          { to: "/prayer/saintnovena/8", label: "2.4.8 புனித அன்னாள் நவநாள்" },
          { to: "/prayer/saintnovena/9", label: "2.4.9 புனித அன்னை தெரேசா நவநாள்" },
          { to: "/prayer/saintnovena/10", label: "2.4.10 புனித யோசேப்பு நவநாள்" },
          { to: "/prayer/saintnovena/11", label: "2.4.11 புனித ஜான் மரிய வியான்னி செபம்" },
        ]}
      />

      <Section
        title="2.5 திருப்பலி செபங்கள்"
        links={[
          { to: "/prayer/blessing/1", label: "2.5.1 திருப்பலி செபங்கள்" },
          { to: "/prayer/thiruppali-info", label: "2.5.2 திருப்பலி பற்றி நாம் அறிய வேண்டியவை" },
        ]}
      />

      <Section
        title="2.6 ஆசியுரைகளும் மந்திரிப்புகளும்"
        links={[
          { to: "/prayer/blessings", label: "2.6.1 ஆசியுரைகளும் மந்திரிப்புகளும்" },
        ]}
      />
    </div>
  );
};

export default Prayers;
