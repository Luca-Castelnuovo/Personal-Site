import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <section className="section has-text-centered ">
            <div className="container box">
                <div className="buttons is-centered">
                    <Link
                        to="/redirect/github"
                        className="button is-social github is-medium"
                    >
                        <span className="icon">
                            <i className="fab fa-github"></i>
                        </span>
                        <span>GitHub</span>
                    </Link>
                    <Link
                        to="/redirect/linkedin"
                        className="button is-social linkedin is-medium"
                    >
                        <span className="icon">
                            <i className="fab fa-linkedin"></i>
                        </span>
                        <span>Linkedin</span>
                    </Link>
                    <Link
                        to="/redirect/instagram"
                        className="button is-social instagram is-medium"
                    >
                        <span className="icon">
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span>Instagram</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Social;
