import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Components
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Pagination from "./Components/Pagination/Pagination";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Style
import style from "./Results.module.css";
import Footer from "../../components/Footer/Footer";

const Results = () => {
    const { query, apiEndpoint, page } = useParams();

    const decodedQuery = query!.replaceAll("+", " ");
    const encodedApiEndpoint = encodeURIComponent(apiEndpoint!);
    const decodedApiEndpoint = decodeURIComponent(apiEndpoint!);
    const currentPage = page ? Number(page) : 1;

    const { loading, setLoading } = useContext(LoadingContext);

    const [moviesList, setMoviesList] = useState<IMovie[]>();
    const [totalPages, setTotalPages] = useState<number>();

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
                <>
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
                        <Pagination
                            pageNumber={currentPage}
                            query={query}
                            encodedApiEndpoint={encodedApiEndpoint}
                            totalPages={totalPages}
                        />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Results;
