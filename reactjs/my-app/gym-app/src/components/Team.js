function Team() {

  const trainer = [
    "John",
    "Alex",
    "David"
  ];

  return (

    <div className="container py-5">

      <h2 className="text-center mb-4">
        Our Trainers
      </h2>

      <div className="row">

        {trainer.map((item, index) => (

          <div className="col-md-4 mb-3" key={index}>

            <div className="card p-4 text-center">

              <h4>{item}</h4>

              <p>Certified Trainer</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Team;