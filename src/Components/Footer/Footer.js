import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 compo">
                        <h3 className='ms-3'>Inventory</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Manage compo</Link></li>
                            <li><Link to='/blogs'>QNA</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 compo">
                        <h3 className='ms-3'>About</h3>
                        <ul>
                            <li><Link to='/about'>Contact</Link></li>
                            <li><Link to='/about'>Email</Link></li>
                            <li><Link to='/about'>Address</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 compo text">
                        <h3>Leptop DB</h3>
                        <p>Be inspired by incredible people closing the digital divide and building a more sustainable world. </p>
                    </div>
                    <div className="col compo social">
                        <Link to='/'><i className="icon ion-social-facebook"></i></Link>
                        <Link to='/'><i className="icon ion-social-twitter"></i></Link>
                        <Link to='/'><i className="icon ion-social-snapchat"></i></Link>
                        <Link to='/'><i className="icon ion-social-instagram"></i></Link>
                    </div>
                </div>
                <p className="copyright">Leptop DB © 2022</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;