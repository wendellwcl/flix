import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Components
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";
import { ResultsPageTitleContext } from "../../contexts/ResultsPageTitleContext";

//Style
import style from "./Results.module.css";

const Results = () => {
    const { query } = useParams();

    const { setLoading } = useContext(LoadingContext);
    const { resultsPageTitle } = useContext(ResultsPageTitleContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();

    useEffect(() => {
        setLoading(true);

        async function fetchMoviesList() {
            const data = await fetchTMDBconfig(`${query}&page=1`);

            setMoviesList(data.results);
        }

        fetchMoviesList();
        setLoading(false);
    }, [query]);

    return (
        <div>
            <div>
                <h2>Resultados para: {resultsPageTitle}</h2>
            </div>
            <div className={style.moviesList_Container}>
                {moviesList &&
                    moviesList.map((movie) => (
                        <MovieCardDefault key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default Results;
