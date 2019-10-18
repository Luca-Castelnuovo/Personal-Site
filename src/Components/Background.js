import React from 'react';
import styled from 'styled-components';
import bgImage from 'Assets/images/bg.jpg';

const StyledBackground = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;

    background-attachment: scroll;
    background-position: 0% 0%, center;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    background-color: #ffffff;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`;

const Background = props => {
    return (
        <StyledBackground
            style={{
                backgroundImage: `linear-gradient(to top, rgba(175,175,201,0.42), rgba(175,175,201,0.42)), url(${bgImage})`
            }}
        >
            {props.children}
        </StyledBackground>
    );
};

export default Background;
