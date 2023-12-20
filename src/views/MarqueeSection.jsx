import Marquee from "react-fast-marquee";
import './styles/marquee.css'

export default function MarqueeSection() {
  return (
    <div className="marquee-container">
      <Marquee autoFill speed={130}>Rice Band - Music - Tour - News -&nbsp;</ Marquee>
    </div>
  )
}
