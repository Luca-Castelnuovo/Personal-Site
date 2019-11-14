import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import NavBar from 'Components/NavBar';
import Hero from 'Components/Hero';
import Projects from 'Components/Projects';
import Social from 'Components/Social';
import Contact from 'Components/Contact';
import AboutMe from 'Components/AboutMe';

const Home = () => {
    return (
        <>
            <NavBar />
            {/* <Hero /> */}
            <Projects />
            <AboutMe />
            <Contact />
            <h5 className="is-size-5 has-text-centered">Or</h5>
            <Social />
        </>
    );
};

export default withBaseRoute(Home);
