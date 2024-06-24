import React from "react";
import { useState } from "react";
import Calendar from "./Calendar";

import {BsCalendar4Event} from 'react-icons/bs'

export default function Hmcalender() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="flex  border-gray-500">
        <nav>
          <section className="MOBILE-MENU flex">
            <div
              className="HAMBURGER-ICON  ml-12 border  border-white h-10 w-28 bg-gray-100 hover:bg-gray-300  hover:underline"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
             <div className="flex   justify-center mt-2"><BsCalendar4Event size={20} className=""/> <h1 className="font-bold font-roboto ml-2">Calender</h1></div>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
               
               <div className="mt-[30%]">
               <Calendar/>
            
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
                {/**
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
                 */}
              </div>
              <div className="text-bold ml-12 font-roboto text-bold ">
               {/** <ul>
                  <li>Acilis saati 09:30, Kapanis 18:00</li>
                  <li>Adress Ankara/Turkiye</li>
                </ul>
                */}
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
