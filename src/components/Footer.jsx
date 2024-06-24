import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div>
        <ul className="flex  px-8 justify-center">
          <li className="px-36 p-16 text-center justify-items-center align-middle">
            <div className="px-12">
              <BiTimeFive size={30} />
            </div>
            <p className="text-xl ">Open now</p>
            <p className="underline ">closes at 6:30 pm</p>
          </li>
          <li className="px-36 p-16 text-center">
            <div className="px-24">
              <GoLocation size={30} />
            </div>
            <p className="text-xl ">Location</p>
            <p className="underline ">Schlossplatz, 10178 Berlin</p>
          </li>
          <li className="px-36 p-16 text-center">
            <div className="px-24">
              <FaRegComment size={30} />
            </div>
            <p className="text-xl ">Visitor services</p>
            <p className="underline ">+49 30 99 211 89 89 • Contact </p>
          </li>
        </ul>
      </div>
      <div className="bg-gray-200 ">
        <div className="row flex-row text-center ">
          <div>
            <ul className="flex justify-center ">
              <li className="p-4">Newsletter</li>
              <li className="p-4">FAQ</li>
              <li className="p-4">Jobs</li>
              <li className="p-4">SHOP</li>
              <li className="p-4">Tenders</li>
              <li className="p-4">Press Room</li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-center mt-4">
              <li className="p-6">
                <BsInstagram size={30} />
              </li>
              <li className="p-6">
                <BsYoutube size={30} />
              </li>
              <li className="p-6">
                <BsFacebook size={30} />
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <div>
              <ul className="flex justify-center  mt-11">
                <li className="p-4 ">Legal Notice</li>
                <li className="p-4">Privacy Policy</li>
                <li className="p-4">Terms and Conditions</li>
                <li className="p-4">House Rules</li>
                <li className="p-4">Accessibility Statement</li>
                <li className="p-4">Cookie Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
