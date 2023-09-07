import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

const Details = () => {
    const { id } = useParams();

    const { setLoading } = useContext(LoadingContext);

    const [movieDetails, setMovieDetails] = useState<any>();

    useEffect(() => {
        async function fetchMovieDetails() {
            const movieDetails = await fetchTMDBconfig(
                `/movie/${id}?language=pt-BR`
            );

            setMovieDetails(movieDetails);
        }

        setLoading(true);
        fetchMovieDetails();
        setLoading(false);
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
