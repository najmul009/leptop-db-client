import React from 'react';
import './Banner.css'
import banner1 from '../../images/banner.jpg'
import banner2 from '../../images/banner.jpg'
import banner3 from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <section className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row align-items-center py-5 carousel-back">
                                <div className="col-lg-6">
                                    <h1 className='carousel-font'> Find the laptop to <span className='font-color'>Fit your lifestyle</span></h1>
                                    <p className='subtitle'>We power businesses of all kinds with the smart devices, infrastructure, solutions and services.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src={banner1} className=" w-100 banner1" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center py-5 carousel-back">
                                <div className="col-lg-6">
                                    <h1 className='carousel-font'><span className='font-color'>100% Authentic</span> Smarter technology for all</h1>
                                    <p className='subtitle'>Smarter supply chains help manage disruption and propel growth.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src={banner2} className="w-100 banner2" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center py-5 carousel-back">
                                <div className="col-lg-6">
                                    <h1 className='carousel-font'><span className='font-color'>Discover</span>  a smarter way forward</h1>
                                    <p className='subtitle'>People do. Get the technology, tools, and partnership you need to make the most of it. </p>
                                </div>
                                <div className="col-lg-6">
                                    <img src={banner3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Banner;