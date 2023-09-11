import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";

//Components
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";
import { ResultsPageTitleContext } from "../../contexts/ResultsPageTitleContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Style
import style from "./Results.module.css";

const Results = () => {
    const { query } = useParams();

    const { setLoading } = useContext(LoadingContext);
    const { resultsPageTitle } = useContext(ResultsPageTitleContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

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
                `${decodedQuery}&page=${currentPage}`
            );

            setMoviesList(data.results);
        }

        fetchMoviesList();
        setLoading(false);
    }, [query, currentPage]);

    return (
        <div className={style.results_container}>
            <div className={style.results_header}>
                <h2 className={style.results_title}>
                    Resultados para:
                    <span> "{resultsPageTitle}"</span>
                </h2>
            </div>
            <div className={style.results_list}>
                {moviesList &&
                    moviesList.map((movie) => (
                        <MovieCardDefault key={movie.id} movie={movie} />
                    ))}
            </div>
            <div className={style.pagination_container}>
                <button ref={prevBtn} onClick={handlePrev}>
                    &lt;
                </button>
                <span>{currentPage}</span>
                <button ref={nextBtn} onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Results;
