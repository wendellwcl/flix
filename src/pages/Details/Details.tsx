import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Contexts
import { MoviesContext } from "../../contexts/MoviesContext";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

const Details = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>();
    const { setLoading } = useContext(MoviesContext);

    useEffect(() => {
        async function fetchMovieDetails() {
            setLoading(true);

            const movieDetails = await fetchTMDBconfig(
                `/movie/${id}?language=pt-BR`
            );

            setMovieDetails(movieDetails);
            setLoading(false);
        }

        fetchMovieDetails();
    }, []);

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
