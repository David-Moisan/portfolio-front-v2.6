import React from "react";
import { Container, Section, Title } from "../../../utils/globalSection";
import BigBackgroundFont from "../../BigFont/BigBackgroundFont";
import { BlogCategory, BlogContent, BlogImgContainer, BlogPost, BlogTitle, BlogWrapper } from "../BlogStyle";
import { Link } from "react-router-dom";
import { BackBtn } from "../../Topic/DetailStyle";
import AnimLetter from "../../Animation/AnimationLetter";

export default function BlogListPost(props) 
{
    const { blog } = props;

    return(
        <Container>
            <Section>
                <BackBtn>
                    <Link to="/">Retour</Link>
                </BackBtn>
                <Title style={{ textAlign: 'center'}}>
                    <AnimLetter text="Tous les articles" />
                </Title>
                <BigBackgroundFont text="Blog"/>
                <BlogWrapper>
                    {blog.map((article) => (
                        <BlogPost key={article.id} style={{ borderTop: '2px solid' + article.category.color}}>
                            <BlogCategory style={{ color: article.category.color }}>
                                {article.category.type}
                            </BlogCategory>
                            <BlogContent>
                                <BlogTitle>
                                    <h5><Link to={`/blog/${article.slug}`}>{article.title}</Link></h5>
                                </BlogTitle>
                                <div>{article.description}</div>
                                <BlogImgContainer to={`/blog/${article.slug}`}>
                                    <img src={article.thumbnail} alt={article.title} />
                                </BlogImgContainer>
                            </BlogContent>
                        </BlogPost>
                    ))}
                </BlogWrapper>
            </Section>
        </Container>
    )
}