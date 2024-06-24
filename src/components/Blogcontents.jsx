import React from "react";
import Blogcard from "./Blogcard";


function Blogcontents() {
  const card = [
    {
      img:'https://turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d94f4207-4155-47e3-9d90-3cf1c0e2ace3.jpg',
      title:' DIGNITY - CONTINUTY - TRANSPARENCY',
      desc:'JOINT DECLERATION OF THE INTERNATIONAL PARTNERS',
    },
    {
      img:'https://c4.wallpaperflare.com/wallpaper/883/42/557/the-last-of-us-2-the-last-of-us-the-last-of-us-part-ii-playstation-4-naughty-dog-hd-wallpaper-preview.jpg',
      title:'NETWORK OF WARMth',
      desc:'Jahanniter at the Forum',
    },
    {
      img:'https://cdn.pixabay.com/photo/2022/10/03/21/47/fog-7496901__340.jpg',
      title:'EXHIBITION',
      desc:'Discover the new views around forum',
    },
    {
      img:'https://www.nasihatler.com/wp-content/uploads/2019/09/Nasihatler-arkaplan-resimleri-110.jpg',
      title:'CONTINUITY – TRANSPARENCY',
      desc:' the undersigned participants at the Humboldt Forum opening symposium',
    },
  ]
  

  return (
    <>
    
    <Blogcard img={card[0].img} title={card[0].title} desc={card[0].desc}/>
    <Blogcard img={card[1].img} title={card[1].title} desc={card[1].desc}/>
    <Blogcard img={card[2].img} title={card[2].title} desc={card[2].desc}/>
 


    </>
  );
}

export default Blogcontents;
