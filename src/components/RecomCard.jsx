import React from 'react'

function RecomCard({img,category, desc, title, details,date}) {


  return (
 
    <div className="card bg-white w-[300px] h-[470px] m-2 rounded-lg shadow-lg font-roboto">
      <div className="">
        <img
          className="w-[300px] h-[300px] object-cover  p-2"
          src={img}
          alt="img"
        />
      </div>
      <div className=" flex flex-col justify-center items-start p-3 relative h-full max-h-[170px]">
        <p className="title  my-1">
        {category}
        </p>
        <p className="category text-sm text-gray-400">
         {desc}
        </p>
        <p className="category text-bold">
         {title}
        </p>
        <p className="category my-1">
        {details}
        </p>
        <div className='flex  '>
       
        </div>

        <p className=" category text-xs font-light underline  absolute  bottom-2">
        {date}
      </p>
         
      </div>
     
    </div>
 
  )
}

export default RecomCard