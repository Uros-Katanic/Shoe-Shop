import React from "react";
import Shoe from "../../types/shoe";
import shoeDetailsStyles from "./ShoeDetails.module.css";

interface ShoeDetailsProps {
  shoe: Shoe;
}

const ShoeDetails: React.FC<ShoeDetailsProps> = ({ shoe }) => {
  return (
    <div className={shoeDetailsStyles.container}>
      <img src={shoe.imageUrl} alt={shoe.model} className={shoeDetailsStyles.image} />
      <h1>{shoe.model}</h1>
      <p>{shoe.description}</p>
      <p className={shoeDetailsStyles.price}>Price: ${shoe.price}</p>
      <button className={shoeDetailsStyles.button}>Add to Cart</button>
    </div>
  );
};

export default ShoeDetails;
