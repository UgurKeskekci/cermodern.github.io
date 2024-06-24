import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Gallery() {
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

  {
    /** 
    <div className='h-full'>
    <div className='w-full h-[660px] flex'>
      <div >
      <img className='w-[10000px] h-[660px] object-cover' src='https://media.nomadicmatt.com/historical-acropolis.jpg' alt='img' />
      </div>
        
      <div className='absolute w-full h-[950px] flex justify-center items-center '>
        <div className='h-[180px]  justify-center items-center bg-gray-100'>
        <p className='  w-full mt-10 ml-6 justify-center items-center text-2xl text-black font-bold'>A PLACE FOR CULTURE</p>
       
        <p className='  w-[550px] mt-2  ml-6 justify-center items-center text-black text-sm'> Long historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place description</p>
    
        </div>
       
      </div>
       
        
       
      </div>
 </div>

 */
  }

  return (
    <div className="h-[750px] 2xl:h-[900px] w-full m-auto py-16 px-4 relative group ">
      
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-600 ease-in-out "
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute  h-[150px] top-[65%] left-[32%] ">
        <div className="h-[100px]  justify-center items-center bg-gray-100 rounded-xl opacity-70">
          <p className="  mt-4 w-full  ml-6 justify-center items-center text-2xl text-black font-bold">
            {slides[currentIndex].text}
          </p>
          <p className="  w-[550px] ml-6 justify-center items-center text-black text-sm">
            {" "}
            {slides[currentIndex].desc}
          </p>
        </div>

      </div>

    </div>

  );
}

export default Gallery;
