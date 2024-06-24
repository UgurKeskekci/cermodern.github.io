import React from "react";
import { useState } from "react";

function Hamburgermenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      {/** 
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#fefefe] text-black'>
            
            <div>
              
                <div onClick={handleClick} className='z-10 ml-10 '>
               <FaBars/>
                </div>
      
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 md:w-[700px] w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center tracking-[1px] overflow-hidden origin-left duration-1100'}>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
            Anasayfa
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Hakkımda
            </Link></li>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Yetenekler
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            Çalışmalar
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
            İletişim
            </Link></li>
        </ul>
                
            </div>

            <div>
               <img src={crmLogo} width='150px' className='mr-8'></img>
            </div>
        </div>
        */}



      <div className="flex border-b border-gray-00 py-8">
        <nav>
          <section className="MOBILE-MENU flex">
            <div
              className="HAMBURGER-ICON space-y-2 "
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-5 animate-pulse bg-gray-600 "></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600 "></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600 "></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className="ml-20 font-roboto text-6xl">
                <ul>
                  <li>Programlar</li>
                  <li>Siteyi Ziyaret Et</li>
                </ul>
              </div>

              <div
                className="CROSS-ICON absolute top-10 left-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <div className="ml-20 mr-72 font-roboto text-xl">
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col min-h-[150px]">
                  <li className="border-b border-gray-400 uppercase">
                    <a href="/about">Media Guide</a>
                  </li>
                  <li className="border-b border-gray-400 uppercase">
                    <a href="/portfolio">About</a>
                  </li>
                  <li className="border-b border-gray-400  uppercase">
                    <a href="/contact">Bilet Al</a>
                  </li>
                </ul>
              </div>
              <div className="text-bold ml-12 font-roboto text-bold ">
                <ul>
                  <li>Acilis saati 09:30, Kapanis 18:00</li>
                  <li>Adress Ankara/Turkiye</li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 30%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        animation: menu-animasyon 0.5s ease-out forwards;
       
       
       
       
      }

      @keyframes menu-animasyon {
        0% {
          width: 0;
        }
        25% {
          width: 10%;
        }
        100% {
          width: 30%;
        }

     
    `}</style>
      </div>
    </>
  );
}

export default Hamburgermenu;
