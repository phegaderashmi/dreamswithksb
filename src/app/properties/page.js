"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PropertyListings() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    price: "",
    location: "",
    type: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    price: "",
    location: "",
    type: "",
  });

  const [expandedId, setExpandedId] = useState(null);

  const properties = [
    {
      id: 1,
      name: "Dream Plot 1",
      location: "Pune",
      price: "₹50 Lakh",
      type: "Residential",
      image: "/plot1.jpeg",
      details:
        "500 sq. ft plot in prime location with garden view and nearby school.",
      amenities: ["Parking", "Park", "24/7 Security"],
    },
    {
      id: 2,
      name: "Dream Plot 2",
      location: "Mumbai",
      price: "₹1.2 Crore",
      type: "Commercial",
      image: "/plot2.jpeg",
      details:
        "Prime commercial property suitable for office or retail business.",
      amenities: ["Lift", "Parking", "CCTV"],
    },
    {
      id: 3,
      name: "Dream Plot 3",
      location: "Nagpur",
      price: "₹80 Lakh",
      type: "Residential",
      image: "/plot3.jpeg",
      details:
        "Spacious residential plot in peaceful locality with great connectivity.",
      amenities: ["Garden", "Parking", "Security"],
    },
  ];

  // Filter properties based on appliedFilters
  const filteredProperties = properties.filter((prop) => {
    let priceMatch = true;
    if (appliedFilters.price === "low")
      priceMatch = prop.price.includes("50 Lakh");
    if (appliedFilters.price === "medium")
      priceMatch =
        prop.price.includes("50 Lakh") || prop.price.includes("80 Lakh");
    if (appliedFilters.price === "high")
      priceMatch = prop.price.includes("Crore");

    let locationMatch = appliedFilters.location
      ? prop.location === appliedFilters.location
      : true;

    let typeMatch = appliedFilters.type
      ? prop.type === appliedFilters.type
      : true;

    return priceMatch && locationMatch && typeMatch;
  });

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
            <span style={{ color: "#2c3e50" }}>List</span>
          </h2>

          {/* Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <select
              className="form-select"
              style={{ width: "200px" }}
              value={filters.price}
              onChange={(e) =>
                setFilters({ ...filters, price: e.target.value })
              }
            >
              <option value="">Select Price</option>
              <option value="low">Below ₹50 Lakh</option>
              <option value="medium">₹50 Lakh - ₹1 Crore</option>
              <option value="high">Above ₹1 Crore</option>
            </select>

            <select
              className="form-select"
              style={{ width: "200px" }}
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option value="">Select Location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nagpur">Nagpur</option>
            </select>

            <select
              className="form-select"
              style={{ width: "200px" }}
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Agricultural">Agricultural</option>
            </select>

            {/* Search Button */}
            <button
              className="btn btn-danger"
              style={{ fontWeight: "600" }}
              onClick={() => setAppliedFilters(filters)}
            >
              Search
            </button>
          </div>

          {/* Property Grid */}
          <div className="row g-4">
            {filteredProperties.map((prop) => (
              <div key={prop.id} className="col-md-12">
                <div
                  className="card shadow-sm mb-3"
                  style={{ cursor: "pointer", transition: "all 0.3s" }}
                  onClick={() =>
                    setExpandedId(expandedId === prop.id ? null : prop.id)
                  }
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        width={400}
                        height={250}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{prop.name}</h5>
                        <p className="card-text mb-1">{prop.location}</p>
                        <p className="card-text text-success fw-bold">
                          {prop.price}
                        </p>
                        <p className="card-text">{prop.details}</p>

                        {/* Expanded Details */}
                        {expandedId === prop.id && (
                          <div
                            className="mt-3 p-3"
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderRadius: "8px",
                              border: "1px solid #ddd",
                            }}
                          >
                            <h6>Amenities:</h6>
                            <ul>
                              {prop.amenities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur vehicula dolor nec nisi fermentum,
                              a ultricies libero volutpat.
                            </p>

                            {/* Contact / CTA */}
                            <button
                              className="btn btn-danger me-2"
                              style={{ fontWeight: "600" }}
                              onClick={() => router.push("/contact")} // redirect to contact page
                            >
                              Contact Agent
                            </button>

                            <button
                              className="btn btn-success"
                              style={{ fontWeight: "600" }}
                            >
                              WhatsApp
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
