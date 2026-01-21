import Card from "./Card";
import { Link } from "react-router-dom";
import CardProject from "./CardProject";
import projectsData from "./projectsData";
import reviewsData from "./reviewsData";
import CardReview from "./CardReview";
import services from "./services"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";



function Home() {
  const [form, setForm] = useState({
  fname: "",
  lname: "",
  email: "",
  service: ""
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const message = `New Consultation Request 👇

Name: ${form.fname} ${form.lname}
Email: ${form.email}
Service: ${form.service}`;

  const url = `https://wa.me/918224973413?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


    return (
        <div className="hero-part">
            <section className="hero-sec text-center d-flex align-items-center">
                <div className="layer w-100 py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="hero-heading py-5">

                                    <h1 className="display-4 display-lg-3 fw-bold mb-3">
                                        Scalable Digital Solutions for Modern Businesses
                                    </h1>

                                    <p className="fs-6 text-light  mb-4">
                                        We design, develop, and deploy secure cloud-based applications,
                                        high-performance websites, and custom software solutions that help
                                        businesses grow faster, operate smarter, and stay future-ready.
                                    </p>

                                    <div className="my-3 d-flex flex-wrap gap-3 justify-content-center">
                                        <Link
                                            to="/contact"
                                            className="btn bg-lblue px-4 py-2 rounded-pill text-light fw-semibold"
                                        >
                                            Start Your Project
                                        </Link>

                                        <Link
                                            to="/service"
                                            className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold"
                                        >
                                            Explore Our Services
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-4 gred-area  text-center">
                <div className="gred-bg">
                    <div className="container">
                        <div className="d-flex justify-content-center gap-2 align-items-center">
                            <h5 className="fs-6 mb-0 text-light">Upgrade Your IT System with Exclusive Savings!</h5>
                            <Link to="/" className="btn btn-sm border-1 btn-outline-light btn-rounded px-4 rounded-pill">Connect</Link>
                        </div>
                    </div>
                </div>
            </div>
            <article className="py-4">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-md-4 mb-3">
                            <h6 className="text-blue">Who We Are</h6>

                            <h3 className="mt-2 fw-bold">
                                Building Trust Through Digital Excellence
                            </h3>

                            <hr />

                            <p>
                                <small>
                                    We are a technology-driven company focused on delivering reliable,
                                    scalable, and secure digital solutions. From startups to growing
                                    enterprises, we help businesses transform ideas into powerful
                                    digital products that drive real results.
                                </small>
                            </p>

                            <div className="exp-material align-items-center d-flex gap-3">
                                <div className="w-100 py-2 text-center bg-secondary-subtle">
                                    <h1 className="display-5 mb-0 fw-bold text-lblue">10+</h1>
                                    <p className="mb-0">
                                        <small>Years of Industry Experience</small>
                                    </p>
                                </div>

                                <div className="exp-mean w-100">
                                    <h6 className="mb-1">Long-Term Support Commitment</h6>
                                    {/* <small className="text-muted">
                                        We stand by our solutions with continuous support, maintenance,
                                        and performance optimization.
                                    </small> */}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-md-8">
                            <div className="row art-area p-3 bg-secondary-subtle rounded-3">

                                <div className="col-md-6">
                                    <img
                                        src="https://web.creativemox.com/nutekno/wp-content/uploads/sites/8/2025/10/img_16-2048x1024.jpg"
                                        alt="Digital Solutions Team"
                                        className="w-100 rounded-3 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <div className="art-content mt-3 w-100">

                                        <h4 className="fs-5">
                                            Empowering Businesses Through Smart Technology
                                        </h4>

                                        <hr />

                                        <p>
                                            <small>
                                                Our team combines strategy, design, and engineering to build
                                                high-performance websites, cloud platforms, and custom
                                                software that improve efficiency, enhance user experience,
                                                and accelerate business growth.
                                            </small>
                                        </p>

                                        <ul className="list-unstyled mt-3">
                                            <li className="my-2 nav-list">
                                                <i className="fa-solid text-blue fa-check"></i> Transparent & Competitive Pricing
                                            </li>
                                            <li className="my-2 nav-list">
                                                <i className="fa-solid text-blue fa-check"></i> Skilled Developers & Cloud Experts
                                            </li>
                                            <li className="my-2 nav-list">
                                                <i className="fa-solid text-blue fa-check"></i> Modern & Secure Technology Stack
                                            </li>
                                            <li className="my-2 nav-list">
                                                <i className="fa-solid text-blue fa-check"></i> Scalable & Future-Ready Solutions
                                            </li>
                                            <li className="my-2 nav-list">
                                                <i className="fa-solid text-blue fa-check"></i> Reliable Post-Launch Support
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </article>

            <article className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <small className="text-lblue fw-semibold">
                                <span className="logo">Cuboid<span className="text-dark">Soft</span></span> — Trusted IT Solutions Partner
                            </small>

                            <h2 className="fw-bold mt-2 mb-3">
                                Why Choose <span className="logo">Cuboid<span className="text-dark fw-bold">Soft</span></span><br />
                                for Your Business
                            </h2>

                            <p className="text-muted mb-4">
                                At CuboidSoft, we help businesses build strong digital foundations
                                through reliable software development, cloud solutions, and modern
                                IT services designed for long-term growth.
                            </p>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2 bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Easy & Fast Implementation</h6>
                                    <p className="text-muted mb-0">
                                        We follow proven development processes to deliver solutions that
                                        are quick to deploy, easy to manage, and aligned with your goals.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2 bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Accelerated Business Growth</h6>
                                    <p className="text-muted mb-0">
                                        Our scalable digital solutions improve efficiency, enhance user
                                        experience, and support measurable business growth.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2 bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Future-Ready Digital Branding</h6>
                                    <p className="text-muted mb-0">
                                        We create modern, secure, and scalable platforms that strengthen
                                        your brand presence and keep you ahead in a competitive market.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="col-lg-6">
                            <div className="bg-secondary-subtle p-0 rounded-3 shadow-sm">

                                <div className="mb-3">
                                    <img
                                        src="https://t.commonsupport.com/zentec/images/resource/featured-image-1.jpg"
                                        className="img-fluid rounded w-100 mb-1"
                                        alt="CuboidSoft Support Team"
                                    />
                                </div>

                                <div className="p-4">
                                    <h5 className="fw-bold text-center mb-2">
                                        <span className="text-decoration-underline text-lblue">
                                            Book a Free Consultation
                                        </span>
                                    </h5>

                                    <p className="text-center text-muted mb-4">
                                        Tell us about your project and our experts will help you find the
                                        right digital solution.
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" name="fname" onChange={handleChange} className="form-control" placeholder="First Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="lname" onChange={handleChange} className="form-control" placeholder="Last Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-md-6">
                                                <select name="service" onChange={handleChange} className="form-select" required>
                                                    <option value="">Service Interested In</option>
                                                    <option>Website Development</option>
                                                    <option>Web Application</option>
                                                    <option>Mobile App Development</option>
                                                    <option>UI/UX Design</option>
                                                    <option>Cloud & Hosting</option>
                                                </select>
                                            </div>

                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn btn-primary bg-lblue px-4 py-2 mt-3">
                                                    Request Consultation
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>


            <article className="py-5 bg-secondary-subtle service-cards">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="text-center mb-4">
                                <h1 className="fw-bold w-75 m-auto">
                                    Reliable IT Services Designed to Scale Your Business
                                </h1>

                                <p className="text-muted mt-3 w-75 m-auto">
                                    We deliver end-to-end technology solutions including web development,
                                    cloud infrastructure, application engineering, and digital experience
                                    design—built for performance, security, and long-term growth.
                                </p>
                            </div>
                        </div>

                        {services.map((data) => (
                            <div className="col-md-4 my-3" key={data.title}>
                                <Card
                                    title={data.title}
                                    metadesc={data.metadesc}
                                    desc={data.desc}
                                    cta={data.cta}
                                    ctaLink={data.ctaLink}
                                    icons={data.icons}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </article>

            <section className="tech-section">
                <div className="text-center">
                    <h1 className="fw-bold mb-4 m-auto">
                        Cutting-Edge Technologies Powering Your Business
                    </h1>
                </div>
                <div className="tech-slider">
                    <div className="tech-track">

                        {/* Frontend */}
                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                            <span>React</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                            <span>HTML5</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                            <span>CSS3</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>

                        {/* Backend */}
                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                            <span>Node.js</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                            <span>PHP</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                            <span>MySQL</span>
                        </div>

                        {/* Cloud / Hosting */}
                        <div className="tech-card">
                            <img src="https://miro.medium.com/v2/1*tFl-8wQUENETYLjX5mYWuA.png" style={{ objectFit: "contain" }} alt="AWS" />
                            <span>AWS</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                            <span>GCP</span>
                        </div>

                        {/* UX / Graphic */}
                        <div className="tech-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                            <span>Figma</span>
                        </div>

                        <div className="tech-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />
                            <span>Photoshop</span>
                        </div>

                        {/* Duplicate cards for infinite scroll */}
                    </div>
                </div>
            </section>

            <article className="py-4 my-4">
                <div className="container">
                    <div className="text-center mb-4 py-4">
                        <h1 className="fw-bold">Proud projects that make us stand out</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 }
                        }}
                    >
                        {projectsData.map((pro, index) => (
                            <SwiperSlide key={index}>
                                <CardProject title={pro.title} projectImg={pro.projectImg} desc={pro.desc} subtitle={pro.subtitle} proLin={pro.proLin} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </article>
            <article className="py-5 bg-white">
                <div className="container">
                    <div className="row text-center align-items-center g-4">

                        <div className="col-6 col-md-3">
                            <div className="py-3">
                                <i className="fa-solid fa-users fs-1 text-lblue mb-2"></i>
                                <h2 className="fw-bold mb-0">10,000+</h2>
                                <p className="text-muted mb-0">HAPPY CLIENTS</p>
                            </div>
                        </div>

                        {/* <div className="d-none d-md-block col-md-1">
                            <div className="vr h-100 mx-auto"></div>
                        </div> */}

                        <div className="col-6 col-md-3">
                            <div className="py-3">
                                <i className="fa-solid fa-gear fs-1 text-lblue mb-2"></i>
                                <h2 className="fw-bold mb-0">14,000+</h2>
                                <p className="text-muted mb-0">PROJECT DONE</p>
                            </div>
                        </div>

                        {/* <div className="d-none d-md-block col-md-1">
                            <div className="vr h-100 mx-auto"></div>
                        </div> */}

                        <div className="col-6 col-md-3">
                            <div className="py-3">
                                <i className="fa-solid fa-star fs-1 text-lblue mb-2"></i>
                                <h2 className="fw-bold mb-0">98%</h2>
                                <p className="text-muted mb-0">SATISFACTION RATE</p>
                            </div>
                        </div>

                        {/* <div className="d-none d-md-block col-md-1">
                            <div className="vr h-100 mx-auto"></div>
                        </div> */}

                        <div className="col-6 col-md-3">
                            <div className="py-3">
                                <i className="fa-solid fa-laptop-code fs-1 text-lblue mb-2"></i>
                                <h2 className="fw-bold mb-0">25+</h2>
                                <p className="text-muted mb-0">YEARS OF EXPERIENCE</p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            <article className="py-5 bg-secondary-subtle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget">
                                <h1 className="fs-1">Obtaining further information by <span className="text-lblue">make a contact</span> with our experienced IT staffs.</h1>
                                <p className="text-secondary">
                                    We’re available for 8 hours a day!
                                    Contact to require a detailed analysis and assessment of your plan.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <i class="fa-solid fa-phone fs-1 mb-2 text-lblue"></i>
                                <p className="text-center text-secondary">Reach out now!</p>

                                <h1 className="text-lblue">+91 8224973413</h1>
                                <Link to="/contact" className="btn btn-primary bg-gred px-3 border-0">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="py-5 mt-4-mb-3">
                <div className="container">
                    <div className="text-center mb-4 py-4">
                        <h1 className="fw-bold">What do people praise about <span className="logo">Cuboid<span className="text-dark fw-bold">Soft</span></span>?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 }
                        }}
                    >
                        {reviewsData.map((pro, index) => (
                            <SwiperSlide key={index}>
                                <CardReview propic={pro.propic} auther={pro.auther} review={pro.review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </article>

            <article className="py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14822.248809592844!2d80.04231429999999!3d21.758492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3962e36abbb289d9%3A0xf7d138c19f5a22e!2sBangali%20Square%2C%20Near%2C%2044%2C%20Kanadia%20Main%20Rd%2C%20near%20Gawde%20Gym%2C%20Ashanagar%2C%20Preethi%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452016!3m2!1d22.721634899999998!2d75.9148891!5e0!3m2!1sen!2sin!4v1768588401844!5m2!1sen!2sin" style={{ height: "290px" }} className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </article>



        </div>
    )
}

export default Home;