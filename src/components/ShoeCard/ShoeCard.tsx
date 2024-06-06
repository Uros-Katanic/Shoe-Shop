import { Link } from "react-router-dom";
import shoeCardStyles from "./ShoeCard.module.css";
import Shoe from "../../types/shoe";

// Import images directly
import shoe2 from "../../assets/shoe2.jpg";
import shoe3 from "../../assets/shoe3.jpg";

interface ShoeCardProps {
  shoe: Shoe;
}

// Create a mapping from imageUrl to the actual import
const imageMap: { [key: string]: string } = {
  "/assets/images/shoe2.jpg": shoe2,
  "/assets/images/shoe3.jpg": shoe3,
};

function ShoeCard({ shoe }: ShoeCardProps) {
  // Use the mapped image URL or a default placeholder if the image is not found
  const imageUrl = imageMap[shoe.imageUrl] || shoe.imageUrl;

  return (
    <article id={shoeCardStyles["main-container"]}>
      <img src={imageUrl} alt={shoe.model} className={shoeCardStyles.selling} />
      <p className={shoeCardStyles["selling-text"]}>{shoe.model}</p>
      <p className={shoeCardStyles["price-effect"]}>{shoe.price}</p>
      <Link
        to={`/purchase/${shoe.id}`}
        className={shoeCardStyles["buy-now-anchor"]}
      >
        Buy Now
      </Link>
    </article>
  );
}

export default ShoeCard;
