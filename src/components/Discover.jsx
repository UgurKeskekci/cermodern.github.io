import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Card from "../components/Card.jsx";

function Discover() {
  const scrollLeft = () => {
    document.getElementById("content2").scrollLeft -= 800;
  };

  const scrollRight = () => {
    document.getElementById("content2").scrollLeft += 800;
  };

  const card = [
    {
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/3e/8d/65/national-museum-of-art.jpg?w=1200&h=-1&s=1',
      category:'EXHIBITION',
      content:'Revolution The Foe Of An Arrow Wound',
     
    },
    {
      img:'https://pbs.twimg.com/media/EElOy68W4AA0gTR?format=jpg&name=large',
      category:'EXHIBITION',
      content:'IN FINITE Living with...',
      
    },
    {
      img:'https://cdnuploads.aa.com.tr/uploads/Contents/2021/05/22/thumbs_b_c_986aff55bfdf0dfc9f575fbc16559b2d.jpg?v=100037',
      category:'EXHIBITION',
      content:'Ethnological Collections and Asian Art',
     
    },
    {
      img:'https://pbs.twimg.com/media/EElO2JXWwAY-yJH?format=jpg&name=large',
      category:'EXHIBITION',
      content:'BERLIN GLOBAL',
      
    },
    {
      img:'https://pbs.twimg.com/media/EElOrSsXkAUSmwM?format=jpg&name=large',
      category:'GALLERY',
      content:'After Nature',
      
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      content:'Revolution The Foe Of An Arrow Wound',
      
    },
    

  ];


  return (
    <>
      <br />
      <br />
      <hr />
      <div className="mt-20  relative">
        <div className="text-left ml-24 py-4 text-3xl font-bold">
          DISCOVER MORE
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
          id="content2"
          className="carousel p-4  flex items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth relative"
        >
          
        
       
          <div>
            <Card img={card[0].img} category={card[0].category}  content={card[0].content} findoutmore={"FIND OUT MORE..."} />
            
          </div>
          <div>
            <Card img={card[1].img} category={card[1].category}  content={card[1].content} findoutmore={"FIND OUT MORE..."} />
            
          </div>
          <div>
            <Card img={card[2].img} category={card[2].category}  content={card[2].content} findoutmore={"FIND OUT MORE..."} />
            
          </div>
          <div>
            <Card img={card[3].img} category={card[3].category}  content={card[3].content} findoutmore={"FIND OUT MORE..."} />
            
          </div>
          <div>
            <Card img={card[4].img} category={card[4].category}  content={card[4].content} findoutmore={"FIND OUT MORE..."} />
            
          </div>
         
          
            
        
        </div>
      </div>
    </>
  );
}

export default Discover;
