import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import { Link } from 'react-router-dom';
import Project from 'Components/Projects/Project';
import ProjectsConfig from 'Config/Projects';

const Projects = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="level is-mobile">
                        <div className="level-item level-left">
                            <Link to="/">
                                <span className="icon is-large has-text-dark">
                                    <i className="fas fa-2x fa-arrow-left"></i>
                                </span>
                            </Link>
                            <h1 className="title">Projects</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container has-text-centered is-fullhd box">
                    <div className="columns">
                        {ProjectsConfig.map(project => {
                            return <Project {...project} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default withBaseRoute(Projects);
