import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import styles from "./Purchase.module.css";
import { shoeArray } from "../../data";
import Shoe from "../../types/shoe";
import ShoeDetails from "../../components/ShoeDetails/ShoeDetails";

function Purchase() {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState<Shoe>({
    id: 0,
    description: "",
    imageUrl: "",
    price: "",
    model: "",
  });

  const findShoe = () => {
    const foundShoe = shoeArray.find(
      (item) => item.id === parseInt(shoeId || "")
    );
    if (foundShoe) {
      setShoe(foundShoe);
    }
  };

  useEffect(() => {
    findShoe();
  }, [shoeId]);

  return (
    <div>
      <Header />
      <div>
        {shoe.id}
        <ShoeDetails key={shoe.id} shoe={shoe} />
      </div>

      <div className={styles["footer-space"]}></div>
      <Footer />
    </div>
  );
}

export default Purchase;
