
import React from "react";

function Destination() {

    const places = [
        {
            name: "Goa",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Manali",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Kashmir",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Kerala",
            image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="destination" className="bg-light py-5">

            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Popular Destinations
                </h2>

                <div className="row">

                    {places.map((place, index) => (

                        <div className="col-xl-3 col-lg-3 col-md-6 mb-4" key={index}>

                            <div className="card shadow h-100">

                                <img
                                    src={place.image}
                                    className="card-img-top"
                                    alt={place.name}
                                    height="220"
                                />

                                <div className="card-body text-center">

                                    <h4>{place.name}</h4>

                                    <button className="btn btn-warning">
                                        Explore
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

export default Destination;

