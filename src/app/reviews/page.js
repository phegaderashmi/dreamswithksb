"use client";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const reviews = [
  {
    name: "Gaurav Kini",
    image: "/review1.jpeg",
    text: "The property I purchased was exactly as described. The process was smooth and hassle-free!",
    rating: 5,
  },
  {
    name: "Tanuja Phegade",
    image: "/review2.jpeg",
    text: "Excellent customer service and guidance. Highly recommend for first-time home buyers.",
    rating: 4.5,
  },
  {
    name: "Sakshi Solat",
    image: "/review3.jpeg",
    text: "Great experience! The team helped me find the perfect investment property.",
    rating: 4.5,
  },
];

export default function ReviewSection() {
  return (
    <>
      <Navbar />
      <section
        id="review"
        className="py-5"
        style={{ backgroundColor: "#f9f9f9", color: "#333" }}
      >
        <div className="container">
          {/* Heading */}
          <h2
            className="text-center text-uppercase fw-bold mb-5"
            style={{ color: "#2c3e50", fontSize: "2.5rem" }}
          >
            <span style={{ color: "#e74c3c" }}>Customer</span>{" "}
            <span style={{ color: "#2c3e50" }}>Reviews</span>
          </h2>

          {/* Review Cards */}
          <div className="row g-4">
            {reviews.map((review, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className="card text-center shadow-sm p-4"
                  style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "16px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Review Text */}
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      minHeight: "90px",
                      color: "#34495e",
                    }}
                  >
                    "{review.text}"
                  </p>

                  {/* Reviewer Image */}
                  <div className="text-center mb-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={120}
                      height={120}
                      className="rounded-circle"
                      style={{
                        objectFit: "cover",
                        border: "2px solid #e74c3c",
                        boxShadow: "0 0 10px rgba(231,76,60,0.3)",
                      }}
                    />
                  </div>

                  {/* Reviewer Name */}
                  <h5
                    className="fw-bold mb-2 text-uppercase"
                    style={{
                      color: "#e74c3c",
                      letterSpacing: "1px",
                      fontSize: "1.1rem",
                    }}
                  >
                    {review.name}
                  </h5>

                  {/* Star Rating */}
                  <div className="d-flex justify-content-center gap-1">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <FaStar
                        key={i}
                        color="#f1c40f"
                        style={{ fontSize: "1rem" }}
                      />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <FaStarHalfAlt
                        color="#f1c40f"
                        style={{ fontSize: "1rem" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
