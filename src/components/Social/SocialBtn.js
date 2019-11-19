import React from 'react';
import PropTypes from 'prop-types';

const SocialBtn = ({ type, to, children }) => {
    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={`button is-medium`}
        >
            <span className="icon">
                <i className={`fab fa-${type}`}></i>
            </span>
            <span>{children}</span>
        </a>
    );
};

SocialBtn.propTypes = {
    type: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default SocialBtn;
