import React from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.p`
    margin-top: 0.25rem;
    margin-bottom: 1.125rem;
    color: rgba(255, 255, 255, 0.329);
    font-family: 'Arial', sans-serif;
    letter-spacing: -0.025rem;
    width: 100%;
    font-size: 1em;
    line-height: 1.425;
    font-weight: 400;
`;

const Subtitle = props => {
    return <StyledSubtitle>{props.children}</StyledSubtitle>;
};

export default Subtitle;
