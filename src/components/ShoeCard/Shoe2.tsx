import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import shoe2 from "../../../assets/shoe2.jpg";
import styles from "./ShoeCard.module.css"; // Corrected import statement
function Shoe2() {
  return (
    <article className={styles["main-container"]}>
      {" "}
      {/* Used dynamic styles */}
      <img src={shoe2} className={styles.selling} /> {/* Used dynamic styles */}
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
      <Link to="/purchase" className={`${styles["buy-now-anchor"]}`}>
        Buy Now
      </Link>
    </article>
  );
}

export default Shoe2;
