import React from "react";

import videoBg from "../assets/eventvideobg.mp4";
import { BsArrowDown, BsTicketPerforated } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import EventGallerySlider from "../components/EventGallerySlider";
import RecomCard from "../components/RecomCard";
import Blogcard from "../components/Blogcard";

function Event() {
  const videoContent = [
    {
      img: "https://turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d94f4207-4155-47e3-9d90-3cf1c0e2ace3.jpg",
      text1: " A PLACE FOR CULTURE",
      text2: " AND SCIENCE, ",
      text3: "FOR EXCHANGE AND DEBATE",
    },
  ];

  const card = [
    {
      img: "https://payload.cargocollective.com/1/15/503103/14211881/ZinesAtBuryArtMuseum_800.jpeg",
      category: "DROP-IN",
      desc: "Ethnological Collections and Asian art",
      title: "TRANSFORMERS",
      details: "Poetry and science with Lea Weber",
      date: "1 April to 26. November 2023",
    },
    {
      img: "https://pbs.twimg.com/media/EElO3vPWsAA78J_?format=jpg&name=large",
      category: "LITERATURE",
      desc: "After Nature",
      title: "#Logoskop fourteen",
      details: "Poetry and science with Lea Weber and...",
      date: "27 May to 26. November 2023",
    },
    {
      img: "https://turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d94f4207-4155-47e3-9d90-3cf1c0e2ace3.jpg",
      category: "DROP-IN SCIENCE",
      desc: "Meet the Scientest",
      title: "What to do about wealth and inequality",
      details: "Meet the scientist with martyna Linartas",
      date: "2 April to 20. November 2023",
    },
    {
      img: "https://pbs.twimg.com/media/EElO2JXWwAY-yJH?format=jpg&name=large",
      category: "EXHIBITION",
      desc: "Revolution The Foe Of An Arrow Wound",
      title: "The resident music collective plays for the exhibition",
      details: "Poetry and science with Lea Weber",
      date: "25 May to 26. November 2023",
    },
    {
      img: "https://pbs.twimg.com/media/EElOrSsXkAUSmwM?format=jpg&name=large",
      category: "EXHIBITION",
      desc: "Revolution The Foe Of An Arrow Wound",
      title: "The resident music collective plays for the exhibition",
      details: "Poetry and science with Lea Weber",
      date: "1 April to 26. November 2023",
    },
    {
      img: "https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large",
      category: "EXHIBITION",
      desc: "Revolution The Foe Of An Arrow Wound",
      title: "The resident music collective plays for the exhibition",
      details: "Poetry and science with Lea Weber",
      date: "1 April to 26. November 2023",
    },
    {
      img: "https://pbs.twimg.com/media/D5-BV6aWkAAxMx2?format=jpg&name=large",
      category: "EXHIBITION",
      desc: "Revolution The Foe Of An Arrow Wound",
      title: "The resident music collective plays for the exhibition",
      details: "Poetry and science with Lea Weber",
      date: "1 Augst to 26. November 2023",
    },
  ];

  const blogcard = [
    {
      img: "https://turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d94f4207-4155-47e3-9d90-3cf1c0e2ace3.jpg",
      title: " DIGNITY - CONTINUTY - TRANSPARENCY",
      desc: "JOINT DECLERATION OF THE INTERNATIONAL PARTNERS",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/883/42/557/the-last-of-us-2-the-last-of-us-the-last-of-us-part-ii-playstation-4-naughty-dog-hd-wallpaper-preview.jpg",
      title: "NETWORK OF WARMth",
      desc: "Jahanniter at the Forum",
    },
  ];

  return (
    <>
      <div className="h-full font-roboto">
        <div className="w-full h-[750px] flex">
          <div>
            <video
              className="w-[10000px] h-[670px] object-cover"
              src={videoBg}
              autoPlay
              loop
              muted
            />
          </div>

          <p className="absolute w-full h-[820px] flex justify-center items-center md:text-4xl  text-4xl text-white font-bold">
            {videoContent[0].text1}
          </p>
          <p className="absolute w-full h-[960px] flex justify-center items-center md:text-8xl  text-4xl text-white font-bold font-worksans">
            {videoContent[0].text2}
          </p>
          <p className="absolute w-full h-[1130px] flex justify-center items-center md:text-4xl  text-4xl text-white font-bold">
            {videoContent[0].text3}
          </p>
          <div className="absolute w-full h-[750px] flex justify-center items-center "></div>
        </div>
      </div>

      {/**  ----------------------------- */}

      <div className="flex justify-center font-roboto mb-12">
        <div className="row row-flex-4 mr-96">
          <div className="flex">
            <h1>
              <MdAttachMoney size={50} />
            </h1>
            <h1 className="mt-3 text-xl ml-1">Exhibition: 12 € / 6 €</h1>
          </div>
          <div className="mt-6 flex">
            {" "}
            <h1>
              <BsTicketPerforated size={50} />
            </h1>
            <h1 className="mt-3 text-xl ml-1">
              Viele kostenfreie Veranstaltungen
            </h1>
          </div>
          <div className="mt-6 flex">
            <h1>
              <FaChild size={50} />
            </h1>
            <h1 className="mt-3 text-xl ml-1">12 years and older</h1>
          </div>
          <div className="mt-6 flex">
            <h1>
              <GoLocation size={50} />
            </h1>
            <h1 className="mt-3 text-xl ml-1">
              Special Exhibition 1 + 2, Ground Floor
            </h1>
          </div>
        </div>
        <div>
          <div className="font-bold">Exhibition: 12 € / 6 €</div>
          <button className="bg-black border-2 w-full h-16 text-white cursor-pointer">
            BOOK A TICKET
          </button>
        </div>
      </div>

      <hr />

      <div className="justify-center  flex font-montserrat text-2xl mr-96 mt-16 mb-16">
        <div>
          <div>
            <h2 className="font-bold">Contents</h2>
          </div>
          <div>
            <ul className="my-4 list-disc	 list-inside">
              <li className="cursor-pointer underline hover:no-underline">Exhibition</li>
              <li className="cursor-pointer underline hover:no-underline">The book on the Exhibition</li>
              <li className="cursor-pointer underline hover:no-underline">Guided tours and workshops</li>
              <li className="cursor-pointer underline hover:no-underline">Events</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      {/** ----------------------------- */}
      <div className="justify-center  flex font-montserrat  text-center-right p-24 px-80">
        <div className="leading-loose">
          <h2 className="text-bold text-4xl p-2">EXHIBITION</h2>
          <h1 className=" p-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in
            voluptate omnis quibusdam impedit perferendis perspiciatis
            laudantium ducimus ad illo. Molestias beatae temporibus voluptate
            error dolore earum pariatur impedit optio? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Laudantium vitae, atque ea,
            doloremque quam vel nostrum error nulla beatae delectus harum, ab
            magnam pariatur nihil quod officiis culpa quasi repudiandae. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti
            Cupiditate, eaque laborum! Veritatis placeat tenetur dolore fugit
            voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam ullam hic consectetur voluptatem, nam neque labore
            pariatur recusandae, totam quis veniam eos similique dolorem
            cupiditate commodi. Fugit necessitatibus eos earum. Lorem, ipsum.
          </h1>
          <br />
          <h1 className="p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aut
            rem minus ad laudantium accusamus accusantium, placeat tempora
            facilis dolorem explicabo soluta voluptas aspernatur saepe
            doloribus, numquam maxime ab qui?
          </h1>
          <h1 className="p-2">
            Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti libero aut voluptate sit laborum atque
            assumenda hic cumque minus, at tempore porro, iusto possimus.
            Veniam, culpa laudantium? Nemo, minima numquam. Mollitia minus expedita
            eos reiciendis architecto beatae molestias corrupti.
          </h1>
        </div>
      </div>




      <EventGallerySlider />






      {/** EXHIBITION SECTION ----------------------------- */}
      <section className="h-[700px] mb-[500px] w-full">
        <div className="p-6 h-full">
          <div className="ml-64">
            <p className="text-3xl font-roboto font-bold">
              THE BOOK ON THE EXHIBITION
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 h-full mt-8">
            <div className="ml-24">
              <img
                className="h-full"
                src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
                alt="img"
              />
            </div>
            <div className="font-montserrat text-left ml-6 mr-32 leading-loose">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                distinctio quae vel ratione, nam amet! Totam enim voluptate
                fugiat temporibus magnam porro modi animi quasi est, ducimus,
                ullam dolor asperiores. lorem
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias modi rem libero, quas nobis sunt consequatur
                praesentium corporis rerum, saepe adipisci, eum placeat. Quidem
                libero asperiores provident aperiam iusto vero!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nam vitae unde sit molestiae dolores minus ad quisquam, illum,
                laudantium eligendi. Fugit ab itaque dicta vero iure rem
                consequatur reiciendis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
                doloribus iusto in? Distinctio suscipit ab quaerat blanditiis
                sit aspernatur iure odit inventore officia dicta nulla
                exercitationem, quasi provident quas.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
                doloribus iusto in? Distinctio suscipit ab quaerat blanditiis
                sit aspernatur iure odit inventore officia dicta nulla
                exercitationem, quasi provident quas.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                distinctio quae vel ratione, nam amet! Totam enim voluptate
                fugiat temporibus magnam porro modi animi quasi est, ducimus,
                ullam dolor asperiores. lorem
              </p>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias modi rem libero, quas nobis sunt consequatur
                praesentium corporis rerum, saepe adipisci, eum placeat. Quidem
                libero asperiores provident aperiam iusto vero!
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>





      {/** EVENTS CARD SECTION ----------------------------- */}
      <div className="text-left ml-64 mr-64 mt-56">
        <p className="text-left text-3xl font-roboto font-bold mb-8">
          GUIDED TOURS AND WORKSHOPS
        </p>
        <p>
          Would you rather approach the topic together with others? Guided tours
          and workshops for adults and students 7th grade and up consider the
          exhibition based on the question “How do we live with death?” Together
          they will discover, discuss, and question the theatrically staged
          galleries and make connections to the presentations in the Humboldt
          Forum. The workshops have been developed in cooperation with the Björn
          Schulz Foundation, which provides professional support for terminally
          ill children and their families. Advanced training for educators and
          multipliers is planned as well.
        </p>
      </div>
      <section className="m-12">
        <div className="flex justify-center">
          <RecomCard
            img={card[0].img}
            category={card[0].category}
            desc={card[0].desc}
            details={card[0].details}
            date={card[0].date}
          />
          <RecomCard
            img={card[1].img}
            category={card[1].category}
            desc={card[1].desc}
            details={card[1].details}
            date={card[1].date}
          />
          <RecomCard
            img={card[2].img}
            category={card[2].category}
            desc={card[2].desc}
            details={card[2].details}
            date={card[2].date}
          />
          <RecomCard
            img={card[3].img}
            category={card[3].category}
            desc={card[3].desc}
            details={card[3].details}
            date={card[3].date}
          />
        </div>
        <div className="flex justify-center">
          <RecomCard
            img={card[2].img}
            category={card[2].category}
            desc={card[2].desc}
            details={card[2].details}
            date={card[2].date}
          />
          <RecomCard
            img={card[4].img}
            category={card[4].category}
            desc={card[4].desc}
            details={card[4].details}
            date={card[4].date}
          />
          <RecomCard
            img={card[5].img}
            category={card[5].category}
            desc={card[5].desc}
            details={card[5].details}
            date={card[5].date}
          />
          <RecomCard
            img={card[0].img}
            category={card[0].category}
            desc={card[0].desc}
            details={card[0].details}
            date={card[0].date}
          />
        </div>
      </section>
      {/** BLOG CARD SECTION ----------------------------- */}
      <section className="m-2 my-16">
        <div>
          <Blogcard img={blogcard[1].img} title={blogcard[0].title} />
        </div>
      </section>

      <hr />
    </>
  );
}

export default Event;
