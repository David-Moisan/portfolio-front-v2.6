import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogListPost from "../components/Blog/components/BlogListPost";
import { CrossError, Spinner } from "../utils/loadingStyle";


export default function BlogListPage()
{
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
                console.error("Erreur lors de la récupération de la donnée", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error) return <CrossError className="fa fa-times" aria-hidden="true" />

    return (
        <div>
            <BlogListPost blog={blog} />
        </div>
    )
}