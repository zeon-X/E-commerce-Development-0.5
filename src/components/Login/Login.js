import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css';
import ggl from '../../assets/socials/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png';
import fb from '../../assets/socials/facebook.png';

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "firebase/auth";

import { app } from '../../firebase.init';


const auth = getAuth(app);









const Login = ({ setUser }) => {
    // console.log(props.setUser)
    const [reg, setReg] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    // const [, set] = useState('');






    // LOGIN 
    const googleProvider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                // console.log(res.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error)
            })
    }



    // REGISTER 

    const handleCreateUserWithEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                handleUserProfileUpdate();
                console.log(res.user);

                Swal.fire(
                    'Success',
                    'Successfully Registered. Go to Login Page',
                    'success'
                ).then(() => {
                    clearStates();
                    setReg(false);
                })

            })
            .catch(error => {
                console.log(error)
            })
    }




    // UPDATE PROFILE 

    const handleUserProfileUpdate = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log("profile updated...")
            })
            .catch(error => {
                console.error(error)
            })
    }

    const clearStates = () => {
        setName(''); setPhoto('');
        // setEmail(''); setPassword('');
    }



    return (
        <div className='login_container my-20'>
            <div className='login_content'>

                {reg &&
                    <div>
                        < input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name.." />
                        < input type="text" value={photo} onChange={(event) => setPhoto(event.target.value)} placeholder="Photo URL.." />
                    </div>
                }

                {/* <label for="fname">Email</label> */}
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email.." />

                {/* <label for="fname">Password</label> */}
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password.." />

                <button
                    onClick={reg ? handleCreateUserWithEmailPassword : handleSignInWithEmailPassword}
                    className='sign_in_btn mt-2'
                    style={{
                        backgroundColor: "#ff9900",
                        border: "1px solid #ff9900",
                        color: "white"
                    }}
                >{reg ? 'Register' : 'Login'}</button>




                <div className='mt-2' style={{ fontSize: "13px" }}>

                    {
                        !reg
                            ?
                            <div className='flex justify-between'>
                                <button className='text-left text-blue-700' >Forget Password?</button>

                                <button
                                    onClick={() => setReg(!reg)}
                                    className='text-left text-blue-700'
                                >Don't have account? Register Now</button>
                            </div>

                            :

                            <div className='flex justify-between'>
                                Alradey have an account?
                                <button
                                    onClick={() => setReg(!reg)}
                                    className='text-left text-blue-700'
                                >Login Now</button>
                            </div>
                    }

                </div>













                <p className='mt-10 mb-5 text-center' style={{ color: "#ff9900" }}>Or Login using..</p>










                <button
                    onClick={
                        handleSignInWithGoogle
                    }
                    className='sign_in_btn google_btn flex justify-center items-center my-3'>
                    <img
                        src={ggl}
                        alt=""
                        className='pr-3'
                        style={{
                            height: "35px"
                        }} />
                    Sign in with Google
                </button>


                <button className='sign_in_btn fb_btn flex justify-center items-center my-3'>
                    <img
                        src={fb}
                        alt=""
                        className='pr-3'
                        style={{
                            height: "35px"
                        }} />
                    Sign in with Facebook
                </button>


            </div>
        </div>
    );
};

export default Login;