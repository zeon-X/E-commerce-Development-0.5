import React from 'react';
import './ProductItem.css';
import productImg from '../../../assets/product/paul-cuoco-CO2vOhPqlrM-unsplash.jpg'
import { useNavigate } from 'react-router-dom';

const ProductItem = () => {

    const navigate = useNavigate();
    return (
        <div className='product_item'>



            {/* IMAGE  */}
            <div style={{
                padding: "5px",
                position: "relative"
            }}>
                <img
                    style={{
                        // borderTopRightRadius: "8px", borderTopLeftRadius: "8px",
                        borderRadius: "4px"
                    }}
                    src={"https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/270050028_157682069924977_2042270255991414777_n.jpg?stp=dst-jpg_p600x600&_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHsR2SOjjQdMYhkZj6N5fY_CH8YPAqlsFsIfxg8CqWwW3QLadcuuPwvfa6WC4e48wAAz3jhSQ9OzWsy1dEKU1Z9&_nc_ohc=3QrylFiGc_AAX9XaNmc&_nc_ht=scontent.fdac22-1.fna&oh=00_AT_xe9XiOi8k_hi4kEh6pRyvQIUr6-SHCAYitB3c7hkYdQ&oe=6273AC51"}
                    alt="" />


                <p style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: "3px 5px",
                    borderRadius: "3px",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "13px"

                }}>
                    BDT 1200
                </p>
            </div>


            {/* PRICE AND DETAILS  */}
            <div className='' style={{
                padding: "10px",

            }}>
                {/* name  */}
                <p style={{
                    height: "60px", fontWeight: "600"
                }}>
                    Norton Style Marble Pattern Luxury Mug
                </p>

                {/* rating  */}
                <p className='' style={{
                    fontSize: "14px"
                }}>
                    Delivery Time : 3/5 Days.
                </p>
                <p className='mb-5' style={{
                    fontSize: "14px"
                }}>
                    Shipped from China
                </p>


            </div>



            {/* BTN  */}
            <div className='flex mb-1'
                style={{
                    padding: "5px", display: "grid", gridTemplateColumns: "repeat(2,1fr)"
                }}>


                <button className='mr-1 text-center add_to_cart_btn' >
                    Add to Cart
                </button>

                <button className='ml-1 text-center view_details_btn'
                    onClick={() => {
                        navigate('/products/detailProduct');
                    }}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductItem;