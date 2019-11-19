import React from 'react';
import { Link } from 'react-router-dom';
import profile from 'assets/profile.jpg';

const AboutMe = () => {
    return (
        <section className="section has-text-centered">
            <div
                data-aos="fade-up"
                className="container box aos-init aos-animate"
            >
                <article className="media">
                    <div className="media-content">
                        <div className="content has-text-centered">
                            <h1
                                data-aos="zoom-in"
                                className="title aos-init aos-animate"
                            >
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
