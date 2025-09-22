"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom px-3 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            style={{ transform: "scale(2.0)", transition: "transform 0.3s" }}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible nav */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto d-flex flex-lg-row flex-column gap-lg-4 text-center">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Properties", path: "/properties" },
              // { label: "View Property", path: "view_property" },
              { label: "Review", path: "/reviews" },
              { label: "Contact", path: "/contact" },
              { label: "Blogs", path: "/blogs" },
            ].map((item) => (
              <li className="nav-item" key={item.label}>
                <Link
                  className="nav-link text-white fw-bold"
                  href={item.path}
                  style={{ fontSize: "20px" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3 mt-lg-0">
            <FaSearch
              className="text-white"
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
            <FaShoppingCart
              className="text-white"
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
            <FaUserCircle
              className="text-white"
              style={{ fontSize: "25px", cursor: "pointer" }}
              title="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
