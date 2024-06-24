import React from "react";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function EventGallerySlider() {
  const slides = [
    {
      url: "https://www.artgalleryofhamilton.com/wp-content/uploads/2022/07/Morrisseau-Collection-Update-3-768x576.png",
      text: "BERLINS NEWEST LANDMARK",
      desc: "Discover the new wievs around the forum",
    },
    {
      url: "https://www.befunky.com/images/prismic/8378f663-d028-48f1-87de-fc5f872aa948_hero-photo-to-art-5.jpg?auto=avif,webp&format=jpg&width=896",
      text: "NEWEST FORUM",
      desc: "Take a break at the shore the spree",
    },
    {
      url: "https://www.befunky.com/images/prismic/93e13619-bc67-4409-b698-a0df6dab4ae9_hero-photo-to-art-1.jpg?auto=avif,webp&format=jpg&width=896",
      text: "LANDMARK",
      desc: "Once the site of courtly receptions, it will host a variety of events in the future",
    },
    {
      url: "https://www.artgalleryofhamilton.com/wp-content/uploads/2022/07/Morrisseau-Collection-Update-3-768x576.png",
      text: "ALONG THE FORUM ",
      desc: "Discover the new wievs around the forum",
    },
    {
      url: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_562_wide/s3/2022-04/SC437905_Homepage_Banner_16x9_V1.jpg?itok=ELjoj03G",
      text: "PASSAGE",
      desc: "The passage acts as brigde the Lustgarten and Schlossplatz and also between...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (

    
  

    <div className="pb-36 bg-gray-200 max-h-[550px]">
    <div className="h-[450px] 2xl:h-[450px] w-full  relative group pb-12 ">
     

     <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[550px] h-[450px] bg-center bg-cover duration-500 ml-[600px] "
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

    
    </div>

    <div className="text-center mt-4">
        <p className="text-l font-roboto">{slides[currentIndex].text}</p>
        
        <p className="text-gray-600 text-sm">    {slides[currentIndex].desc}</p>
       

    </div>
  
    </div>

  
  );
}

export default EventGallerySlider;
