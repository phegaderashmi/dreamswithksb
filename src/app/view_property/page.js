"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function PropertyDetails() {
  // Sample gallery images
  const images = [
    "/property1.jpg",
    "/property2.jpg",
    "/property3.jpg",
    "/property4.jpg",
  ];

  // Selected image for large view
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <Navbar />

      <section className="py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container">
          <h2
            className="text-center text-uppercase fw-bold mb-5"
            style={{ color: "#2c3e50", fontSize: "2.5rem" }}
          >
            <span style={{ color: "#e74c3c" }}>Property</span>{" "}
            <span style={{ color: "#2c3e50" }}>Details</span>
          </h2>

          <div className="row g-4">
            {/* Image Gallery */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 mb-3">
                <Image
                  src={mainImage}
                  alt="Property Main"
                  width={600}
                  height={400}
                  className="rounded"
                  style={{ objectFit: "cover", width: "100%", height: "400px" }}
                />
              </div>

              <div className="d-flex gap-2 flex-wrap">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="border rounded"
                    style={{
                      width: "80px",
                      height: "80px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => setMainImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="fw-bold mb-3">Dream Plot 1</h3>
                <p className="text-success fw-bold fs-5">₹50 Lakh</p>

                <ul className="list-unstyled mb-3">
                  <li>
                    <strong>Location:</strong> Pune
                  </li>
                  <li>
                    <strong>Size:</strong> 500 sq. ft
                  </li>
                  <li>
                    <strong>Bedrooms:</strong> 3
                  </li>
                  <li>
                    <strong>Type:</strong> Residential
                  </li>
                </ul>

                {/* Google Maps */}
                <div className="mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d73.856!3d18.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPune!5e0!3m2!1sen!2sin!4v1690000000000"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Contact Agent */}
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-primary w-100">
                    Contact Agent
                  </button>
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100"
                  >
                    WhatsApp Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floor Plan */}
          <div className="mt-5">
            <h4 className="fw-bold mb-3">Floor Plan</h4>
            <div className="card shadow-sm border-0">
              <Image
                src="/floorplan.jpg"
                alt="Floor Plan"
                width={1200}
                height={500}
                className="rounded"
                style={{ objectFit: "cover", width: "100%", height: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
