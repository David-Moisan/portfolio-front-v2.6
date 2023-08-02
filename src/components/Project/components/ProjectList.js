import React from 'react';
import {
    Container,
    Section,
    Title,
} from '../../../utils/globalSection';
import AnimLetter from '../../Animation/AnimationLetter';
import {
    MainProjectContainer,
    ProjectBlankLinkBtn,
    ProjectContent,
    ProjectDescription,
    ProjectDetail,
    ProjectDetailContainer,
    ProjectImageWrapper,
    ProjectLink,
    ProjectLinkBtn,
    ProjectPreview,
    ProjectTechList,
    ProjectTechTag,
    ProjectTitle,
    ProjectWrapper,
} from '../WorkStyle'
import { BackBtn } from '../../Topic/DetailStyle';
import { Link } from 'react-router-dom';

export default function ProjectList(props) {
    
    const { projects } = props;

    return (
        <Container>
            <Section>
                <BackBtn>
                    <Link to="/">Retour</Link>
                </BackBtn>
                <Title style={{ textAlign: 'center'}}>
                    <AnimLetter text="Tous les projets" />
                </Title>
                <MainProjectContainer>
                    {projects.map((project) => (
                        <ProjectWrapper key={project.id}>
                        <ProjectContent>
                            <ProjectDetail>
                                <ProjectDetailContainer>
                                    <ProjectTitle>
                                        {project.title}
                                    </ProjectTitle>
                                    <ProjectDescription>
                                        {project.description}
                                    </ProjectDescription>
                                    <ProjectLink>
                                        <ProjectLinkBtn to={`/project/${project.id}`}>
                                            Voir détails
                                        </ProjectLinkBtn>

                                        <ProjectBlankLinkBtn href={project.link} target='_blank'>
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
        </Container>
    )
}