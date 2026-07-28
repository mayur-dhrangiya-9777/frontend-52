function About() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700"
            alt="Gym"
            className="img-fluid rounded shadow"
          />

        </div>

        <div className="col-lg-6 text-center">

          <h2>About Our Gym</h2>

          <p>
            FitZone Gym provides world-class fitness equipment,
            certified trainers, CrossFit, yoga, cardio and
            personal coaching. Our mission is to help you
            achieve a healthy and strong lifestyle.
          </p>

          <button className="btn btn-warning">
            Read More
          </button>

        </div>

      </div>

    </div>
  );
}

export default About;