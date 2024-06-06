import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logotype from "../../assets/logo2.png";
import styles from "./Header.module.css";
import cartService from "../../services/cartService"; // Import cartService
import { CartContext } from "../Cart/CartContext";

function Header() {
  const { cartCount, setCartCount } = useContext(CartContext);

  useEffect(() => {
    const fetchCartCount = async () => {
      const total = await cartService.getTotalNumberOfCartItems();
      setCartCount(total);
    };

    fetchCartCount();
  }, [setCartCount]);

  const handleResetCart = () => {
    cartService.resetCart();
    setCartCount(0);
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
        <button onClick={handleResetCart} className={styles.resetBorder}>
          <FontAwesomeIcon icon={faSyncAlt} className={styles.resetIcon} />
        </button>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
