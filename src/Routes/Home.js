import React from 'react';
// import Button from 'Components/Button';
import ProfilePicture from 'Components/ProfilePicture';
import Title from 'Components/Title';
import SubTitle from 'Components/Subtitle';
import SocialIcons from 'Components/SocialIcons';

const Home = () => {
    return (
        <>
            <section>
                <ProfilePicture />
                <Title>Luca Castelnuovo</Title>
                <SubTitle>Web Developer & Ethical Hacker</SubTitle>
            </section>
            {/* <section>
                <Button src="/projects">Projects</Button>
                <Button src="/redirect/cv">CV</Button>
            </section> */}
            <section>
                <SocialIcons />
            </section>
        </>
    );
};

export default Home;
