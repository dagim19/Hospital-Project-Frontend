import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import img from "../../images/logo192.png";
import "../../styles/headerandfooter.css";
const Header = () => {
  return (
    <div className="fixed">
      <div className="left">
        <img src={img} alt="logo" className="logo" />
        <h5 className="company-title">React Hospital</h5>
      </div>
      <div className="right">
        <nav>
          <Router>
            <Link to="/logout" className="link">
              {" "}
              Logout{" "}
            </Link>
            <Link to="/contact" className="link">
              {" "}
              Contact{" "}
            </Link>
            <Link to="/info" className="link">
              {" "}
              Info{" "}
            </Link>
          </Router>
        </nav>
      </div>
    </div>
  );
};

export default Header;
