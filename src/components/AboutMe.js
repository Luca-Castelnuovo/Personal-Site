import React from 'react';
import profile from 'assets/profile.jpg';

const AboutMe = () => {
    return (
        <section className="section has-text-centered">
            <div data-aos="fade-up" className="container box">
                <article className="media">
                    <div className="media-content">
                        <div className="content has-text-centered">
                            <h1 data-aos="zoom-in" className="title">
                                About Me
                            </h1>
                            <figure
                                className="image is-128x128"
                                style={{ margin: '0 auto 2rem' }}
                            >
                                <img
                                    className="is-rounded"
                                    src={profile}
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

                            <a
                                href="https://castelnuovo.xyz/cv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button is-medium"
                            >
                                <span className="icon">
                                    <i className="fas fa-file-pdf"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default AboutMe;
