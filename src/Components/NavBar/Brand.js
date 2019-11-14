import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    const classes = classNames('navbar-burger', 'burger', {
        'is-active': hamburgerOpen
    });

    return (
        <div className="navbar-brand">
            <div className={classes} onClick={toggleHamburger}>
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};

Brand.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    toggleHamburger: PropTypes.func.isRequired
};

export default Brand;
