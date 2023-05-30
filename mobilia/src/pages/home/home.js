import React from "react";
import "../../pages/home/home.css"
const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-contain">
        <h1 className="home-h1">Make your home happy with Mobilia</h1>
        <p className="home-p">
          your home should do perfect design to your home as possible as you can yalla
          u can do it uncle potato.
        </p>
        <button className="home-btn">Discover More</button>
      </div>
      {/* <div className="home-cards">
        <div className="home-card"></div>
        <div className="home-card"></div>
        <div className="home-card"></div>
      </div> */}
    </section>
  );
};

export default Home;
