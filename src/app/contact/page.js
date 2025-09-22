"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <section className="py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#34495e" }}>
            Contact Us
          </h2>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="fw-bold mb-3">Our Office</h4>
                <p>
                  <strong>Address:</strong> Viraj paradise manajinagar narhe
                  411041 pune
                </p>
                <p>
                  <strong>Phone:</strong> +91 8554877663
                </p>
                <p>
                  <strong>Email:</strong> info@dreamswithksd.com
                </p>
                <p>
                  <strong>Office Hours:</strong> Mon - Sun, 9:00 AM - 6:00 PM
                </p>

                {/* Google Maps */}
                <div className="mt-3">
                  <div className="mt-3">
                    <a
                      href="https://www.google.com/maps?q=18.45281219482422,73.82125091552734&z=17&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "block", cursor: "pointer" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3782.489304896345!2d73.82125091552734!3d18.45281219482422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694956754721!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{
                          border: 0,
                          borderRadius: "8px",
                          pointerEvents: "none",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="fw-bold mb-3">Send Us a Message</h4>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={5}
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
