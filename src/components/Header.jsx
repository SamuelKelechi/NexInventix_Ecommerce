import { useContext, useState } from "react";
import "../styles/Header.css";
import { AppContext } from "../global/AppContext";

const Header = () => {
    const { cart, removeFromCart } = useContext(AppContext);
    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
        setShowCart(!showCart);
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    return (
        <header>
            <div className="headerWrapper">
                <div>
                    <h2>NEXTINVENTIX</h2>
                </div>

                <div className="headerSearchHolder">
                    <input type="text" placeholder="Search" />
                </div>

                <div className="headerIconsHolder">
                    <div className="headerIcons" onClick={handleCart}>
                        c
                    </div>
                    <div className="headerIcons">U</div>
                    <div className="headerIcons">M</div>

                    {showCart && (
                        <div className="cart_container">
                            {cart.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <div className="cart_body">
                                    {cart.map((item) => (
                                        <div className="cart_cart" key={item.id}>
                                            <div className="cart_info">
                                                <p className="cart_title">{item.title}</p>
                                                <p>{item.quantity}</p>
                                            </div>
                                            <div className="cart_remove">
                                                <button onClick={() => removeFromCart(item.id)}>
                                                    remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    <button className="checkout_btn" onClick={handleCheckout}>
                                        Proceed to Checkout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
