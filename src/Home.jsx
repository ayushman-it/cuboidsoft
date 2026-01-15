import Card from "./Card";

const services = [
  {
    title: "Software Development",
    metadesc: "Custom & Scalable Solutions",
    desc: "We build future-ready software systems tailored to your business needs, ensuring performance and scalability",
    icons: "fa-solid fa-code",
    cta: "Explore",
    ctaLink: "software-development"
  },
  {
    title: "Cloud Solutions",
    metadesc: "Secure & Reliable Cloud",
    desc: "Modern cloud solutions to optimize infrastructure and enable seamless cloud migration",
    icons: "fa-solid fa-cloud",
    cta: "Explore",
    ctaLink: "cloud-solutions"
  },
  {
    title: "Application Development",
    metadesc: "Web & Mobile Apps",
    desc: "High-performance web and mobile applications with modern UI and robust architecture",
    icons: "fa-solid fa-mobile-screen-button",
    cta: "Explore",
    ctaLink: "application-development"
  },
  {
    title: "Managed Services",
    metadesc: "24/7 IT Support",
    desc: "Complete IT management, monitoring, and support services to keep your systems running smoothly",
    icons: "fa-solid fa-gears",
    cta: "Explore",
    ctaLink: "managed-services"
  },
  {
    title: "Digital Advertising",
    metadesc: "Grow Your Brand",
    desc: "Strategic digital advertising campaigns that drive traffic, engagement, and conversions advertising",
    icons: "fa-solid fa-bullhorn",
    cta: "Explore",
    ctaLink: "digital-advertising"
  }
];



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
                                        <a href="#" className="btn bg-primary btn-rounded px-4 rounded-pill text-light bg-lblue">Get Started</a>
                                        <a href="#" className="btn border-1 btn-outline-light btn-rounded px-4 rounded-pill text-light ">Get Started</a>
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
                            <a href="#" className="btn btn-sm border-1 btn-outline-light btn-rounded px-4 rounded-pill text-light ">Connect</a>
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
            <article className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h1 className="fw-bold">Building Future-Ready Systems with Expert IT Servicesss</h1>
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
        </div>
    )
}

export default Home;