import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logotype from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Cart/CartContext"; // Import CartContext

function Header() {
  const { cartCount } = useContext(CartContext); // Access cartCount from CartContext

  return (
    <header>
      <nav className={styles.navBaseline}>
        <Link to="/" className="image-container">
          <img src={Logotype} alt="Logo" className="logo" />
        </Link>
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
        <div className={styles.cartContainer}>
          <Link to="/cart" className={styles.cartLink}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
