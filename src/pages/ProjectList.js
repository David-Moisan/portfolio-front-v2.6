import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProjectList from '../components/Project/components/ProjectList';
import { Spinner, CrossError } from '../utils/loadingStyle';

export default function ProjectListPage() 
{
    const [projects, setProjects] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/project')
            .then((response) => {
                setProjects(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if(isLoading) return <Spinner className="fa fa-spinner" aria-hidden="true" />;
    if(error) return <CrossError className="fa fa-times" aria-hidden="true" />;

    return (
        <>
            <ProjectList projects={projects} />
        </>
    )
}