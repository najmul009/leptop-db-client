import React, { useRef } from 'react';
import './login.css';
import login from '../../images/login.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import axios from 'axios';
import CustomLink from '../CoustomLink/CoustomLink';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)

        const { data } = await axios.post('https://serene-temple-04971.herokuapp.com/login', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true })
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        toast('Sent Email . Please check your email dear.');
    }

    let errorElement
    if (error) {
        errorElement = <p style={{ fontSize: '10px', color: 'red' }} className='d-flex justify-content-center'>Error: {error.message}</p>
    }

    if (loading) {
        return <p className='text-center text-warning'>Loading...</p>;
    }
    return (
        <div className='container login-con'>
            <div className="row">
                <div className="col-lg-6">
                    <img className='login-img' src={login} alt="" />
                </div>
                <div className="col-lg-6 login-doc">
                    <div className='login-container'>
                        <form onSubmit={handleLogin} className='login mt-5 p-3 shadow'>
                            <h3 className='text-center mt-3'>Login</h3>
                            <div className='d-flex justify-content-center flex-column line mt-4'>
                                <label htmlFor="email"><strong>Email</strong></label> <br />
                                <input className='border-0 p-2 rounded' ref={emailRef} type="email" name="" id="1" required />
                            </div>
                            <div className='d-flex justify-content-center flex-column line mt-4'>
                                <label htmlFor="email"><strong>Password</strong></label> <br />
                                <input className='border-0 p-2 rounded' ref={passwordRef} type="password" name="" id="2" required />
                            </div>
                            <button className='container border-0 mt-4 btn-primary rounded p-2'><strong>Login</strong></button>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                                <small className=' fs-6 mt-1'>Not Registered Yet?</small><CustomLink className='link-color fs-6 font ms-2' to='/signUp'>Create new Account</CustomLink>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-2'>
                                <small className=' fs-6'>Forget Password?</small>
                                <button onClick={resetPassword} className='fs-6  border-0 font link-color'>Reset Password</button>
                            </div>
                            {errorElement}
                            <div className='d-flex justify-content-around'>
                                <hr />
                                <span>or</span>
                                <hr />
                            </div>
                            <SocialSignIn></SocialSignIn>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;