import React from 'react';
import './ProductDetails.css';

import productImg from '../../assets/product/paul-cuoco-CO2vOhPqlrM-unsplash.jpg';

const ProductDetails = () => {
    return (
        <div className='product_details_container pt-10 pb-20'>
            <div className='product_details_content'>

                {/* img, more img  */}
                <div className='product_details_img_container flex flex-col'>

                    {/* main img  */}
                    <img className='product_details_main_img'
                        src={productImg}
                        alt=""
                        style={{
                            borderRadius: "4px"
                        }} />


                    {/* more img  */}

                    <div className='product_details_more_img mt-5'>
                        <img src={productImg} alt="" style={{ borderRadius: "4px" }} />
                        <img src={productImg} alt="" style={{ borderRadius: "4px" }} />
                        <img src={productImg} alt="" style={{ borderRadius: "4px" }} />
                        <img src={productImg} alt="" style={{ borderRadius: "4px" }} />
                    </div>

                </div>



                {/* title, price, etc  */}
                <div className='product_details_details_container'>

                    {/* cate  */}
                    <p className='' style={{
                        fontSize: "30px",
                        color: "grey",
                        borderBottom: "solid 1px rgba(128, 128, 128, 0.15)",
                        paddingBottom: "3px"
                    }}>
                        Kitchen Decor
                    </p>

                    {/* title  */}
                    <p className='mt-3' style={{
                        fontSize: "27px", fontWeight: "600",
                    }}>
                        Norton Style Marble Pattern Luxury Mug
                    </p>

                    {/* rating  */}
                    <p className='' style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        // color:"grey"
                    }}>
                        Rating : 4.5
                    </p>

                    {/* price  */}
                    <p className='my-3' style={{
                        fontSize: "35px", fontWeight: "700",
                    }}>
                        Price : BDT 1200
                    </p>

                    {/* details  */}
                    <p className='mb-5' style={{
                        fontSize: "16px"
                    }}>
                        Product Details <br /><br />
                        Material : Porcelain.  <br />
                        Capacity : 400 ml. <br />
                        Color : White.  <br />
                        1 SET : 1 Mug, 1 Spoon, 1 Lid with a Gift Box.  <br />
                        Origin of Product : China (Imported Product)
                    </p>







                    {/* QuanTITY  */}

                    <div className='quantity_div mt-5 mb-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <input style={{
                            border: "1px solid grey",
                            borderRadius: "4px",
                            width: "70px",
                            padding: "0px 10px"
                        }} type="number" placeholder='0' />

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>





                    <div className='w-5/5 add_go_cart_btn_div'>
                        <button className=' text-center add_to_cart_btn' style={{
                            padding: "17px"
                        }} >
                            Add to Cart
                        </button>

                        {/* <button className='text-center view_details_btn' style={{
                            padding: "17px"
                        }}>
                            Go to Cart
                        </button> */}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;