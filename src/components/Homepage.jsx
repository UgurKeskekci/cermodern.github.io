import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import {BsArrowDown} from 'react-icons/bs'
import { Routes,Link } from 'react-router-dom'
import Event from '../pages/Event'

function Introduction() {
  return (
   <> 
    <div className='h-full'>
      <div className='w-full h-[650px] flex 2xl:h-[750px]'>
        <div >
        <video className='w-[10000px] h-[570px] 2xl:h-[700px] object-cover' src={videoBg} autoPlay loop muted/>
        </div>
          
        
          <p className='absolute w-full h-[300px] 2xl:h-[600px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>A PLACE FOR CULTURE</p>
          <p className='absolute w-full h-[420px] 2xl:h-[750px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>AND SCIENCE, FOR</p>
          <p className='absolute w-full h-[530px] 2xl:h-[900px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>EXCHANGE AND DEBATE</p>
          
          <div className='absolute w-full  flex justify-center items-center text-white animate-bounce bottom-[165px] h-12'> <BsArrowDown size={30}/></div>
          <div className='absolute w-full h-[750px] 2xl:h-[1100px] flex justify-center items-center '>
          
          <Link to="/Event"><button className='border border-white w-52 h-16 text-white cursor-pointer'>
            EVENTS
          </button></Link>
          </div>
          <div className='absolute md:left-32 left-10 md:h-[1150px] h-[1250px] 2xl:h-[1400px] flex justify-center items-center '>
            <button className='border border-white w-52 h-16 bg-black  text-white text-m rounded-md hover:bg-gray-700'> Plan your visit</button>
            <button className='border border-white w-52 h-16 ml-1 bg-gray-200 hover:bg-gray-400 text-m rounded-md'> Subscribe to neswletter</button>
          </div>
        </div>
   </div>
   
       
       



      </>

  )
}

export default Introduction