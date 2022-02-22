import React, { useEffect } from 'react';
import { BlogCard } from '../../components/Card';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../store/actions/blogActions';

import Product from '../../theme/assets/product-image.png';
import Hero from '../../theme/assets/hero-image.png';
import PartnerLogo from '../../theme/assets/partner_logo.svg';
import Navbar from '../../components/Navbar';

const Home = () => {

    const { blogs } = useSelector(state => state.blogReducers);
    const dispatch = useDispatch();

    const deviceWidth = window.innerWidth;

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [deviceWidth]);

    return (
        <>
            <Navbar />

            <section className="hero my-2 my-md-5 my-lg-5 d-flex align-items-center justify-content-center">
                <div className="container py-2 py-md-5 py-lg-5">
                    <div className="row mx-0">
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className="text-dark-blue">Start new... Today!</h3>
                                <p className="text-size-22 text-dark-blue">Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center mt-5 pt-4">
                        <img className="img-fluid" src={Hero} alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="product my-2 my-md-5 my-lg-5">
                <div className="container py-2 py-md-5 py-lg-5">
                    <div className="row mx-0">
                        <div className="col-12 mb-5">
                            <h2 className="section-header text-bold text-start text-md-center text-lg-center">Lorem ipsum something</h2>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center d-none d-md-flex d-lg-flex">
                            <img src={Product} alt="..." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                            <div>
                            <h6 className="text-dark-blue text-size-20 text-bold">New Product, new Story</h6>
                            <p className="text-size-18 text-black">Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus facilisis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat molestie. In hendrerit blandit ante facilisis ultrices. Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <div className="wrapper">
                        <div className="col text-center">
                            <img src={PartnerLogo} alt="..."/>
                        </div>
                        <div className="col text-center">
                            <img src={PartnerLogo} alt="..."/>
                        </div>
                        <div className="col text-center">
                            <img src={PartnerLogo} alt="..."/>
                        </div>
                        <div className="col text-center">
                            <img src={PartnerLogo} alt="..."/>
                        </div>
                        <div className="col text-center">
                            <img src={PartnerLogo} alt="..."/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 mb-5">
                <div className="container py-5">
                    <div className="row mx-0">
                        {
                            blogs?.slice(0, deviceWidth < 450 ? 2 : blogs.length )?.map((blog, index) => (
                                <div key={index} className="col-12 col-md-3 col-lg-3">
                                    <BlogCard {...blog}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row mx-0">
                        <div className="col text-center">
                            <button className="button-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}

export default Home;