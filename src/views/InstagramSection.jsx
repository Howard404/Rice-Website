import { useState } from "react"
// import Marquee from "react-fast-marquee";
// import { InstagramEmbed } from "react-social-media-embed";
import "./styles/instagram-section.css"
import InstagramCards from "./InstagramCards";
// import "https://widgetv3.bandsintown.com/main.min.js";

function InstagramSection() {

  let [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = window.onload = function() {
      screenWidth = this.innerWidth;
      setScreenWidth(screenWidth);
  }

  // const postList = [
  //   {
  //     url: "https://www.instagram.com/p/Ct9Zh2hxH7U/?img_index=1", 
  //     image: "/images/hero.jpeg"
  //   }, 
  //   {
  //     url: "https://www.instagram.com/p/Ct9Zh2hxH7U/?img_index=1", 
  //     image: "/images/hero.jpeg"
  //   }
  // ];
  return (
    <div className="instagram-container">
      <h1>Highlights 📸</h1>
      <InstagramCards />
    </div>
  )
}

export default InstagramSection;
