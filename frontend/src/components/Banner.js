import React, { useEffect, useState } from 'react';

const bannerImages = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg", "/banner4.jpg","/banner5.jpg", "/banner6.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <div
  className="w-full h-[380px] relative transition-all duration-1000"
  style={{
    backgroundImage: `url(${bannerImages[index]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottomLeftRadius: '2rem',
    borderBottomRightRadius: '2rem',
  }}
>

      
    </div>
  );
};

export default Banner;
