import { CiStar } from "react-icons/ci";
import "../styles/ProductsList.css";
import { FaRegCircle } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../global/AppContext";

const ProductsList = () => {
    const { updateCart } = useContext(AppContext)
    // const productItems = [
    //     {
    //         Img: 'https://i.ibb.co/0j6y2vY/Rectangle-59.png',
    //         title: 'Modern Chair',
    //         price: '$42.00',
    //     },
    //     {
    //         Img: 'https://i.ibb.co/0j6y2vY/Rectangle-59.png',
    //         title: 'Stylish Lamp',
    //         price: '$58.00',
    //     },
    //     {
    //         Img: 'https://i.ibb.co/0j6y2vY/Rectangle-59.png',
    //         title: 'Comfort Sofa',
    //         price: '$120.00',
    //     }
    // ];

    const [productItems, setProductItems] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products?limit=6&offset=2")
            // console.log(response.data)
            setProductItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='heroPageList'>
            <div className='mostLoved'>
                <div className='mostLoved1'>
                    <div>
                        <h2>OUR MOST LOVED</h2>
                    </div>
                    <p>Discover Our bestselling pieces, handcrafted with care and <br />designed to elevate your dining experience.</p>
                </div>
            </div>
            <div className='heroPageInside'>
                {
                    productItems.length === 0 ?
                        <h2>Loading...</h2>
                        :
                        <>
                            {productItems.map((item, index) => (
                                <div className='ProductCard' key={index}>
                                    <div className='product'><img src={item.category.image} alt={item.category.image} /></div>
                                    <div className='ProductCardText'>
                                        <div className='proText'><span>{item.title}</span>
                                            <span>{item.price}</span>
                                        </div>
                                        <div className='star'><CiStar className='goldstar' /><h2>4.5</h2>(138 Reviews)</div>
                                        <div className='icons'>
                                            <div><FaRegCircle className='circle1' />
                                                <FaRegCircle className='circle2' />
                                                <FaRegCircle className='circle3' />
                                                <FaRegCircle className='circle4' /></div>
                                            <div className='bag' onClick={() => updateCart(item)}><BsHandbag /></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                }
            </div>
        </div>
    )
};

export default ProductsList;