"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        backgroundImage: "url('/home-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      {/* Optional Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-md-6">
            <h3 className="display-4 fw-bold text-capitalize mb-3">
              Step Into Your Dream Space.
            </h3>
            <p className="lead mb-4">
              Discover prime plots designed to turn your vision into reality.
              Whether you're looking to build your dream home or invest for the
              future, our carefully selected spaces provide the perfect
              foundation for your aspirations.
            </p>

            <Link href="/menu" className="btn btn-warning px-4 py-2">
              Get Yours Now
            </Link>

            {/* 🌐 Social Media Links */}
            <div className="d-flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
