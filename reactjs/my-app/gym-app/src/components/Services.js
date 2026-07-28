function Services() {

  const service = [
    "Cardio",
    "Weight Training",
    "CrossFit",
    "Yoga"
  ];

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Our Services
      </h2>

      <div className="row">

        {service.map((item, index) => (

          <div className="col-md-3 mb-3" key={index}>

            <div className="card p-4 text-center">

              <h4>{item}</h4>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Services;