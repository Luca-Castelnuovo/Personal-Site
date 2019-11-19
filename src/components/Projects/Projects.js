import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import ProjectsConfig from 'config/Projects';

const Projects = () => {
    return (
        <section className="section">
            <div className="container is-fullhd box">
                <div className="columns">
                    <div
                        data-aos="fade-up"
                        className="column aos-init aos-animate"
                    >
                        <h1
                            data-aos="zoom-in"
                            className="title aos-init aos-animate"
                        >
                            Projects
                        </h1>
                        <p className="content">
                            I have worked on several personal and professional
                            projects including this portfolio. Here are a few
                            examples:
                        </p>
                        <Link
                            to="/projects"
                            className="button is-medium is-outlined is-primary"
                        >
                            See All Projects
                        </Link>
                    </div>

                    {ProjectsConfig.slice(0, 3).map(project => {
                        return <Project key={project.title} {...project} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
