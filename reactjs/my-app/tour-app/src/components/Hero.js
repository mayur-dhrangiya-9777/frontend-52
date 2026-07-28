
import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold">
          Explore The World
        </h1>

        <p className="lead mt-3">
          Discover beautiful destinations with TravelGo.
        </p>

        <button className="btn btn-warning btn-lg mt-3">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;

