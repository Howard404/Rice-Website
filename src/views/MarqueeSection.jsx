import Marquee from "react-fast-marquee";
import './styles/marquee.css'
import { useState } from "react";

export default function MarqueeSection() {


  let [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = window.onload = function() {
      screenWidth = this.innerWidth;
      setScreenWidth(screenWidth);
  }

  return (
    <div className="marquee-container white-border">
      <Marquee autoFill speed={screenWidth > 1200 ? 130 : 80}>Rice Band - Music - Tour - News -&nbsp;</ Marquee>
    </div>
  )
}
