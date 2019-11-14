import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen
    });

    return (
        <div className={classes}>
            <div className="navbar-end">
                <MenuLink to="/projects">Projects</MenuLink>
                <MenuLink to="/about">About</MenuLink>

                <MenuBtn to="/contact">
                    {/* <span className="icon">
                        <i className="fas fa-address-book"></i>
                    </span> */}
                    <span>
                        Contact Me{' '}
                        <span role="img" aria-label="emoji">
                            👋
                        </span>
                    </span>
                </MenuBtn>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired
};

export default Menu;
