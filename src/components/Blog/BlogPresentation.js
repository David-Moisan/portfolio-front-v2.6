import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BigBackgroundFont from "../BigFont/BigBackgroundFont";
import ScrollDown from "../Scroll/ScrollDown";
import { Section } from "../../utils/globalSection";
import {
    BlogWrapper,
    BlogPost,
    BlogCategory,
    BlogContent,
    BlogTitle,
    BlogFooter,
} from "./BlogStyle";
import axios from "axios";

export default function BlogPresentation() {
    const [blog, setBlog] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('https://portfolio-back-v26-production.up.railway.app/blog')
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données du blog", error);
                setError(true);
                setLoading(false);
            })
    }, []);

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    return (
        <Section>
            <BigBackgroundFont text="Blog" />
            <ScrollDown />
            <BlogWrapper>
                {blog.slice(0,6).map((article) => (
                    <BlogPost key={article.id} style={{ borderTop: '2px solid' + article.category.color}}>
                        <BlogCategory style={{ color: article.category.color }}>
                            {article.category.type}
                        </BlogCategory>
                        <BlogContent>
                            <BlogTitle>
                                <h5>
                                    <Link to={`/blog/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h5>
                            </BlogTitle>
                            <div>{article.description}</div>
                        </BlogContent>
                    </BlogPost>
                ))}
            </BlogWrapper>
            <BlogFooter>
                <Link to="/blog">Lire plus d'articles</Link>
            </BlogFooter>
        </Section>
    )
}