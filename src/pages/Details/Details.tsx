import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>();

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWI4MzU0YjU4NWE0YTg0ZWViMDJjM2QyNjE5ZjRiMCIsInN1YiI6IjY0ZGNmOWY4Yjc3ZDRiMTEzZTA1YjliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqzvfG38tW3kda0vaomH5MPm_I9_nhLJovUutbFTRro",
            },
        };

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
            options
        )
            .then((response) => response.json())
            .then((response) => setMovieDetails(response))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div>
            {movieDetails && (
                <div>
                    <div>{id}</div>
                    <div>{movieDetails.title}</div>
                    <div>{movieDetails.tagline}</div>
                    <div>{movieDetails.overview}</div>
                    <div>{movieDetails.runtime}</div>
                    <div>{movieDetails.vote_average}</div>
                </div>
            )}
        </div>
    );
};

export default Details;
