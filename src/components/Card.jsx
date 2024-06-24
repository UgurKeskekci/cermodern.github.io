import React from "react";

function Card({img,category,content,description,date,findoutmore}) {
  return (
    <>
    
      <div className="shadow-md my-3 relative ml-6 min-w-[350px] hover:w-[340px] hover:h-[540px] font-roboto">
        

       
        <img
          src={img}
          className="object-cover h-[550px] w-[350px] hover:w-[340px] hover:h-[540px]"
        />

        <div className="absolute bottom-32 left-12 right-12 px-4 py-2 text-center text-2xl ">
          <h3 className="text-white ">{category}</h3>
          <p className="mt-2  text-white font-bold">
          {content}
          </p>
        </div>
        <div className=" justify-center left-12  right-12 bottom-8 text-white absolute text- xl font-bold">
          <div className="text-center mr-3 border-r pr-3">
           
            <h1>{description}</h1>
  
            <h1>{date}</h1>
            <h1>{findoutmore}</h1>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Card;
