import React from 'react';
import withBaseRoute from 'utils/withBaseRoute';
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
            <h5 className="is-size-5 has-text-centered">Or</h5>
            <Social />
        </>
    );
};

export default withBaseRoute(Home);
