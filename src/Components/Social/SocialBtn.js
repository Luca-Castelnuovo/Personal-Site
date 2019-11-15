import React from 'react';
import { Link } from 'react-router-dom';

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

export default SocialBtn;
