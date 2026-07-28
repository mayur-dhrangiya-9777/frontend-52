function Hero() {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center text-white"
      style={{
        height: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container">

        <h1 className="display-2 fw-bold">
          BUILD YOUR BODY
        </h1>

        <h3 className="text-warning mb-4">
          NO PAIN • NO GAIN
        </h3>

        <p className="mx-auto col-lg-8">
          Join India's best fitness center with certified trainers,
          modern equipment, cardio zone and personal coaching.
        </p>

        <button className="btn btn-warning btn-lg me-3">
          Join Now
        </button>

        <button className="btn btn-outline-light btn-lg">
          View Plans
        </button>

      </div>
    </div>
  );
}

export default Hero;