import "./Hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <p className="desc">NEW TREND</p>
        <h1 className="title">COLLUSION</h1>
        <p>An exclusive selection of this season's trends.</p>
        <button className="btn discover">DISCOVER</button>
        <button className="btn">SHOP NOW</button>
      </div>
    </div>
  );
}
export default Hero;
