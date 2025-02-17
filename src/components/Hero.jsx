import "./Hero.scss";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="hero__desc">NEW TREND</p>
        <h1 className="hero__title">COLLUSION</h1>
        <p>An exclusive selection of this season's trends.</p>
        <button className="hero__btn discover">DISCOVER</button>
        <button className="hero__btn">SHOP NOW</button>
      </div>
    </div>
  );
}
export default Hero;
