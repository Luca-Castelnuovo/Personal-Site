import { useState, useEffect } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState(null);
    const projectsLocal = sessionStorage.getItem('projects');

    useEffect(() => {
        if (projectsLocal) {
            return;
        }

        const fetchData = async () => {
            const response = await fetch(
                'https://cms.lucacastelnuovo.nl/api/collections/get/portfolio'
            );
            const json = await response.json();

            setProjects(json.entries);
            sessionStorage.setItem('projects', JSON.stringify(json.entries));
        };

        fetchData();
    }, [projectsLocal]);

    if (projectsLocal) {
        return JSON.parse(projectsLocal);
    }

    return projects;
};

export default useProjects;
