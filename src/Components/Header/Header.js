import React from 'react';
import './header.css'
import logo from '../../images/logo.png'
import CustomLink from '../CoustomLink/CoustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg fixed-top shadow">
                <div className="container-fluid">
                    <div  className='navbar-margin d-flex justify-content-center align-items-center'>
                        <img className='logo' width={70} src={logo} alt="" />
                        <p className='fw-bold font-size logo-text'>Leptop<span className='text-success'>DB</span></p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/inventory'>Inventory</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                {
                                    user &&
                                    <CustomLink className='uNone' to='/additem'>AddFruits</CustomLink>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    user &&
                                    <CustomLink className='uNone' to='/myItems'>My Items</CustomLink>
                                }
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item ms-auto left">
                                {user ?
                                    <button onClick={logout} className='login-btn fw-bold'>Sign Out</button>
                                    :
                                    <CustomLink className='uNone login-btn rounded' to='/login'><span className='text-shadow'>Login</span></CustomLink>}
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
        </div>
    );
};

export default Header;