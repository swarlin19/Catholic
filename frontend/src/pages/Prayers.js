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
        title="கத்தோலிக்க ஜெபங்கள்"
        links={[
          { to: "/prayer/catholic/1", label: "பாரம்பரிய கத்தோலிக்க ஜெபங்கள்" },
          { to: "/prayer/catholic/2", label: "பொதுவான நவநாள் ஜெபங்கள்" },
          { to: "/prayer/catholic/3", label: "அன்னை மரியா செபமாலை" },
          { to: "/prayer/catholic/4", label: "அர்ப்பண செபம்" },
          { to: "/prayer/catholic/5", label: "உதவி வேண்டி செபம்" },
        ]}
      />

      <Section
        title="பொதுவான ஜெபங்கள்"
        links={[
          { to: "/prayer/general/1", label: "ஆராதனை ஆயிரம்  அன்பிற்காக அழும்போது" },
          { to: "/prayer/general/2", label: "இயேசு என்னும் வல்லமைமிகு நாமத்தின் செபம்" },
          { to: "/prayer/general/3", label: "இயேசுவின் இரத்தத்தால் நம்மை கழுவும் செபம்" },
          { to: "/prayer/general/4", label: "இயேசுவின் கல்லறையில் கண்டெடுக்கப்பட்ட செபம்" },
          { to: "/prayer/general/5", label: "இரக்கத்திற்கான செபம்" },
          { to: "/prayer/general/6", label: "இறை இரக்கத்தின் பக்தி" },
          { to: "/prayer/general/7", label: "கல்லறை ஆண்டவர் செபம்" },
          { to: "/prayer/general/8", label: "திவ்விய நற்கருணை முன் செபம்" },
          { to: "/prayer/general/9", label: "தீயச் சக்திகளை கட்டும் செபம்" },
          { to: "/prayer/general/10", label: "தூய ஆவியார் நவநாள்" },
          { to: "/prayer/general/11", label: "தூய ஆவியின் செபம்" },
          { to: "/prayer/general/12", label: "ஜெயம் தரும் இயேசுவின் இரத்தம்" },
        ]}
      />

      <Section
        title="மரியன்னை நவநாள் செபம்"
        links={[
          { to: "/prayer/marynovena/1", label: "அடைக்கல அன்னை நவநாள் செபம்" },
          { to: "/prayer/marynovena/2", label: "இடைவிடா சகாய மாதா நவநாள்" },
          { to: "/prayer/marynovena/3", label: "சம்மனசுக்களின் இராக்கினி நவநாள்" },
          { to: "/prayer/marynovena/4", label: "செபமாலைத்தியானம்" },
          { to: "/prayer/marynovena/5", label: "தூய லூர்து அன்னை நவநாள்" },
          { to: "/prayer/marynovena/6", label: "பாத்திமா அன்னை நவநாள்" },
          { to: "/prayer/marynovena/7", label: "மரியன்னைக்கு துதிகள் செலுத்துவோம்" },
          { to: "/prayer/marynovena/8", label: "வியாகுல அன்னை நவநாள்" },
          { to: "/prayer/marynovena/9", label: "வேளாங்கண்ணி அன்னை நவநாள்" },
        ]}
      />

      <Section
        title="புனிதர்கள் நவநாள் செபம்"
        links={[
          { to: "/prayer/saintnovena/1", label: "அசிசியின் புனித கிளாரம்மாள் நவநாள்" },
          { to: "/prayer/saintnovena/2", label: "அசிசியின் புனித பிரான்சிஸ் நவநாள்" },
          { to: "/prayer/saintnovena/3", label: "குழந்தை இயேசு நவநாள்" },
          { to: "/prayer/saintnovena/4", label: "தந்தை பியோ நவநாள் செபம்" },
          { to: "/prayer/saintnovena/5", label: "தூய அந்தோணியார் நவநாள்" },
          { to: "/prayer/saintnovena/6", label: "தூய யூதா ததேயு நவநாள்" },
          { to: "/prayer/saintnovena/7", label: "புனித அல்போன்சா நவநாள்" },
          { to: "/prayer/saintnovena/8", label: "புனித அன்னாள் நவநாள்" },
          { to: "/prayer/saintnovena/9", label: "புனித அன்னை தெரேசா நவநாள்" },
          { to: "/prayer/saintnovena/10", label: "புனித யோசேப்பு நவநாள்" },
          { to: "/prayer/saintnovena/11", label: "புனித ஜான் மரிய வியான்னி செபம்" },
        ]}
      />

      <Section
        title="திருப்பலி செபங்கள்"
        links={[
          { to: "/prayer/blessing/1", label: "திருப்பலி செபங்கள்" },
          { to: "/prayer/thiruppali-info", label: "திருப்பலி பற்றி நாம் அறிய வேண்டியவை" },
        ]}
      />

      <Section
        title="ஆசியுரைகளும் மந்திரிப்புகளும்"
        links={[
          { to: "/prayer/blessings", label: "ஆசியுரைகளும் மந்திரிப்புகளும்" },
        ]}
      />
    </div>
  );
};

export default Prayers;
