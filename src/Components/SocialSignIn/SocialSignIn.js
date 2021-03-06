import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/Google.png'
import './SocialSignIn.css'

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from,{replace:true})
    }

    let errorElement
    if (error) {
        errorElement = <p style={{ fontSize: '10px', color: 'red' }} className='d-flex justify-content-center'>Error: {error.message}</p>
    }
    if (loading) {
        return <p className='text-center text-warning'>Loading...</p>;
    }
    return (
        <div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center '>
                <button className=' border-0 fw-bolder btn btn-info' onClick={() => signInWithGoogle()}><img src={google} alt="" />Google Sign IN</button>
            </div >
        </div>
    );
};

export default SocialSignIn;