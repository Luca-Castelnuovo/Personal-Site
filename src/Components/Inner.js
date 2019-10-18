import React from 'react';
import styled from 'styled-components';

const StyledInner = styled.div`
    position: relative;
    z-index: 1;
    border-radius: inherit;
    padding: 3.125rem 2.5rem;
    max-width: 100%;
    width: 25rem;
`;

const Inner = props => {
    return <StyledInner>{props.children}</StyledInner>;
};

export default Inner;
