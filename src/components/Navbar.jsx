import React, {useState}from 'react'
import {FaBars, FaTimes, FaQuestion} from 'react-icons/fa'
import {BsQuestionLg} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {HiBars3BottomLeft} from 'react-icons/hi2'

import crmLogo from '../assets/crmLogo.png'

import {Link, useNavigate} from 'react-router-dom'
import Hamburgermenu from './Hamburgermenu'
import Hmcalender from './Hmcalender'


function Navbar (){
    const navigate=useNavigate();
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <>
        <div className='w-full h-[40px] flex justify-start px-4 mt-1 bg-[#fefefe] text-black'>
            <div className='ml-6 px-4 flex'>
                <h1 className='mr-2 flex'> <span className='mt-1'><TbWorld/></span> TR </h1>
                <h1 className='flex'>EN</h1>
            </div>
            <div className='px-4 flex'>
                <button className='border mr-2  border-white ml-1 h-7 w-20 bg-gray-100 hover:bg-gray-300 hover:underline flex justify-center'><span className='mt-1'><BsQuestionLg/></span> Help</button>
              <button className='border  border-white h-7 w-20 bg-gray-100 hover:bg-gray-300 hover:underline flex justify-center'>Search</button>
            </div>
           
        </div>
        <hr className=''></hr>
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#fefefe] text-black'>
            
           <div className='flex'>
            <div>
            <Hamburgermenu/>
            </div>
            <div className='mt-6 cursor-pointer'>
            <Hmcalender/>
            </div>
           
           
           </div>

            <a  href="/" className='absolute right-0 top-10'>
               <img src={crmLogo} width='150px' className='mr-8'></img>
            </a>
        </div>
         

       
        </>
    )
}

export default Navbar