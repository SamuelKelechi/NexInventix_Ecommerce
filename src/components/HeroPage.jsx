import "../styles/Heropage.css";
import Header from "./Header";
import { FiArrowUpRight } from "react-icons/fi";

const Heropage = () => {
  const products = [
    { name: "SPICE JARS", image: "/public/spicejar.jpg" },
    { name: "FRUIT BASKET", image: "/public/fruitbasket.jpg" },
    { name: "RICE COOKER", image: "/public/ricecooker.jpg" },
    { name: "BOWL SET", image: "/public/bowlset.jpg" },
  ];

  return (
    <section className="heroPage">
      <Header />
      <div className="heroPageTextHolder">
        <div>
          <h1>
            HANDMADE CROCKERY CRAFTED FOR EVERY MEAL
          </h1>
        </div>
        <div>
          <p>
            Eco-friendly, artisan-crafted crockery that blends sustainability
            with timeless design, making every meal a memorable and elegant
            experience.
          </p>
        </div>
        <div className="heroPageTextHolder_btns">
          <button>Shop Now</button>
          <button>Our Story</button>
        </div>
      </div>

  <div className="heroPageCardSection">
      <div className="heroPageCardSectionWrapper">
        <div className="heroPagePopularProducts">
          <div>
            <h2>Popular Products</h2>
          </div>
          <p>Popular Products 2025</p>
        </div>

        <div className="heroPageProductsList">
          {products.map((item, index) => (
            <div className="heroProductCard" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="heroProductCardText">
                <span>{item.name}</span>
                <FiArrowUpRight className="arrowIcon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Heropage;
