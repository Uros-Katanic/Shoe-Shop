import { Link } from "react-router-dom";
import shoeDetailsStyle from "./ShoeDetails.module.css";
import Shoe from "../../types/shoe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface ShoeDetailsProps {
  shoe: Shoe;
}

function ShoeDetails({ shoe }: ShoeDetailsProps) {
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
        <Link
          to={`/purchase/${shoe.id}`}
          className={shoeDetailsStyle["buy-now-anchor"]}
        >
          Buy Now{" "}
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={shoeDetailsStyle["icon"]}
          />
        </Link>
      </div>
    </article>
  );
}

export default ShoeDetails;
