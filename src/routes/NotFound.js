import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="hero is-primary is-fullheight has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">404</h1>
                    <h2 className="subtitle is-2">page not found</h2>
                    <Link
                        to="/"
                        className="button is-large is-outlined is-secundary is-light"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
