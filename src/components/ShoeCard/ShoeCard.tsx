import { Link } from "react-router-dom";
import shoeCardStyles from "./ShoeCard.module.css";
import Shoe from "../../types/shoe";

interface ShoeCardProps {
  shoe: Shoe;
}

function ShoeCard({ shoe }: ShoeCardProps) {
  return (
    <article id={shoeCardStyles["main-container"]}>
      <img src={shoe.imageUrl} className={shoeCardStyles.selling} />
      <p className={shoeCardStyles["selling-text"]}>{shoe.model}</p>
      <p className={shoeCardStyles["price-effect"]}>{shoe.price}</p>
      <Link
        to={`/purchase/${shoe.id}`}
        className={shoeCardStyles["buy-now-anchor"]}
        // className={'${styles["buy-now-anchor"]} ${styles["buy-now-anchor--purchase"]}'}
      >
        Buy Now
      </Link>
    </article>
  );
}

export default ShoeCard;
