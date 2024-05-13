import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import styles from "./Header.module.css";
import Logotype from "../../assets/pngegg.png";

function Header() {
  return (
    <header>
      <nav className={styles.navBaseline}>
        <span className="image-container">
          <img src={Logotype} alt="Logo" className="logo" />
        </span>
        {/* <img src="hamburger.png" alt="Menu" className="hamburger" /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
