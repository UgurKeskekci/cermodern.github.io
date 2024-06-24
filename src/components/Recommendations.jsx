import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import RecomCard from "./RecomCard";

function Recommendations() {

  const card = [
    {
      img:'https://payload.cargocollective.com/1/15/503103/14211881/ZinesAtBuryArtMuseum_800.jpeg',
      category:'DROP-IN',
      desc:'Ethnological Collections and Asian art',
      title:'TRANSFORMERS',
      details:'Poetry and science with Lea Weber',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/EElO3vPWsAA78J_?format=jpg&name=large',
      category:'LITERATURE',
      desc:'After Nature',
      title:'#Logoskop fourteen',
      details:'Poetry and science with Lea Weber and...',
      date:'27 May to 26. November 2023' 
    },
    {
      img:'https://turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d94f4207-4155-47e3-9d90-3cf1c0e2ace3.jpg',
      category:'DROP-IN SCIENCE',
      desc:'Meet the Scientest',
      title:'What to do about wealth and inequality',
      details:'Meet the scientist with martyna Linartas',
      date:'2 April to 20. November 2023'  
    },
    {
      img:'https://pbs.twimg.com/media/EElO2JXWwAY-yJH?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'25 May to 26. November 2023'  
    },
    {
      img:'https://pbs.twimg.com/media/EElOrSsXkAUSmwM?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      desc:'Revolution The Foe Of An Arrow Wound',
      title:'The resident music collective plays for the exhibition',
      details:'Poetry and science with Lea Weber',
      date:'1 Augst to 26. November 2023' 
    },
    
    

  ];



  const scrollLeft = () => {
    document.getElementById("content3").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("content3").scrollLeft += 400;
  };
  return (
    <>
      <div className="mt-20  relative">
        <div className="text-left ml-24 py-4 text-3xl font-bold">
          RECOMMENDATIONS
        </div>
        <div className="absolute right-0 top-0">
          <button
            onClick={scrollLeft}
            className="p-4 m-2 rounded-full border-2 border-black"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-4 m-2 rounded-full border-2 border-black mr-24"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content3"
          className="carousel p-4  flex items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth relative"
        >
          <div>
            <RecomCard img={card[0].img} category={card[0].category}  desc={card[0].desc}  details={card[0].details} date={card[0].date}/>
          </div>
          <div>
            <RecomCard img={card[1].img} category={card[1].category}  desc={card[1].desc}  details={card[1].details} date={card[1].date}/>
          </div>
          <div>
            <RecomCard img={card[2].img} category={card[2].category}  desc={card[2].desc} details={card[2].details} date={card[2].date}/>
          </div>
          <div>
            <RecomCard img={card[3].img} category={card[3].category}  desc={card[3].desc}  details={card[3].details} date={card[3].date}/>
          </div>
          <div>
            <RecomCard img={card[4].img} category={card[4].category}  desc={card[4].desc}  details={card[4].details} date={card[4].date}/>
          </div>
          <div>
            <RecomCard img={card[5].img} category={card[5].category}  desc={card[5].desc}  details={card[5].details} date={card[5].date}/>
          </div>
          <div>
            <RecomCard img={card[6].img} category={card[6].category}  desc={card[6].desc}  details={card[6].details} date={card[6].date}/>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Recommendations;
