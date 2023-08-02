import React, { useEffect, useState } from "react";
import { Section, Title } from "../../utils/globalSection";
import AnimLetter from "../Animation/AnimationLetter";
import BigBackgroundFont from "../BigFont/BigBackgroundFont"
import { Spinner, CrossError } from '../../utils/loadingStyle';
import {
    WorkWrapper,
    WorkHeader,
    WorkDescription,
    WorkLink,
    MainProjectContainer,
    ProjectWrapper,
    ProjectContent,
    ProjectDetail,
    ProjectDetailContainer,
    ProjectTitle,
    ProjectDescription,
    ProjectLink,
    ProjectLinkBtn,
    ProjectBlankLinkBtn,
    ProjectPreview,
    ProjectImageWrapper,
    ProjectTechList,
    ProjectTechTag,
} from './WorkStyle'
import Button from "../Button/Button";
import axios from "axios";

export default function Work() {

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

    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
    const limitedProjects = sortedProjects.slice(0, 4);
   
    return (
        <Section>
            <BigBackgroundFont text="Work" />
            <WorkWrapper>
                <div>
                    <WorkHeader>
                        <Title>
                            <AnimLetter text="Mon Travail" />
                        </Title>
                        <WorkDescription>
                            Voici une petite galerie de projets que j'ai
                            réalisés pendant ma reconversion, ou sur mon temps
                            libre. <br />
                            Es-tu intéressé ? Va voir{' '}
                            <WorkLink to="/project">mon travail</WorkLink>{' '}
                        </WorkDescription>
                    </WorkHeader>
                </div>
                <div>
                    <Button route="/project" text="Voir plus !" />
                </div>
            </WorkWrapper>
            <MainProjectContainer>
                {limitedProjects.map((project) => (
                    <ProjectWrapper key={project.id} >
                        <ProjectContent>
                            <ProjectDetail>
                                <ProjectDetailContainer>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                    <ProjectLink>
                                        <ProjectLinkBtn to={`/project/${project.id}`} >
                                            Voir détails
                                        </ProjectLinkBtn>
                                        <ProjectBlankLinkBtn href={project.link} target="_blank">
                                        {project.title === 'Open The Way - PC Game' ? (
                                                    <i className='fa fa-youtube fa-2x' aria-hidden="true"></i>
                                                ) : (
                                                    <i className='fa fa-github fa-2x' aria-hidden="true"></i>
                                                )}
                                        </ProjectBlankLinkBtn>
                                    </ProjectLink>
                                </ProjectDetailContainer>
                            </ProjectDetail>
                            <ProjectPreview>
                                <ProjectImageWrapper>
                                    <img src={project.thumbnail} alt={project.title} />
                                </ProjectImageWrapper>
                                <ProjectTechTag>
                                    <ProjectTechList>
                                        {Object.values(project.lang).map((lang, index) => (
                                            <li key={index}>{lang}</li>
                                        ))}
                                    </ProjectTechList>
                                </ProjectTechTag>
                            </ProjectPreview>
                        </ProjectContent>
                    </ProjectWrapper>
                ))}
            </MainProjectContainer>
        </Section>
    )
}