import React, { useState } from "react";
import "./Header.css";

import logo from '../assets/logo.png'
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
         <button className="navbar-toggle" onClick={toggleMenu}>
        ≡
      </button>
        <div className="navbar-logo">
        <img
          src={logo} // لینک به لوگو
          alt="پولینو"
        />
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>صندوق فروشگاهی</li>
        <li>باشگاه مشتریان</li>
        <li>باشگاه پذیرندگان</li>
        <li>روش‌های پرداخت</li>
      </ul>
      
      <button className="navbar-button">پولینو من</button>
    </nav>
  );
};

export default Header;
