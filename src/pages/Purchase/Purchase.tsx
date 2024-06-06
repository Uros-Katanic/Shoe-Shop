import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ShoeDetails from "../../components/ShoeDetails/ShoeDetails";
import axios from "axios";
import Shoe from "../../types/shoe";
import styles from "./Purchase.module.css";

function Purchase() {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState<Shoe | null>(null);

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/shoes/${shoeId}`);
        setShoe(response.data);
      } catch (error) {
        console.error("Error fetching shoe data:", error);
      }
    };
    fetchShoe();
  }, [shoeId]);

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div>
        <ShoeDetails key={shoe.id} shoe={shoe} />
      </div>
      <div className={styles["footer-space"]}></div>
      <Footer />
    </div>
  );
}

export default Purchase;
