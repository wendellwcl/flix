import { useEffect, useState, useContext, useRef } from "react";
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

    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

    const { setLoading } = useContext(LoadingContext);
    const { resultsPageTitle } = useContext(ResultsPageTitleContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }

    function handleNext() {
        if (currentPage < 500) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }

    useEffect(() => {
        setLoading(true);

        async function fetchMoviesList() {
            const decodedQuery = decodeURIComponent(query!);

            const data = await fetchTMDBconfig(
                `/${decodedQuery}&page=${currentPage}`
            );

            setMoviesList(data.results);
        }

        fetchMoviesList();
        setLoading(false);
    }, [query, currentPage]);

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
            <div>
                <button ref={prevBtn} onClick={handlePrev}>
                    prev
                </button>
                <button>{currentPage}</button>
                <button ref={nextBtn} onClick={handleNext}>
                    next
                </button>
            </div>
        </div>
    );
};

export default Results;
