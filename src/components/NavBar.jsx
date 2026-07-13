import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg"
      style={{
        background: "linear-gradient(90deg, #0d6efd, #6610f2)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="container">

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/"
              >
                📚 View Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/add"
              >
                ➕ Add Course
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;