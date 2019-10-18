import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: block;
    margin-bottom: 0.5rem;
    text-decoration: none;
    font-weight: bolder;
    padding: 10px;
    border: solid 1px;
    color: blue;
`;

const Button = props => {
    return <StyledLink to={props.src}>{props.children}</StyledLink>;
};

export default Button;
