import React, { useEffect, useState } from "react";
import axios from "axios";
import ShoeCard from "../ShoeCard/ShoeCard";
import styles from "./ShoeList.module.css";
import Shoe from "../../types/shoe"; // Adjust the import path as necessary

function ShoeList() {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    axios.get<Shoe[]>('http://localhost:5000/api/shoes')
      .then(response => {
        setShoes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shoes!', error);
      });
  }, []);

  return (
    <main>
      <div className={styles.shoeContainer}>
        {shoes.length === 0 ? (
          <p>No shoes available</p>
        ) : (
          shoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))
        )}
      </div>
    </main>
  );
}

export default ShoeList;
