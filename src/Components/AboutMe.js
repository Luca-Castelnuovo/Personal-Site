import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section className="section has-text-centered">
            <div className="container box">
                <article className="media">
                    <div className="media-content">
                        <div className="content has-text-centered">
                            <h1 className="title">About Me</h1>
                            <figure
                                className="image is-128x128"
                                style={{ margin: '0 auto 2rem' }}
                            >
                                <img
                                    className="is-rounded"
                                    src="https://lucacastelnuovo.nl/static/media/profile.c08cbefd.jpg"
                                    alt="Avatar"
                                />
                            </figure>

                            <p className="content">
                                As a Front-End Developer, I have been enjoying
                                bringing design concepts to life through
                                HTML/CSS &amp; JS technologies. Placing special
                                attention on mobile friendly and pixel perfect
                                development.
                            </p>

                            <Link
                                to="/redirect/cv"
                                className="button is-medium"
                            >
                                <span className="icon">
                                    <i className="fas fa-file-pdf"></i>
                                </span>
                                <span>Resume</span>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default AboutMe;
