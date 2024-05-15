import React, { useContext } from "react";
import shoeDetailsStyle from "./ShoeDetails.module.css";
import Shoe from "../../types/shoe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext, useCart } from "../Cart/CartContext";
import cartService from "../../services/cartService";

interface ShoeDetailsProps {
  shoe: Shoe;
}

function ShoeDetails({ shoe }: ShoeDetailsProps) {
  const { setCartCount } = useContext(CartContext);

  const handleAddToCart = () => {
    cartService.addShoeToCart(shoe);
    // addToCart(shoe);
    setCartCount(cartService.getTotalNumberOfCartItems());
  };

  return (
    <article id={shoeDetailsStyle["details-container"]}>
      <div className={shoeDetailsStyle["img-description"]}>
        <img
          src={shoe.imageUrl}
          id={shoeDetailsStyle.selling}
          alt={shoe.model}
        />
        <p
          className={shoeDetailsStyle["shoe-description"]}
          id={shoeDetailsStyle["shoe-alignment"]}
        >
          {shoe.description}
        </p>
      </div>
      <div className={shoeDetailsStyle["details-wrapper"]}>
        <p
          className={shoeDetailsStyle["price-effect"]}
          id={shoeDetailsStyle["shoe-alignment"]}
        >
          {shoe.price}{" "}
        </p>
        <button
          className={shoeDetailsStyle["buy-now-anchor"]}
          onClick={handleAddToCart}
        >
          Add to Cart{" "}
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={shoeDetailsStyle["icon"]}
          />
        </button>
      </div>
    </article>
  );
}

export default ShoeDetails;
