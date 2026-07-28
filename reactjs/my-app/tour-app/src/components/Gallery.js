
import React from "react";

function Gallery() {

    const images = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ];
    return (
        <section id="gallery" className="bg-light py-5">

            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Gallery
                </h2>

                <div className="row">

                    {images.map((img, index) => (

                        <div className="col-lg-3 col-md-6 mb-4" key={index}>

                            <img
                                src={img}
                                alt=""
                                className="img-fluid rounded shadow"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Gallery;

