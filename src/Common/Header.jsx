import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        {/* ---------------------------------Header Starts------------------------------------------- */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#058689' }}>
          <div className="container-fluid">
            <img className="logo" src='logo.jpg' width="100" height="100" alt="Company Logo" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn">Home</button>
                  <button className="btn">About Anemia</button>
                  <button className="btn">Services</button>
                  <button className="btn">Quizzes</button>
                  <button className="btn">Contact Us</button>
                  <button className="btn">Login</button>
                  <button className="btn">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

{/* ---------------------------------------------------Header Ends----------------------------------------- */}

{/* ---------------------------------------------------------------------------------------------- */}
<footer class="footer" style={{ backgroundColor: '#058689' }}>
      <span>
        Copyright &copy; BLOOM CARE
      </span>
      <ul>
        <li class="nav-item"><a href="#">Privacy Policy</a></li>
        <li class="nav-item"><a href="#">Terms of use</a></li>
      </ul>
    </footer>
    </div>
  );
};

export default Header;
