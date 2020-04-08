import React from 'react';
import { Link } from 'react-router-dom';
import Project from 'components/Projects/Project';
import useProjects from 'hooks/useProjects';

const Projects = () => {
    const projects = useProjects();

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
                    <div className="columns is-multiline">
                        {projects &&
                            projects.map((project) => {
                                return (
                                    <Project key={project.title} {...project} />
                                );
                            })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
