"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

const blogs = [
  {
    id: 1,
    image: "/real-estate-1.jpg",
    title: "Top 10 Tips for Buying Your First Home",
    date: "15th Sep, 2025",
    author: "Admin",
    desc: "Learn the most important tips to make your first home purchase smooth and stress-free.",
  },
  {
    id: 2,
    image: "/real-estate-2.jpg",
    title: "How to Choose the Right Neighborhood",
    date: "10th Sep, 2025",
    author: "Admin",
    desc: "Factors to consider when selecting the perfect neighborhood for you and your family.",
  },
  {
    id: 3,
    image: "/real-estate-3.jpg",
    title: "Real Estate Investment Strategies",
    date: "5th Sep, 2025",
    author: "Admin",
    desc: "Explore investment opportunities that can maximize your returns in real estate.",
  },
];

export default function Blogs() {
  return (
    <>
      <Navbar />
      <section
        id="blogs"
        className="py-5"
        style={{ backgroundColor: "#fff", color: "#333" }}
      >
        <div className="container">
          <h2
            className="text-center text-uppercase fw-bold mb-5"
            style={{ color: "#2c3e50" }}
          >
            <span style={{ color: "#e74c3c" }}>Our</span>{" "}
            <span style={{ color: "#2c3e50" }}>Blogs</span>
          </h2>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div
                  className="card h-100 shadow-lg"
                  style={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />

                  <div className="card-body d-flex flex-column justify-content-between">
                    <a
                      href="#"
                      className="h5 fw-bold mb-2 text-decoration-none"
                      style={{ color: "#e74c3c" }}
                    >
                      {blog.title}
                    </a>
                    <span
                      className="mb-2"
                      style={{ fontSize: "0.9rem", color: "#7f8c8d" }}
                    >
                      by {blog.author} / {blog.date}
                    </span>
                    <p style={{ fontSize: "0.95rem", color: "#34495e" }}>
                      {blog.desc}
                    </p>
                    <a
                      href="#"
                      className="btn mt-3 align-self-start"
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "#fff",
                        fontWeight: "600",
                        padding: "6px 16px",
                        borderRadius: "4px",
                      }}
                    >
                      Read More
                    </a>
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
