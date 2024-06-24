import React from 'react'
import Card from './Card'

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Highlights() {

 

  const card = [
    {
      img:'https://fristartmuseum.org/wp-content/uploads/Otobong-gallery-shots-3.jpg',
      category:'EXHIBITION',
      content:'Revolution The Foe Of An Arrow Wound',
      description:'The resident music collective plays for the exhibition',
      date:'1 April to 26. November 2023' 
    },
    {
      img:'https://pbs.twimg.com/media/EElOy68W4AA0gTR?format=jpg&name=large',
      category:'EXHIBITION',
      content:'IN FINITE Living with...',
      description:'',
      date:'1 August to 26.' 
    },
    {
      img:'https://cdnuploads.aa.com.tr/uploads/Contents/2021/05/22/thumbs_b_c_986aff55bfdf0dfc9f575fbc16559b2d.jpg?v=100037',
      category:'EXHIBITION, Performance',
      content:'Ethnological Collections and Asian Art',
      description:'New presentation of the collections',
      date:'permanent' 
    },
    {
      img:'https://pbs.twimg.com/media/EElO2JXWwAY-yJH?format=jpg&name=large',
      category:'EXHIBITION',
      content:'BERLIN GLOBAL',
      description:'Experience how the city and its people are connected with the world',
      date:'permanent' 
    },
    {
      img:'https://pbs.twimg.com/media/EElOrSsXkAUSmwM?format=jpg&name=large',
      category:'GALLERY',
      content:'After Nature',
      description:'The Humboldt Lab inaugural exhibition',
      date:'1 April ' 
    },
    {
      img:'https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large',
      category:'EXHIBITION',
      content:'Revolution The Foe Of An Arrow Wound',
      description:'The resident music collective plays for the exhibition',
      date:'1 April to 26. November 2023' 
    },
    

  ];
  

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };

  return (
   <>
        <div className='mt-16'>
          {/** ----------BUTTONS------------ */}
        <div className='ml-24 '>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> Guided Tours</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> Children & Families</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md '> Visitor Groups</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> K-13 School Groups</button>
       
      
        </div>
       
        <div className="mt-20  relative ">
        <div className="text-left ml-24 py-4 text-3xl font-bold font-roboto">
          HIGHLIGHTS
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
          id="content"
          className="carousel flex  justify-start overflow-x-auto scrollbar-hide scroll-smooth relative"
        >
          
          <div>
            <Card img={card[0].img} category={card[0].category}  content={card[0].content} description={card[0].description} date={card[0].date} />
          </div>

          <div>
          <Card img={card[1].img} category={card[1].category}  content={card[1].content} description={card[1].description} date={card[1].date} />
          </div>
          <div>
          <Card img={card[2].img} category={card[2].category}  content={card[2].content} description={card[2].description} date={card[2].date} />
          </div>
          <div>
          <Card img={card[3].img} category={card[3].category}  content={card[3].content} description={card[3].description} date={card[3].date} />
          </div>
          <div>
          <Card img={card[4].img} category={card[4].category}  content={card[4].content} description={card[4].description} date={card[4].date} />
          </div>
          <div>
          <Card img={card[5].img} category={card[5].category}  content={card[5].content} description={card[5].description} date={card[5].date} />
          </div>
         
         


          
        </div>
      </div>
        </div>
   </>
  )
}

export default Highlights