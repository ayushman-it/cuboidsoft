import { useState } from "react";


function Contact() {
    const [contact, setContact] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `New Website Enquiry 👇

        Name: ${contact.name}
        Company: ${contact.company}
        Email: ${contact.email}
        Message: ${contact.message}`;

        const url = `https://wa.me/918224973413?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };


    return (
        <>
            <div className="contact-section">
                {/* Header Section */}
                <div className="contact-header text-white py-5" style={{ background: "linear-gradient(to right, #094374, #1e949e)" }}>
                    <div className="container text-center">
                        <h1 className="fw-bold">Let Us Know What You're Looking For</h1>
                        <p className="mb-0">Get In Touch</p>
                    </div>
                </div>

                {/* Form & Info Section */}
                <div className="container py-5">
                    <div className="row">
                        {/* Form */}
                        <div className="col-lg-7 mb-4">
                            <p className="text-lblue">Start Your Project With Us.</p>
                            <h2 className="mb-4">Let's Talk</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Name *"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="company"
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Company *"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Your Email *"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        name="message"
                                        onChange={handleChange}
                                        className="form-control"
                                        rows="5"
                                        placeholder="Your Message *"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn bg-lblue text-light">
                                    Submit
                                </button>
                            </form>

                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-5">
                            <div className="contact-info">
                                <p><strong>Address :</strong><br />Bangali Square, <br /> Near, 44, Kanadia Main Rd, near Gawde Gym, Ashanagar, Preethi Nagar, Indore, Madhya Pradesh 452016</p>
                                <p><strong>Phone :</strong><br />+91 8224973413</p>
                                <p><strong>Email :</strong><br />contact@cuboidsoft.in</p>
                                <p><strong>Find us :</strong><br />
                                    <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;