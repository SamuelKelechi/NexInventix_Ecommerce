import "../styles/Heropage.css"
import Header from "./Header"
const Heropage = () => {
    return (
        <section className="heroPage">
            <Header/>
            <div className="heroPageTextHolder">
                <div>
                    <h1>
                        HANDMAKE CROCKERY CRAFTED FOR EVERY 
                        MEAL
                    </h1>
                </div>
                <div>
                    <p>
                        Eco-friendly, artisan-crafted crockery 
                        that blends sustainability with 
                        timeless design, making every meal 
                        a memorable and elegant experience
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
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Heropage