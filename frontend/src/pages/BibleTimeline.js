import React from 'react';
import { useNavigate } from 'react-router-dom';

const BibleTimeline = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fffdf5] text-[#3a2c1f] font-['Noto Serif Tamil'] px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">📜விவிலிய நூல்களின் கால அட்டவணை</h1>

      {/* 🌿 Old Testament Paragraph */}
      <div className="max-w-5xl mx-auto leading-loose text-justify text-[17px] mb-10 whitespace-pre-line">
        {`விவிலிய நூல்களின் கால அட்டவணை`}
      </div>

      {/* 📘 Table - Old Testament */}
      <div className="overflow-x-auto max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold mb-3">📘 பழைய ஏற்பாடு (Old Testament)</h2>
        <table className="w-full border border-gray-300 text-sm bg-white shadow-md rounded">
          <thead className="bg-[#e9e0d0] text-[#3a2c1f]">
            <tr>
              <th className="border px-3 py-2">ஆண்டு (கி.மு)</th>
              <th className="border px-3 py-2">நிகழ்வு / காலம்</th>
              <th className="border px-3 py-2">பழைய ஏற்பாட்டு நூல்</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr><td className="border px-2 py-1">கி.மு. 2000 - 1750 (ஏறக்குறைய)</td>
            <td className="border px-2 py-1">(ஏறக்குறைய) 1900; ஆபிரகாம் கானான் நாட்டுக்கு வருதல். ஈசாக்கு, யாக்கோபு (இஸ்ரயேல்), பன்னிரு குலத்தலைவர்கள். யோசேப்பு எகிப்து மன்னரின் ஆலோசகர் ஆகுதல்.</td>
            <td className="border px-2 py-1">தொடக்கநூல், அதிகாரங்கள் 12-50("யாவே" மரபுகள்)</td></tr>
            <tr><td className="border px-2 py-1">கி.மு.1700 - 1250(ஏறக்குறைய)</td>
            <td className="border px-2 py-1">யாக்கோபின் வழிமரபினர் எகிப்தில் அடிமைகளாகுதல்</td><td className="border px-2 py-1"> </td></tr>
            <tr><td className="border px-2 py-1">கி.மு. (ஏ) 1250</td>
            <td className="border px-2 py-1">விடுதலைப் பயண நிகழ்வு; எகிப்திலிருந்து இஸ்ரயேலரை மோசே அழைத்துச் செல்லல்.பாலைநிலப் பயணம். மோசே சீனாய் மலையில் திருச்சட்டம் பெறல்.</td>
            <td className="border px-2 py-1">விடுதலைப் பயணம் நூல்("யாவே" மரபுகள்);</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 1200 - 10202</td>
            <td className="border px-2 py-1">நீதித்தலைவர்கள் காலம்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 1020 - 922</td>
            <td className="border px-2 py-1">பொற்காலம்; சவுல் (ஏ) 1020-1000; தாவீது (ஏ) 1000-962; சாலமோன் (ஏ) 962-922). ஒருங்கிணைந்த இஸ்ரயேல் அரசு.</td>
            <td className="border px-2 py-1">"எலோகிம்" மரபு உருவாதல்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 922 -721</td>
            <td className="border px-2 py-1">நாடு பிளவுபடல்; வடக்கே இஸ்ரயேல், தெற்கே யூதா பல அரசர்களால் ஆளப்படல்.</td>
            <td className="border px-2 py-1">2 அரசர்கள், 2 குறிப்பேடு, எரேமியா 39-44; 52. (ஐந்நூலில் "எலோகிம்", "இணைச்சட்டம்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 722</td>
            <td className="border px-2 py-1">வடக்கு அரசில் சமாரியா வீழ்ச்சியடைதல் நாடு கடத்தப்படும் முன் வாழ்ந்த இறைவாக்கினர்கள்	"யாவே" மரபும் "எலோகிம்" மரபும் இணைதல். "இணைச்சட்டம்" மரபு தோன்றுதல்.செப்பணியா, நாகூம், அபக்கூக்கு, ஏரோமியா</td>
            <td className="border px-2 py-1">"இணைச்சட்டம்" மரபு தோன்றுதல்.செப்பணியா, நாகூம், அபக்கூக்கு, ஏரோமியா</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 587</td>
            <td className="border px-2 py-1">பாபிலோனியாவுக்கு யூதர்கள் நாடுகடத்தப்படல்</td>
            <td className="border px-2 py-1">"குருக்கள்" மரபு உருவாதல் திருப்பாடல்கள் 137. (ஐந்நூலில் "குருக்கள்" பண்புடைய பகுதிகள்) இணைச்சட்டம், யோசுவா, நீதித் தலைவர்கள், 1,2 சாமுவேல், 1,2 அரசர்கள்.எசேக்கியேல்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 539</td>
            <td className="border px-2 py-1">பாரசீக மன்னர் சைரசு யூதர்கள் தாய்நாடு திரும்ப அனுமதி அளித்தல்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 537</td>
            <td className="border px-2 py-1">எருசலேமில் புதிய கோவிலுக்கு அடித்தளம் இடுதல்</td>
            <td className="border px-2 py-1">மேலே தரப்பட்ட நான்கு மரபுகளும் இணைதல். எசாயா(3), ஆகாய், செக்கரியா, யோபு, மலாக்கி, ஒபதியா</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 539 - 333</td>
            <td className="border px-2 py-1">பாலஸ்தீன நாட்டில் பாரசீக ஆட்சிக் காலம்.</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 458 - 390 <br/>கி.மு. 445 - 420</td>
            <td className="border px-2 py-1">எஸ்ரா நெகேமியா ஆகியோர் கொணர்ந்த சீர்திருத்தம்</td>
            <td className="border px-2 py-1">யோவேல், யோனா, நீதிமொழிகள் திருப்பாடல்கள். 1,2 குறிப்பேடுகள் எஸ்ரா, நெகேமியா நூல்கள்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 333 - 63<br/> கி.மு. 333 - 300<br/> கி.மு. 300 - 200<br/> கி.மு. 200 -175</td>
            <td className="border px-2 py-1">பாலஸ்தீன நாட்டில் கிரேக்க ஆட்சி.<br/>பெரிய அலக்சாந்தர் காலம்<br/>தாலமியர் ஆட்சி<br/>செலூக்கர் ஆட்சி</td>
            <td className="border px-2 py-1">சபை உரையாளர், தோபித்து சீராக், எஸ்தர், தானியேல், யூதித்து, பாரூயஅp;க்கு</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 175 -135</td>
            <td className="border px-2 py-1">கிரேக்க ஆட்சிக்கு எதிராக மக்கபேயர் கிளர்ச்சி</td>
            <td className="border px-2 py-1">சாலமோனின் ஞானம்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 134 - 63</td>
            <td className="border px-2 py-1">அஸ்மோனியர் (மக்கபேயர்) பாலஸ்தீனாவை ஆட்சிபுரிதல்</td>
            <td className="border px-2 py-1">1,2 மக்கபேயர்</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 63<br/> கி.மு. 63 - 4</td>
            <td className="border px-2 py-1">உரோமைத் தளபதி பொம்பேயி எருசலேமைக் கைப்பற்றல்.<br/>பாலஸ்தீனாவில் உரோமை ஆட்சி.</td>
            <td className="border px-2 py-1"></td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 37 - 4</td>
            <td className="border px-2 py-1">உரோமையரால் நியமிக்கப்பட்ட பெரிய ஏரோது பாலஸ்தீனாவில் ஆட்சி.</td></tr>
          </tbody>
        </table>
      </div>
      <center><table className="width-25 border border-gray-300 text-sm bg-white shadow-md rounded">
          <thead className="bg-[#e9e0d0] text-[#3a2c1f]">
            <tr>
              <th className="border px-3 py-2">பழைய ஏற்பாட்டின் தோற்றம்:</th>
            </tr>
          </thead>
          <tbody className="text-gray-800"></tbody>
          <tbody className="text-gray-800">
            <tr><td className="border px-2 py-1">வாய்மொழி மரபு; கி.மு. 2000 - கி.பி. 90</td></tr>
            <tr><td className="border px-2 py-1">எழுத்து அமைப்பு; கி.மு. 950 - கி.பி. 90</td></tr>
            <tr><td className="border px-2 py-1">எழுத்து அமைப்பு; கி.மு. 950 - கி.பி. 90</td></tr>
          </tbody>
     </table></center><br/>
     <center><div className="max-w-5xl mx-auto leading-loose text-justify text-[17px] mb-10 whitespace-pre-line">
        {`(பழைய ஏற்பாட்டு நூல்கள் தோன்றிய வரலாறில் மேலும் விபரங்கள் அறியலாம்)`}
      </div></center>

      {/* 📕 Table - New Testament */}
      <div className="overflow-x-auto max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold mb-3">📕 புதிய ஏற்பாடு (New Testament)</h2>
        <table className="w-full border border-gray-300 text-sm bg-white shadow-md rounded">
          <thead className="bg-[#e2dbf1] text-[#3a2c1f]">
            <tr>
              <th className="border px-3 py-2">ஆண்டு</th>
              <th className="border px-3 py-2">நிகழ்வு / காலம்</th>
              <th className="border px-3 py-2">புதிய ஏற்பாட்டு நூல்</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr><td className="border px-2 py-1">கி.மு. 6-4</td><td className="border px-2 py-1">இயேசு பிறப்பு (பெரிய ஏரோது இறப்பதற்கு முன்)</td><td className="border px-2 py-1">–</td></tr>
            <tr><td className="border px-2 py-1">கி.மு. 6 - கி.பி. 34<br/>கி.மு. 4 - கி.பி. 6<br/>கி.மு. 4 - கி.பி. 39<br/>கி.மு. 4 - கி.பி. 39</td><td className="border px-2 py-1">பெரிய ஏரோதின் மகன்கள் ஆட்சி; அர்க்கெலா ஏரோது அந்திப்பா பிலிப்பு</td><td className="border px-2 py-1">–</td></tr>
            <tr><td className="border px-2 py-1">கி.பி. (ஏ) 27 -30<br/>(ஏ) 27<br/>(ஏ) 30</td><td className="border px-2 py-1">இயேசுவின் திருமுழுக்கு;<br/>இயேசுவின் திருப்பணிக்காலம்;<br/>திருப்பணித் தொடக்கமும் இயேசுவின் இறப்பும் உயிர்த்தெழுதலும்</td><td className="border px-2 py-1">–</td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 30 - 63</td><td className="border px-2 py-1">திருத்தூதர் பவுலின் பணிக்காலம்</td><td className="border px-2 py-1">ஐயத்திற்கு இடமின்றி பவுல் எழுதிய திருமுகங்கள் (உரோமையர், 1 கொரிந்தியர், 2 கொரிந்தியர், கலாத்தியர், பிலிப்பியர், 1 தெசலோனிக்கர், பிலமோன்)</td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 37 - 44</td><td className="border px-2 py-1">முதலாம் ஏரோது அகிரிப்பா</td><td className="border px-2 py-1"></td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 66 - 70</td><td className="border px-2 py-1">உரோமை ஆட்சிக்கு எதிராக யூதர்களின் முதல் கிளர்ச்சி</td><td className="border px-2 py-1"> </td>–</tr>
            <tr><td className="border px-2 py-1">கி.பி. 70</td><td className="border px-2 py-1">உரோமையர் எருசலேமை முற்றுகையிட்டு அழித்தல்</td><td className="border px-2 py-1"> </td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 70 - 100</td><td className="border px-2 py-1">புதிய ஏற்பாட்டின் பெரும்பான்மையான நூல்கள் எழுத்துவடிவம் பெற்ற காலம்</td><td className="border px-2 py-1">மாற்கு, மத்தேயு, லூக்கா, திருத்தூதர் பணிகள், எபேசியர், கொலோசியர், 2 தெசலோனிக்கர், 1 திமொத்தேயு, 2 திமொத்தேயு, தீத்து, எபிரேயர், யாக்போபு, 1 பேதுரு, 1 யோவான், 2 யோவான், 3 யோவான், யூதா, திருவெளிப்பாடு</td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 71 - 132</td><td className="border px-2 py-1">புதிய ஏற்பாட்டின் பெரும்பான்மையான நூல்கள் எழுத்துவடிவம் பெற்ற காலம்</td><td className="border px-2 py-1">2 பேதுரு</td></tr>
            <tr><td className="border px-2 py-1">கி.பி. 132 - 135</td><td className="border px-2 py-1">யூதர்கள் உரோமையருக்கு எதிராக நடத்திய இரண்டாம் கிளர்ச்சி</td><td className="border px-2 py-1"></td></tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-5xl mx-auto leading-loose text-justify text-[17px] mb-10 whitespace-pre-line">
        {`(விவிலிய நூல்களின் கால அட்டவணையைத் தொகுத்து வழங்கியவர் கோட்டாறு மறைமாவட்டத்தைச் சார்ந்த அருள்திரு பவுல் லியோன் வறுவேல் அவர்கள்.தற்போது அமேரிக்காவில் உள்ள பஃபலோ மறைமாவட்டத்தில் சேர்ந்து, கிறிஸ்தரசர் குருத்துவக் கல்லூரியில் இறைஇயல் பேராசிரியராகப் பணியாற்றி வருகின்றார். அவர்களுக்கு எம் உளங்கனிந்த நன்றி.)`}
      </div>


      <p className="text-center text-sm text-gray-600 mt-8">
        © தொகுப்பு: அருள்திரு பவுல் லியோன் வறுவேல் (பஃபலோ மறைமாவட்டம்)
      </p>
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

export default BibleTimeline;
