import React, { useEffect, useState } from 'react';
import CustomLink from '../../utilities/CustomLink/CustomLink';
import './Header.css';
import fb from '../../assets/socials/facebook.png';
import insta from '../../assets/socials/instagram.png';
import { useLocation } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Header = ({ user, setUser }) => {

    const [logedin, setLogedin] = useState(false);

    useEffect(() => {
        user.auth ? setLogedin(true) : setLogedin(false);
    }, [user]);

    console.log(user);







    const location = useLocation();
    const match = location.pathname !== '/';

    // FUNCTION FOR NAVBAR SCROLL 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 90) {
            document.querySelector('.header-container').classList.add('header-container-bg');
            document.querySelector('.header-container').classList.add('shadow-lg');
        }
        else {
            document.querySelector('.header-container').classList.remove('header-container-bg');
            document.querySelector('.header-container').classList.remove('shadow-lg');
        }
    })



    //LOGOUT
    const auth = getAuth();
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setLogedin(false);
                console.log("loggd out....")
            }).catch((error) => {
                console.error(error);
            });
    }



    return (
        <div className={match ? 'header-container header-container-bg-not-Home' : 'header-container'}>
            <div className='header-content'>
                {/* LOGO */}
                <div>
                    <p className='p-0 m-0'
                        style={{
                            fontFamily: "Bebas Neue", fontSize: "30px"
                        }}
                    >Home-Decor-bd</p>
                </div>

                {/* LINKS  */}
                <div className='nav-links'>

                    <svg onClick={() => {
                        document.querySelector('.nav-links').classList.remove('nav-links-active');
                    }} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 nav-close-btn mb-20 mt-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/products">Products</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/ali-express">Ali-Express</CustomLink>
                    <div className='login_cart_btn'>
                        {
                            !logedin
                                ?
                                <CustomLink to="/login">Login</CustomLink>
                                :
                                <div className='flex '>
                                    {/* USER INFO  */}
                                    <div
                                        className='flex justify-center items-center px-3 shadow-xl hover_Effect'
                                        style={{
                                            cursor: "pointer"
                                        }}
                                    >

                                        {/* USER  PHOTO  */}
                                        <img src={user.photoURL}
                                            style={{
                                                borderRadius: "50%",
                                                height: "30px"
                                            }}
                                            alt=""

                                        />

                                        {/* USER NAME  */}
                                        <p className='ml-1 '
                                            style={{
                                                fontSize: "14px", fontWeight: "400"
                                            }}
                                        >{user.displayName.slice(0, 5)}</p>

                                    </div>


                                    <svg
                                        onClick={() => {
                                            signOutUser();
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 logout_btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>

                        }
                        <CustomLink to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </CustomLink>
                    </div>

                    <div className='header-social flex flex-col'>
                        {/* LOGO */}
                        <img src="" alt="" />
                        <div className='flex'>
                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={fb} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={insta} alt="" />
                            </a>

                        </div>
                    </div>

                </div>

                <svg onClick={() => {
                    document.querySelector('.nav-links').classList.add('nav-links-active');
                }} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 nav-open-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </div>
    );
};

export default Header;