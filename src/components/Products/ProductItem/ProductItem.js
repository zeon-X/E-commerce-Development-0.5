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
                    src={"https://static-01.daraz.com.bd/p/9e214fffb1d1aa5e17b4eb96a5a7e8e8.jpg"}
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