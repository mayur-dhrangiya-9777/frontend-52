import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow fixed-top">
            <div className="container">

                <a href="/" className="navbar-brand fw-bold text-warning">
                    <i className="bi bi-fire"></i> FitZone Gym
                </a>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">About</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">Services</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">Gallery</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">Trainer</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">Pricing</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">Contact</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Header;