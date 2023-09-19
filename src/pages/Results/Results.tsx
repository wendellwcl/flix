import { useEffect, useState, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Components
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Style
import style from "./Results.module.css";

const Results = () => {
    const navigate = useNavigate();
    const { query, apiEndpoint, page } = useParams();

    const decodedQuery = query!.replaceAll("+", " ");
    const encodedApiEndpoint = encodeURIComponent(apiEndpoint!);
    const decodedApiEndpoint = decodeURIComponent(apiEndpoint!);
    const currentPage = page ? Number(page) : 1;

    const { loading, setLoading } = useContext(LoadingContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();
    const [totalPages, setTotalPages] = useState<number>();

    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

    function handlePrevPage() {
        if (currentPage > 1) {
            navigate(
                `/results/${query}/${encodedApiEndpoint}/${currentPage - 1}`,
                { relative: "path" }
            );
        }
    }

    function handleNextPage() {
        if (currentPage < totalPages! && currentPage < 500) {
            navigate(
                `/results/${query}/${encodedApiEndpoint}/${currentPage + 1}`,
                { relative: "path" }
            );
        }
    }

    useEffect(() => {
        async function fetchMoviesList() {
            const data = await fetchTMDBconfig(
                `${decodedApiEndpoint}&page=${currentPage}`
            );

            setMoviesList(data.results);
            setTotalPages(data.total_pages);
        }

        async function handleFetch() {
            setLoading(true);

            await fetchMoviesList();

            window.scrollTo(0, 0);

            setTimeout(() => {
                setLoading(false);
            }, 200);
        }

        handleFetch();
    }, [decodedApiEndpoint, currentPage]);

    return (
        <>
            {loading && <LoadingScreen />}
            {!loading && (
                <div className={style.results_container}>
                    <div className={style.results_header}>
                        <h2 className={style.results_title}>
                            Resultados para:
                            <span> "{decodedQuery}"</span>
                        </h2>
                    </div>
                    <div className={style.results_list}>
                        {moviesList &&
                            moviesList.map((movie) => (
                                <MovieCardDefault
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))}
                    </div>
                    <div className={style.pagination_container}>
                        <button
                            ref={prevBtn}
                            onClick={handlePrevPage}
                            disabled={currentPage == 1}
                        >
                            &lt;
                        </button>
                        <span>{currentPage}</span>
                        <button
                            ref={nextBtn}
                            onClick={handleNextPage}
                            disabled={
                                currentPage >= 500 || currentPage >= totalPages!
                            }
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Results;
