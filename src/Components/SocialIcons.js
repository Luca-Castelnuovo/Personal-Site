import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StyledIcons = styled.div`
    margin-top: 1rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    font-size: 2.5rem;
    margin-right: 1rem;
    background-color: transparent;

    &:visited {
        color: black;
    }
`;

const SocialIcons = () => {
    return (
        <StyledIcons>
            <StyledLink to="/redirect/linkedin">
                <FaLinkedin />
            </StyledLink>
            <StyledLink to="/redirect/github">
                <FaGithub />
            </StyledLink>
            <StyledLink to="/redirect/cv">
                <FaFilePdf />
            </StyledLink>
            <StyledLink to="/redirect/mail">
                <FaEnvelope />
            </StyledLink>
        </StyledIcons>
    );
};

export default SocialIcons;
