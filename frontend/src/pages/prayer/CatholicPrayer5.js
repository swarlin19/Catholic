import React from 'react';
import { Link } from 'react-router-dom';

const CatholicPrayer5 = () => {
  return (
    <div className="bg-[#fefcf5] text-[#3a2c1f] p-6 md:p-10 leading-loose tracking-wide">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          2.1.5 உதவி வேண்டி செபம்.
        </h1>

        <div className="max-w-5xl mx-auto whitespace-pre-line text-justify">
{`உதவி வேண்டி செபம்.

என் ஒவ்வொரு தேவையின் போதும், தாழ்மையுடனும், நம்பிக்கையுடனும் உம்மிடம் வர, இயேசுவே எனக்கு உதவியருளும்.

என் சந்தேகங்களில், கலக்கங்களில், சோதனைகளில், இயேசுவே எனக்கு உதவியருளும்.

மற்றவர் என்னை ஏமாற்றும்போது உம்மை மட்டும் நம்பியிருக்கும் எனக்கு இயேசுவே உதவியருளும்.

நீரே என் ஆண்டவர், மீட்பர் என நான் வரும்போது இயேசுவே எனக்கு உதவியருளும்.

என் வாழ்வில் எல்லா முயற்சிகளுமே தோல்விகளாக மாறும்போது இயேசுவே எனக்கு உதவியருளும்.

நான் பொறுமையிழந்து என் சிலுவைகள் துன்பத்தின் மேல் துன்பத்தை தரும்போது இயேசுவே எனக்கு உதவியருளும்.

நான் தனிமையிலும், வருத்தத்திலும், வேதனையிலும் உழலும்போது இயேசுவே எனக்கு உதவியருளும்.


எப்போதும் எனது பலவீனங்கள் தோல்விகளின்போது இயேசுவே எனக்கு உதவியருளும்.


ஆமென்.


`}
      </div>

        <div className="mt-10 text-center">
          <Link
            to="/prayers"
            className="inline-block px-6 py-2 bg-[#8b0000] text-white font-semibold rounded hover:bg-[#a30000] transition"
          >
            🔙 முந்தைய பக்கம்
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatholicPrayer5;
