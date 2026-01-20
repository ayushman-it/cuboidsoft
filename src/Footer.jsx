import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white pt-5 border-top">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold logo">
              Cuboid<span className="text-dark">Soft</span>
            </h4>

            <p className="text-muted small">
              Driven by innovation and reliability, CuboidSoft delivers
              technology that empowers growth. Let’s build a smarter future together.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-lblue">Services</h6>
            <ul className="list-unstyled small">
              <li><Link to="/services/software" className="text-muted text-decoration-none">Software Development</Link></li>
              <li><Link to="/services/web-app" className="text-muted text-decoration-none">Web & App Development</Link></li>
              <li><Link to="/services/cloud" className="text-muted text-decoration-none">Cloud Solutions</Link></li>
              <li><Link to="/services/erp" className="text-muted text-decoration-none">ERP Solutions</Link></li>
              <li><Link to="/services/managed" className="text-muted text-decoration-none">Managed Services</Link></li>
              <li><Link to="/services/data" className="text-muted text-decoration-none">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold text-lblue">Support</h6>
            <ul className="list-unstyled small">
              <li><Link to="/support/help" className="text-muted text-decoration-none">Help Center</Link></li>
              <li><Link to="/support/technical" className="text-muted text-decoration-none">Technical Support</Link></li>
              <li><Link to="/support/docs" className="text-muted text-decoration-none">Documentation</Link></li>
              <li><Link to="/support/knowledge-base" className="text-muted text-decoration-none">Knowledge Base</Link></li>
              <li><Link to="/support/ticket" className="text-muted text-decoration-none">Submit a Ticket</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-lblue">Company</h6>
            <ul className="list-unstyled small">
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/team" className="text-muted text-decoration-none">Our Team</Link></li>
              <li><Link to="/careers" className="text-muted text-decoration-none">Careers</Link></li>
              <li><Link to="/news" className="text-muted text-decoration-none">News & Updates</Link></li>
              <li><Link to="/case-studies" className="text-muted text-decoration-none">Case Studies</Link></li>
              <li><Link to="/partners" className="text-muted text-decoration-none">Partnerships</Link></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3 small">
          <p className="mb-2 mb-md-0 text-muted">
            © 2026 CuboidSoft. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <Link to="/terms" className="text-muted text-decoration-none">Terms</Link>
            <Link to="/privacy" className="text-muted text-decoration-none">Privacy</Link>
            <Link to="/cookies" className="text-muted text-decoration-none">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
