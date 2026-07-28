
import React from "react";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <i className="bi bi-airplane-fill text-warning"></i> TravelGo
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#destination">Destination</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#package">Packages</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">Gallery</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#review">Review</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;

