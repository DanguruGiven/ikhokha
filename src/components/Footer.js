import React from 'react';
import Logo from '../theme/assets/footer_logo.svg';

const Footer = () => {

    return (
        <section className="footer">
            <div className="container">
                <div className="row mx-0">
                    <div className="col">
                        <img src={Logo} alt=".." />
                        <p>All rights reserved &copy;</p>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Footer;