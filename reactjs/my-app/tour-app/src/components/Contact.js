
import React from "react";

function Contact() {

    return (

        <section id="contact" className="bg-light py-5">

            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Contact Us
                </h2>

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <form>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Your Name"
                            />

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Email"
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Phone Number"
                            />

                            <textarea
                                rows="5"
                                className="form-control mb-3"
                                placeholder="Message"
                            ></textarea>

                            <button className="btn btn-warning">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;

