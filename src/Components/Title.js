import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    letter-spacing: -0.075rem;
    width: 100%;
    font-size: 2.25em;
    line-height: 1.175;
    font-weight: 400;
    color: #ffffff;
`;

const Title = props => {
    return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
