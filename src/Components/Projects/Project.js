import React from 'react';

const Project = ({
    title,
    image,
    description,
    tags,
    github_link,
    demo_link
}) => {
    return (
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{title}</p>
                    <div className="content">{description}</div>
                    {tags.length > 0 && (
                        <div className="content">
                            <div className="tags are-medium">
                                {tags.map(tag => {
                                    return <span className="tag">{tag}</span>;
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

export default Project;
