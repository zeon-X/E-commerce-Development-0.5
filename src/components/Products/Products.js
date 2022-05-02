import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import './Products.css'

const Products = () => {
    return (
        <div className='product_container pt-10 pb-20'>
            <div className='product_content'>


                <p className='px-5 pb-3' style={{
                    fontSize: "16px", borderBottom: "solid 4px grey"
                }}>
                    Featured Products
                </p>
                <div className='product_item_container mb-20 mt-10'>
                    {/* FEATURED PRODUCTS WILL BE DISPLAYED HERE  */}
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>

                </div>



                <p className='px-5 pb-3 ' style={{
                    fontSize: "16px", borderBottom: "solid 4px grey"
                }}>
                    Latest Products
                </p>
                <div className='product_item_container mb-20 mt-10'>
                    {/* LATEST PRODUCTS WILL BE DISPLAYED HERE  */}
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>

                </div>



            </div>
        </div>
    );
};

export default Products;