import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

import { MoviesContext } from "../../contexts/MoviesContext";

//Components
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";

//Style
import style from "./Results.module.css";

const Results = () => {
    const { query } = useParams();

    const { setLoading } = useContext(MoviesContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();

    useEffect(() => {
        async function fetchMoviesList() {
            setLoading(true);

            const data = await fetchTMDBconfig(`${query}&page=1`);

            setMoviesList(data.results);
            setLoading(false);
        }

        fetchMoviesList();
    }, [query]);

    return (
        <div className={style.moviesList_Container}>
            {moviesList &&
                moviesList.map((movie) => (
                    <MovieCardDefault key={movie.id} movie={movie} />
                ))}
        </div>
    );
};

export default Results;
