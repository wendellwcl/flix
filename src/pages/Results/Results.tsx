import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

const Results = () => {
    const { query } = useParams();

    const [moviesList, setMoviesList] = useState<IMovie[]>();

    useEffect(() => {
        async function fetchMoviesList() {
            const data = await fetchTMDBconfig(`${query}&page=1`);

            setMoviesList(data.results);
        }

        fetchMoviesList();
    }, [query]);

    return (
        <div>
            {moviesList && (
                <ul>
                    {moviesList.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Results;
