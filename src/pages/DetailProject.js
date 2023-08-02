import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Link, useParams } from "react-router-dom";
import { Spinner, CrossError, ErrorWrapper } from "../utils/loadingStyle";
import { Container, Section } from "../utils/globalSection";
import {
    BackBtn,
    DetailHeader,
    DetailWrapper,
    DetailLink,
    DetailInfo,
    DetailContent,
    DetailTitle,
    DetailSubtitle,
    DetailText,
    DetailFooter,
    DetailFooterLink,
    DetailFooterLinkButton,
    ResponsiveImage,
    ResponsiveYouTubeContainer
} from '../components/Topic/DetailStyle.js'
import axios from "axios";

export default function DetailProjectPage() {
    const { id } = useParams()

    const [project, setProject] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getYouTubeVideoId = (url) => {
        const regex = /(?:\/watch\?v=|youtu\.be\/|\/embed\/)([\w-]+)/;
        const match = url.match(regex);
        return match ? match[1] : '';
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/project/${id}`)
            .then((response) => {
                setProject(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données", error)
                setError(true);
                setLoading(false)
            })
    }, [id]);

    if (isLoading) return <Spinner className="fa fa-spinner" aria-hidden="true" />;
    if (error)
        return (
            <Section>
                <ErrorWrapper>
                    <div>Ce projet n'existe pas encore !</div>
                    <CrossError className="fa fa-times" aria-hidden="true" />
                </ErrorWrapper>
            </Section>
        )

    return (
        <Container>
            <BackBtn>
                <Link to="/project">Retour</Link>
            </BackBtn>
            <DetailWrapper>
                <DetailContent>
                    <DetailHeader>
                        <h1>{project.title}</h1>
                        <DetailLink>
                            <a target="_blank" rel="noreferrer" href={project.link}>
                                <i className="fa fa-github fa-2x"></i>
                            </a>
                        </DetailLink>
                    </DetailHeader>
                    <DetailInfo>
                        <DetailTitle>{project.idea.title}</DetailTitle>
                        <DetailText>{project.idea.body}</DetailText>
                        <br />
                        <DetailSubtitle>{project.stack.title}</DetailSubtitle>
                        <ResponsiveImage src={project.stack.image} alt={project.stack.title} />
                        <p>{project.stack.text}</p>
                        <br />
                        <DetailSubtitle>{project.result.title}</DetailSubtitle>
                        <ResponsiveYouTubeContainer>
                            {project.result.video ? (
                                <YouTube videoId={getYouTubeVideoId(project.result.video)} />
                            ) : null}
                        </ResponsiveYouTubeContainer>
                        <br />
                        <DetailFooter>
                            <p>{project.footer.text}</p>
                            <DetailFooterLink>
                                <li>
                                    <DetailFooterLinkButton href={project.footer.github} target="_blank">
                                        <i className="fa fa-github"></i>
                                    </DetailFooterLinkButton>
                                </li>
                                <li>
                                    <DetailFooterLinkButton href={project.footer.linkedin} target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </DetailFooterLinkButton>
                                </li>
                                <li>
                                    <DetailFooterLinkButton href={project.footer.twitter} target="_blank">
                                        <i className="fa fa-twitter"></i>
                                    </DetailFooterLinkButton>
                                </li>
                            </DetailFooterLink>
                        </DetailFooter>
                    </DetailInfo>
                </DetailContent>
            </DetailWrapper>
        </Container>
    )
}