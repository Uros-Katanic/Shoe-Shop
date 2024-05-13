import React from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import styles from "./ShoeList.module.css";
import { shoeArray } from "../../data";

function ShoeList() {
  return (
    <main>
      <div className={styles.shoeContainer}>
        {shoeArray.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </main>
  );
}

export default ShoeList;
