import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SocialBtn = ({ type, children }) => {
    return (
        <Link to={`/redirect/${type}`} className={`button is-medium`}>
            <span className="icon">
                <i className={`fab fa-${type}`}></i>
            </span>
            <span>{children}</span>
        </Link>
    );
};

SocialBtn.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default SocialBtn;
