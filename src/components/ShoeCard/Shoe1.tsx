import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Main.module.css"; // Adjusted import path for CSS
import shoe1 from "../../../assets/shoe2.jpg";
import "./ShoeCard.module.css";

function Shoe3() {
  return (
    <article className={styles["main-container"]}>
      {" "}
      {/* Used dynamic styles */}
      <img src={shoe1} className={styles.selling} /> {/* Used dynamic styles */}
      <p className={styles["selling-text"]}>
        {" "}
        {/* Used dynamic styles */}
        Nesto o patikama random Nesto o patikama random Nesto o patikama random.
      </p>
      <p className={styles["price-effect"]}>
        {" "}
        {/* Used dynamic styles */}
        124$
      </p>
      {/* Replaced anchor tag with Link */}
      <Link
        to="/purchase"
        className={`${styles["buy-now-anchor"]} ${styles["buy-now-anchor--purchase"]}`}
      >
        Buy Now
      </Link>
    </article>
  );
}

export default Shoe3;
