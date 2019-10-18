import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 1.5625rem 1.5625rem 1.5625rem 1.5625rem;
`;

const Wrapper = props => {
    return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Wrapper;
