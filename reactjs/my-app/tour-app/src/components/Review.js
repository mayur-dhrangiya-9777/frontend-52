
import React from "react";

function Review() {

    return (

        <section id="review" className="py-5">

            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Customer Reviews
                </h2>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="card shadow p-3 text-center">
                            <h4>Rahul</h4>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Excellent trip and wonderful experience.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow p-3 text-center">
                            <h4>Priya</h4>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Best travel company with affordable price.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow p-3 text-center">
                            <h4>Amit</h4>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Very supportive guide and nice hotels.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default Review;
