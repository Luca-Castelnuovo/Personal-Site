import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
    title,
    image,
    description,
    tags,
    github_link,
    demo_link
}) => {
    return (
        <div data-aos="zoom-in-left" className="column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{title}</p>
                    {description && (
                        <div className="content">{description}</div>
                    )}
                    {tags.length > 0 && (
                        <div className="content">
                            <div className="tags are-medium">
                                {tags.map(tag => {
                                    return (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <footer className="card-footer">
                    {demo_link && (
                        <p className="card-footer-item">
                            <span>
                                <a
                                    href={demo_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            </span>
                        </p>
                    )}
                    {github_link && (
                        <p className="card-footer-item">
                            <span>
                                <a
                                    href={github_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </span>
                        </p>
                    )}
                </footer>
            </div>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.array.isRequired,
    github_link: PropTypes.string,
    demo_link: PropTypes.string
};

export default Project;
