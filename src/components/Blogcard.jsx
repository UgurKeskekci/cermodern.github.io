
import React from 'react'

function Blogcard({img,title, desc}) {



  return (
    <div className="mt-32 2xl:px-96 px-56 grid grid-rows  gap-4">
        
          <img
            className="h-[300px] w-[1000px] object-cover "
            src={img}
            alt="photo"
          />
          <h1 className="absolute ml-[40px] mt-[100px] flex justify-center items-center text-white font-bold">
            {title}
          </h1>
          <h1 className="absolute ml-[40px] mt-[140px] flex justify-center items-center text-white font-bold">
             {desc}
          </h1>
          <div className="absolute ml-[40px] mt-[200px] flex justify-center items-center text-black font-bold">
            <button className=" flex justify-center text-black font-bold border bg-white w-48 h-12">
              <span className="mt-2">FIND OUT MORE</span>
            </button>
          </div>
       
    </div>



  )
}

export default Blogcard