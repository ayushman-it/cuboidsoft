import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './Service';
import Logo from './assets/logo.jpeg';


function Nav() {
    return (
        <Router>
            <nav className="navbar shadow-sm navbar-expand-lg position-sticky top-0 z-1">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/* <img src={Logo} alt="" width={150} /> */}
                        <h1 className="mb-0 fs-5 logo ">Cuboid<b><span className="text-dark">Soft</span></b> </h1>
                        <p className="small lead mb-0" style={{ "fontSize": "12px" }}><small>IT Solutions - Private  <span className="text-lblue">Limited</span></small> </p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Our Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/started" className="nav-link bg-lblue text-light btn-sm py-1 px-3 btn-rounded rounded-pill" aria-disabled="true">Get Started</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/service" element={<Service></Service>}></Route>
            </Routes>
        </Router>
    )
}

export default Nav;