import React from 'react';
import styled from 'styled-components';
import profilePicture from 'Assets/images/profile.jpg';

const ImageContainer = styled.div`
    overflow: hidden;
    display: block;
    max-width: 100%;
    position: relative;
    margin-bottom: 1.5rem;
`;

const Image = styled.img`
    border-radius: 100%;
    width: 7rem;
    display: inline-block;
    vertical-align: top;
`;

const ProfilePicture = () => {
    return (
        <ImageContainer>
            <Image src={profilePicture} alt="Luca Castelnuovo" />
        </ImageContainer>
    );
};

export default ProfilePicture;
