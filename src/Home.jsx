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


function Home() {
    return (
        <div className="hero-part">
            <section className="text-center hero-sec">
                <div className="layer py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-heading py-5 col-12 col-lg-8 m-auto">
                                    <h1 className="display-3 fw-bold">Modern Solutions. Maximum Impact.</h1>
                                    <p className="fw-semibold">
                                        Experience cloud services designed to enhance performance, protect your data, and support your business growth.
                                    </p>
                                    <div className="my-3 d-flex gap-2 justify-content-center">
                                        <Link to="/" className="btn bg-primary btn-rounded px-4 rounded-pill text-light bg-lblue">Get Started</Link>
                                        <Link to="/" className="btn border-1 btn-outline-light btn-rounded px-4 rounded-pill text-light ">Get Started</Link>
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
                            <Link to="/" className="btn btn-sm border-1 btn-outline-light btn-rounded px-4 rounded-pill text-light ">Connect</Link>
                        </div>
                    </div>
                </div>
            </div>
            <article className="py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3">
                            <h6 className="text-blue">Who We Are</h6>
                            <h3 className="mt-2 fw-bold">Building Trust Through Digital Excellence</h3>
                            <hr />
                            <p>
                                <small>  Hendrerit sodales egestas quisque pulvinar ultrices parturient ultricies vel nostra maecenas cubilia. Eget consequat aliquet ligula tellus a finibus dictumst maximus blandit eleifend.</small>
                            </p>
                            <div className="exp-material align-items-center d-flex gap-3">
                                <div className="w-100 py-2 text-center bg-secondary-subtle">
                                    <h1 className="display-5 mb-0 fw-bold text-lblue">10+</h1>
                                    <p className="mb-0"><small>Years Experience</small></p>
                                </div>
                                <div className="exp-mean w-100">
                                    <h6 className="mb-0">Comprehensive Warranty</h6>
                                    {/* <p className="mb-0"><small>Comprehensive Warranty
Consequat quis erat si tellus habitasse vulputate cubilia</small></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row art-area p-3 bg-secondary-subtle rounded-3">
                                <div className="col-md-6">
                                    <img src="https://web.creativemox.com/nutekno/wp-content/uploads/sites/8/2025/10/img_16-2048x1024.jpg" alt="" className="w-100 rounded-3 h-100 object-fit-cover" />
                                </div>
                                <div className="col-md-6">
                                    <div className="art-content mt-3 w-100">
                                        <h4 className="fs-5">Empowering Businesses Through Smart Technology</h4>
                                        <hr />
                                        <p>
                                            <small> Tempus suspendisse nostra donec a convallis curabitur cursus dolor porttitor massa tempor</small>
                                        </p>
                                        <ul className="list-unstyled mt-3">
                                            <li className="my-2 nav-list"><i className="fa-solid text-blue fa-check"></i> Affordable Pricing</li>
                                            <li className="my-2 nav-list"><i className="fa-solid text-blue fa-check"></i> Expert Technicians</li>
                                            <li className="my-2 nav-list"><i className="fa-solid text-blue fa-check"></i> High-Quality Parts</li>
                                            <li className="my-2 nav-list"><i className="fa-solid text-blue fa-check"></i> Free Diagnostics</li>
                                            <li className="my-2 nav-list"><i className="fa-solid text-blue fa-check"></i> Convenient Service</li>
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

                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <small className="text-lblue fw-semibold">
                                <span className="logo">Cuboid<span className="text-dark">Soft</span></span> - Welcome To IT Solutions
                            </small>

                            <h2 className="fw-bold mt-2 mb-3">
                                Why Choose <span className="logo">Cuboid<span className="text-dark fw-boold">Soft</span></span><br />
                                IT Solutions
                            </h2>

                            <p className="text-muted mb-4">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet velit
                                sed quia non numquam eius modi tempora incidunt labore.
                            </p>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2  bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                    >
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Easier To Implement</h6>
                                    <p className="text-muted mb-0">
                                        Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2  bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                    >
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Increase Growth Rates</h6>
                                    <p className="text-muted mb-0">
                                        Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="bg-primary px-2 py-2  bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                    >
                                        <i className="fa-solid fa-check text-lblue fs-4"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Branding Of The Future</h6>
                                    <p className="text-muted mb-0">
                                        Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-secondary-subtle p-0  rounded-3 shadow-sm">
                                <div className="mb-3">
                                    <img
                                        src="https://t.commonsupport.com/zentec/images/resource/featured-image-1.jpg"
                                        className="img-fluid rounded w-100 mb-1"
                                        alt="Support Team"
                                    />
                                </div>

                                <div className="p-4">
                                    <h5 className="fw-bold text-center mb-2">
                                        <span className="text-decoration-underline text-lblue">
                                            Book Your Appointment
                                        </span>
                                    </h5>

                                    <p className="text-center text-muted mb-4">
                                        We Help Customers Digital Transformation By IT Solutions
                                    </p>

                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <select className="form-select">
                                                    <option selected>Inquiry About</option>
                                                    <option>Web Development</option>
                                                    <option>Mobile App</option>
                                                    <option>UI/UX Design</option>
                                                    <option>Digital Marketing</option>
                                                </select>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button className="btn btn-primary bg-lblue px-4 py-2 mt-3">
                                                    Make a Request
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
                            <div className="text-center">
                                <h1 className="fw-bold w-75 m-auto">Building Future-Ready Systems with Expert IT Services</h1>
                            </div>
                        </div>
                        {services.map((data => (
                            <div className="col-md-4 my-3">
                                <Card title={data.title} metadesc={data.metadesc} desc={data.desc} cta={data.cta} ctaLink={data.ctaLink} icons={data.icons}></Card>
                            </div>
                        )))}

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