"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaCheckCircle } from "react-icons/fa";

const partners = [
  {
    name: "KISHOR SAWANT",
    role: "Investing, Selling & Plotting Partner",
    image: "/kishor.jpeg",
  },
  {
    name: "CHANDAN THOMBARE",
    role: "Investing & Plotting Partner",
    image: "/Chandan.jpeg",
  },
  {
    name: "AKSHAY KAULAGE",
    role: "Investing Partner",
    image: "/Akshay_k.jpeg",
  },
  {
    name: "AKSHAY JADHAV",
    role: "Selling & Painting Contractor",
    image: "/Akshay_j.jpeg",
  },
  { name: "RAVINDRA MANE", role: "Supervisor", image: "/Ravi.jpeg" },
  // {
  //   name: "RUSHIKESH SAWANT",
  //   role: "Sliding Contractor",
  //   image: "/partner6.jpg",
  // },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <section
        id="about-us"
        className="py-5"
        style={{ backgroundColor: "#f9f9f9", color: "#333" }}
      >
        <div className="container">
          {/* Section Heading */}
          <h2
            className="text-center text-uppercase fw-bold mb-5"
            style={{ color: "#2c3e50", fontSize: "2.5rem" }}
          >
            <span style={{ color: "#e74c3c" }}>About</span>{" "}
            <span style={{ color: "#2c3e50" }}>Us</span>
          </h2>

          {/* Office History Card */}
          <div
            className="card mb-5 shadow-sm p-4"
            style={{
              borderRadius: "15px",
              border: "1px solid #ddd",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <h3
              className="fw-bold mb-3 text-center"
              style={{
                color: "#34495e",
                borderBottom: "3px solid #f39c12",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Our History
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              Founded in [2017], <strong>DreamsWithKSD</strong> has been helping
              clients find their perfect plots and homes. With years of
              experience in the real estate market, we are committed to
              delivering the best services in buying and selling properties.
            </p>
          </div>

          {/* Director Card */}
          <div className="mb-5 text-center">
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#34495e",
                borderBottom: "3px solid #f39c12",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Our Team
            </h3>

            <div className="d-flex justify-content-center mb-4">
              <div
                className="card shadow-sm border-0 text-center"
                style={{
                  width: "200px",
                  borderRadius: "15px",
                  transition: "transform 0.3s",
                }}
              >
                <Image
                  src="/kiran.jpeg"
                  alt="Director"
                  width={200}
                  height={200}
                  className="rounded-circle mt-3"
                />
                <div className="card-body">
                  <p className="fw-bold mb-1">KIRAN BALASO SAWANT</p>
                  <small className="text-muted">Director</small>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="card shadow-sm border-0 text-center"
                  style={{
                    width: "180px",
                    borderRadius: "15px",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={180}
                    height={180}
                    className="rounded-circle mt-3"
                  />
                  <div className="card-body">
                    <p className="fw-bold mb-1">{partner.name}</p>
                    <small className="text-muted">{partner.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Card */}
          <div
            className="card mb-5 shadow-sm p-4"
            style={{ borderRadius: "15px", border: "1px solid #ddd" }}
          >
            <h3
              className="fw-bold mb-3 text-center"
              style={{
                color: "#34495e",
                borderBottom: "3px solid #f39c12",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Mission & Vision
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              Our mission is to <strong>build trust</strong> and provide
              transparent, reliable real estate services. We envision becoming
              the most trusted platform for buying and selling plots and
              properties, making the process simple, secure, and stress-free for
              our clients.
            </p>
          </div>

          {/* License & Achievements Card */}
          <div
            className="card mb-5 shadow-sm p-4"
            style={{ borderRadius: "15px", border: "1px solid #ddd" }}
          >
            <h3
              className="fw-bold mb-4 text-center"
              style={{
                color: "#34495e",
                borderBottom: "3px solid #f39c12",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              License & Achievements
            </h3>

            <ul
              className="list-unstyled"
              style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
            >
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Licensed Real Estate Broker – Maharashtra
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Over 500 plots sold successfully
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Recognized for excellence in customer service 2024
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Trusted by 1000+ happy clients
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
