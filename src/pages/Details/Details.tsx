import { useParams } from "react-router-dom";

//Hooks
import useFetch from "../../hooks/useFetch";

const Details = () => {
    const { id } = useParams();
    const movieDetails = useFetch({
        url: `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
    });

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
