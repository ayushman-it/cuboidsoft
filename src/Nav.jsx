import { Routes, Route, Link } from "react-router-dom";
import BoxLogo from './assets/box-logo.jpeg';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import Project from "./Project";
import Contact from "./Contact";

function Nav() {
  return (
    <>
      <nav className="navbar shadow-sm bg-white position-sticky top-0 z-1 py-2">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex gap-2 align-items-center text-decoration-none">
            <img src={BoxLogo} alt="Cuboid Soft IT Solutions - Private" style={{width: "50px"}} />
            <div className="logo-text">
               <h1 className="mb-0 fs-5 logo">
              Cuboid<b><span className="text-dark">Soft</span></b>
            </h1>
            <p className="small mb-0" style={{ fontSize: "12px" }}>
              IT Solutions - Private <span className="text-lblue">Limited</span>
            </p>
            </div>
          </Link>

          {/* Desktop: basic menus visible */}
          <ul className="navbar-nav d-none d-lg-flex flex-row align-items-center gap-3 mb-0">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
            {/* <li className="nav-item"><Link to="/service" className="nav-link">Our Teams</Link></li> */}
            <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
          </ul>

          {/* Coffee Image: always visible */}
          <img
            src="https://i.pinimg.com/originals/a3/7d/03/a37d03e9e6ad102a4f84c77413ac2673.gif"
            alt="Coffee"
            style={{ width: "50px", cursor: "pointer" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#coffeeMenu"
            aria-controls="coffeeMenu"
          />

        </div>
      </nav>

      <div class="fixed-bottom d-flex d-md-none">
        <a
          href="tel:+919999999999"
          class="btn btn-primary bg-gred flex-fill py-3 fw-bold rounded-0 text-center"
        >
          <i class="fa-solid fa-phone me-2"></i>
          Call Now
        </a>

        <a
          href="https://wa.me/918224973413"
          target="_blank"
          class="btn btn-primary bg-lblue border-0 flex-fill py-3 fw-bold rounded-0 text-center"
        >
          <i class="fa-brands fa-whatsapp me-2"></i>
          WhatsApp Now
        </a>
      </div>


      {/* Offcanvas: contains all menus + CTA items */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="coffeeMenu"
        aria-labelledby="coffeeMenuLabel"
        style={{ width: "280px" }}
      >
        {/* Offcanvas Header with Logo */}
        <div className="offcanvas-header d-flex flex-column align-items-start border-bottom">
          {/* <img
      src="/assets/logo.jpeg" // replace with your logo
      alt="Logo"
      style={{ width: "100px", marginBottom: "10px" }}
    /> */}
          <h5 className="offcanvas-title logo" id="coffeeMenuLabel">
            Cuboid<b><span className="text-dark">Soft</span></b>
            <p className="small mb-0 text-dark" style={{ fontSize: "12px" }}>
              IT Solutions - Private <span className="text-lblue">Limited</span>
            </p>
          </h5>

          <button
            type="button"
            className="btn-close text-reset position-absolute top-0 end-0 m-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Offcanvas Body */}
        <div className="offcanvas-body d-flex flex-column justify-content-between p-3">

          {/* Main Menu Links */}
          <ul className="list-unstyled mb-4">
            <li><Link to="/" className="text-decoration-none d-block py-2">Home</Link></li>
            <li><Link to="/about" className="text-decoration-none d-block py-2">About</Link></li>
            <li><Link to="/service" className="text-decoration-none d-block py-2">Services</Link></li>
            {/* <li><Link to="/service" className="text-decoration-none d-block py-2">Our Teams</Link></li> */}
            <li><Link to="/projects" className="text-decoration-none d-block py-2">Projects</Link></li>
            <li><Link to="/contact" className="text-decoration-none d-block py-2">Contact Us</Link></li>
          </ul>

          <hr />

          {/* Extra CTA Items */}
          <ul className="list-unstyled mb-4">
            <li><a href="#coffee-meeting" className="text-decoration-none d-block py-2">Let's Schedule a Coffee Meeting</a></li>
            <li><a href="#partner" className="text-decoration-none d-block py-2">Be a Partner</a></li>
            <li><a href="#quote" className="text-decoration-none d-block py-2">Get a Quote</a></li>
            <li><a href="#erp" className="text-decoration-none d-block py-2">ERP Solutions</a></li>
          </ul>

          {/* Footer Buttons */}
          <div className="d-flex flex-column gap-2 mt-auto">
            <button className="btn btn-primary bg-lblue rounded-pill btn-sm w-100">Book an Appointment</button>
            {/* <button className="btn btn-outline-primary btn-sm w-100">Let's Discuss Project</button> */}
          </div>

        </div>
      </div>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

       <Footer />
    </>
  );
}

export default Nav;
