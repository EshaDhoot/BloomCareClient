import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom'
const Header = () => {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#058689' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logo" src="logo.jpg" width="100" height="100" alt="Company Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn nav-link">Home</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">About Anemia</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">Services</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">
                  <Link to="/quizzes" className="text-white text-decoration-none">
                    Quizzes
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">Contact Us</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">
                  <Link to="/login" className="text-white text-decoration-none">
                    Login
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link">
                  <Link to="/" className="text-white text-decoration-none">
                    Sign Up
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
