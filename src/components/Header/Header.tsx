import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logotype from "../../assets/logo2.png";
import styles from "./Header.module.css";
import cartService from "../../services/cartService"; // Import cartService
import { CartContext } from "../Cart/CartContext";

function Header() {
  // const [cartCount, setCartCount] = useState(0);

  const { cartCount, setCartCount } = useContext(CartContext);

  useEffect(() => {
    const fetchCartCount = async () => {
      await cartService.getTotalNumberOfCartItems();
      // setCartCount(total);
    };

    fetchCartCount();
  }, []);

  const handleResetCart = () => {
    // Pozovite funkciju za resetovanje korpe iz cartService-a
    cartService.resetCart();
    setCartCount(0);
    // Resetujte broj stavki korpe na 0
    // setCartCount(0);
  };

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
        {/* <div className={styles.resetContainer}> */}
        <button onClick={handleResetCart} className={styles.resetBorder}>
          {/* <span className={styles.resetText}>Reset Cart</span> */}
          <FontAwesomeIcon icon={faSyncAlt} className={styles.resetIcon} />
        </button>
        {/* <FontAwesomeIcon icon={faSyncAlt} className={styles.resetIcon} /> */}
        {/* </div> */}
      </nav>
      <hr />
    </header>
  );
}

export default Header;
