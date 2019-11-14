import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ to, children, className }) => {
    return (
        <NavLink exact to={to} className={className}>
            {children}
        </NavLink>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

MenuLink.defaultProps = {
    className: 'navbar-item'
};

export default MenuLink;
