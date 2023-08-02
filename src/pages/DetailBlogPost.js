import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CrossError, ErrorWrapper, Spinner } from "../utils/loadingStyle";
import { Container, Section } from "../utils/globalSection";
import { 
    BackBtn, 
    DetailContent, 
    DetailHeader, 
    DetailInfo, 
    DetailWrapper, 
    DetailTitle,
    DetailSubtitle,
    ResponsiveImage
} from '../components/Topic/DetailStyle'

export default function DetailBlogPostPage()
{
    const { id } = useParams()

    const [blog, setBlog] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        axios
          .get(`https://portfolio-back-v26-production.up.railway.app/blog/${id}`)
          .then((response) => {
            console.log(response.data);
            setBlog(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération de données", error);
            setError(true);
            setLoading(false);
          });
      }, [id]);

    const article = blog

    if (isLoading || !article || !article.body) {
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    }

    if (error) 
        return (
            <Section>
                <ErrorWrapper>
                    <div>Cet article n'existe pas encore !</div>
                    <CrossError className="fa fa-times" aria-hidden="true" />
                </ErrorWrapper>
            </Section>
        )

    return  (
        <Container>
            <Section>
                <BackBtn>
                    <Link to="/blog">Retour</Link>
                </BackBtn>
                <DetailWrapper>
                    <DetailContent>
                        <DetailHeader>
                            <DetailTitle>{article.title}</DetailTitle>
                            <div style={{ color: article.category.color }}>{article.category.type}</div>
                        </DetailHeader>
                        <DetailInfo>
                            <DetailSubtitle>{article.body.intro.title}</DetailSubtitle>
                            <p>{article.body.intro.text}</p>
                            <br/>
                            {Object.entries(article.body.chapters).map(([chapterKey, chapter]) => (
                                <div key={chapterKey} style={{ marginTop: "1.21rem"}} >
                                    <h3>{chapter.title}</h3>
                                    {chapter.image && <ResponsiveImage src={chapter.image} alt={chapter.title}/>}
                                    <p>
                                        {Array.isArray(chapter.text) ? (
                                            chapter.text.map((paragraph, index) => <li key={index} style={{ listStyle: "none"}}>{paragraph}</li>)
                                        ) : (
                                            <li style={{ listStyle: "none"}}>{chapter.text}</li>
                                        )}
                                    </p>
                                </div>
                            ))}
                            <br />
                            <DetailSubtitle>{article.body.outro.title}</DetailSubtitle>
                            <p>
                                {Array.isArray(article.body.outro.text) ? (
                                    article.body.outro.text.length === 1 ? (
                                        article.body.outro.text[0]
                                    ) : (
                                        article.body.outro.text.map((paragraph, index) => (
                                            <li key={index} style={{ listStyle: "none" }}>
                                              {paragraph}
                                            </li>
                                          ))
                                    )
                                ) : (
                                    article.body.outro.text
                                )}
                            </p>
                        </DetailInfo>
                    </DetailContent>
                </DetailWrapper>
            </Section>
        </Container>
    )
}