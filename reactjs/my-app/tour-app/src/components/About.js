
import React from "react";

function About() {
    return (
        <section id="about" className="py-5">
            <div className="container">

                <h2 className="text-center mb-5 fw-bold">
                    About Us
                </h2>

                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                            alt="About"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">

                        <h3>Welcome to TravelGo</h3>

                        <p className="text-muted">
                            TravelGo is one of the best tour operators in India.
                            We provide affordable tour packages for families,
                            couples and groups.
                        </p>

                        <p className="text-muted">
                            We offer domestic and international tours with hotel,
                            transport, sightseeing and guide facilities.
                        </p>

                        <button className="btn btn-warning">
                            Read More
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;

