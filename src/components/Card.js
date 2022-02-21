import React from 'react';
import PropTypes from 'prop-types';
import Img from '../theme/assets/dustin-lee-19667-unsplash.png';

export const BlogCard = ({ title, description }) => {

    return (
        <div className="blog-card">
            <img src={Img} alt="..." />
            <div className="wrapper">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
        </div>
    )

};

BlogCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};