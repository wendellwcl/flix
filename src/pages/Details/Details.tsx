import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Components
import DetailsImg from "./components/DetailsImg/DetailsImg";
import DetailsInfo from "./components/DetailsInfo/DetailsInfo";
import Footer from "../../components/Footer/Footer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Styles
import style from "./Details.module.css";

const Details = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const { loading, setLoading } = useContext(LoadingContext);

    const [movieDetails, setMovieDetails] = useState<any>();

    useEffect(() => {
        async function fetchMovieDetails() {
            const movieDetails = await fetchTMDBconfig(
                `movie/${id}?language=pt-BR`
            );

            if (movieDetails.error) {
                console.error(movieDetails.error);

                const url = movieDetails.error.message.replaceAll(" ", "+");
                navigate(`/error/${url}`, { relative: "path" });
                return;
            }

            setMovieDetails(movieDetails);
        }

        async function handleFetch() {
            setLoading(true);

            await fetchMovieDetails();

            setLoading(false);
        }

        handleFetch();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    {movieDetails && (
                        <>
                            <div className={style.details_area}>
                                <div className={style.details_container}>
                                    <DetailsImg movieDetails={movieDetails} />
                                    <DetailsInfo movieDetails={movieDetails} />
                                </div>
                            </div>
                            <Footer />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Details;
