import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Components
import ResultsHeader from "./components/ResultsHeader/ResultsHeader";
import Pagination from "./components/Pagination/Pagination";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Footer from "../../components/Footer/Footer";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Style
import style from "./Results.module.css";
import ResultsList from "./components/ResultsList/ResultsList";

const Results = () => {
    const navigate = useNavigate();

    const { query, apiEndpoint, page } = useParams();

    const decodedQuery = query!.replaceAll("+", " ");
    const encodedApiEndpoint = encodeURIComponent(apiEndpoint!);
    const decodedApiEndpoint = decodeURIComponent(apiEndpoint!);
    const currentPage = page ? Number(page) : 1;

    const { loading, setLoading } = useContext(LoadingContext);

    const [resultsList, setResultsList] = useState<IMovie[]>();
    const [totalPages, setTotalPages] = useState<number>(1);
    const [noResults, setNoResults] = useState<boolean>(false);

    useEffect(() => {
        async function fetchResultsList() {
            const data = await fetchTMDBconfig(
                `${decodedApiEndpoint}&page=${currentPage}`
            );

            if (data.error) {
                console.error(data.error);

                const url = data.error.message.replaceAll(" ", "+");
                navigate(`/error/${url}`, { relative: "path" });
                return;
            }

            if (data.results.length === 0) {
                if (data.page === 1 && data.total_pages === 1) {
                    setNoResults(true);
                } else if (data.page > 1) {
                    navigate(
                        `/results/${query}/${encodedApiEndpoint}/${data.total_pages}`,
                        { relative: "path" }
                    );
                }
            } else {
                setResultsList(data.results);
                setTotalPages(data.total_pages);
            }
        }

        async function handleFetch() {
            setLoading(true);

            window.scroll(0, 0);
            await fetchResultsList();

            setLoading(false);
        }

        handleFetch();
    }, [decodedApiEndpoint, currentPage]);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <div className={style.results_container}>
                        <ResultsHeader query={decodedQuery} />

                        <div className={style.results_body}>
                            {noResults ? (
                                <p className={style.noResults_msg}>
                                    Sem resultados
                                </p>
                            ) : (
                                <>
                                    <ResultsList resultsList={resultsList!} />
                                    <Pagination
                                        pageNumber={currentPage}
                                        query={query!}
                                        encodedApiEndpoint={encodedApiEndpoint}
                                        totalPages={totalPages}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    {!noResults && <Footer />}
                </>
            )}
        </>
    );
};

export default Results;
