import React from 'react';
import Hero from 'components/Hero';
import Projects from 'components/Projects';
import Social from 'components/Social';
import Contact from 'components/Contact';
import AboutMe from 'components/AboutMe';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <AboutMe />
            <Contact />
            <h5 data-aos="fade-down" className="is-size-5 has-text-centered">
                Or
            </h5>
            <Social />
        </>
    );
};

export default Home;
