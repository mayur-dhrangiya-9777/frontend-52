
import React from "react";

function Package(){

    const packages = [
        {
            title: "Goa Tour",
            price: "₹9,999",
            days: "3 Days / 2 Nights"
        },
        {
            title: "Manali Tour",
            price: "₹14,999",
            days: "5 Days / 4 Nights"
        },
        {
            title: "Kashmir Tour",
            price: "₹19,999",
            days: "6 Days / 5 Nights"
        }
    ];

    return (
        <section id="package" className="py-5">
            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Tour Packages
                </h2>

                <div className="row">

                    {packages.map((tour, index) => (

                        <div className="col-lg-4 mb-4" key={index}>

                            <div className="card shadow text-center h-100">

                                <div className="card-body">

                                    <h3>{tour.title}</h3>

                                    <h4 className="text-warning">
                                        {tour.price}
                                    </h4>

                                    <p>{tour.days}</p>

                                    <button className="btn btn-dark">
                                        Book Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Package;
