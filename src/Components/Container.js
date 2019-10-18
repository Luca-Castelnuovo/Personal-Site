import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    position: relative;
    max-width: 100%;
    z-index: 1;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    background-color: rgba(34, 36, 43, 0.859);
    border-radius: 2rem 2rem 2rem 2rem;
    transition: opacity 1s ease 0s, transform 1s ease 0s;
`;

const Container = props => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
