import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-container py-10'>
            <div className='home-content my-20'>


                <div className='home-text mt-5'>
                    <p className='text-xl'>Spring - Summer 2022</p>
                    <p className='my-5 text-5xl'>
                        <span className='font-bold'>FLASH SALE OF 70%</span> <br />
                        <span className='font-bold'>BEST OF COLLECTION</span>
                    </p>
                    <p>
                        You are one step away to bring your dream ideas to reality. We are here o help you to build software,mobile appkications, data driven solutions.
                    </p>
                    <button onClick={() => {
                        navigate('./products');
                    }}
                        className='appointment-btn mt-7 mb-10'>
                        Shop Now
                    </button>
                </div>
                <div className='home-img'>

                </div>



            </div>
        </div>
    );
};

export default Home;