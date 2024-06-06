// Header
// Main -> ShoeList
// Footer
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../components/Footer/Footer.module.css";
import "../../components/Header/Header.module.css";
import "../../components/ShoeList/ShoeList.module.css";
import ShoeList from "../../components/ShoeList/ShoeList";
import "./Homepage.css";
function Home() {
  return (
    <div>
      <Header />
      <div>
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Our fantastic shoe collection
          </text>
        </svg>
      </div>
      <ShoeList />
      <Footer />
    </div>
  );
}

export default Home;
