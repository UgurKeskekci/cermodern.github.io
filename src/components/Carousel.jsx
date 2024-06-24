import React from "react";
import Card from "../components/Card.jsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };

  return (
    <>
      <div className="mt-20  relative ">
        <div className="text-left ml-24 py-4 text-3xl font-bold">
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
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>


          
        </div>
      </div>
    </>
  );
}

export default Carousel;
