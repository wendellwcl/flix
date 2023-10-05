import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";

//Assets
import load_icon from "../../assets/img/load-icon.png";

//Components
import Footer from "../../components/Footer/Footer";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Styles
import style from "./Details.module.css";

const Details = () => {
    const { id } = useParams();

    const { setLoading } = useContext(LoadingContext);

    const loadingRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const [movieDetails, setMovieDetails] = useState<any>();

    useEffect(() => {
        async function fetchMovieDetails() {
            const movieDetails = await fetchTMDBconfig(
                `movie/${id}?language=pt-BR`
            );

            setMovieDetails(movieDetails);
        }

        setLoading(true);
        fetchMovieDetails();
        setLoading(false);
    }, []);

    function handleImgLoad() {
        loadingRef.current!.style.display = "none";
        imgRef.current!.style.display = "flex";
    }

    return (
        <div>
            {movieDetails && (
                <>
                    <div className={style.details_container}>
                        <div className={style.details_body}>
                            <div className={style.centralize}>
                                <div className={style.details_img}>
                                    <div
                                        className={style.loading}
                                        ref={loadingRef}
                                    >
                                        <img src={load_icon} />
                                    </div>
                                    <img
                                        ref={imgRef}
                                        src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
                                        alt={movieDetails.title}
                                        onLoad={handleImgLoad}
                                        onError={handleImgLoad}
                                    />
                                </div>
                                <div className={style.details_infos}>
                                    <h3 className={style.details_title}>
                                        {movieDetails.title}
                                    </h3>
                                    {movieDetails.tagline && (
                                        <h4 className={style.details_tagline}>
                                            {movieDetails.tagline}
                                        </h4>
                                    )}
                                    {movieDetails.overview && (
                                        <p className={style.details_overview}>
                                            {movieDetails.overview}
                                        </p>
                                    )}
                                    {movieDetails.runtime && (
                                        <p className={style.details_runtime}>
                                            Duração:&nbsp;
                                            <span>
                                                {movieDetails.runtime} min
                                            </span>
                                        </p>
                                    )}
                                    {movieDetails.vote_average && (
                                        <p className={style.details_average}>
                                            Nota:&nbsp;
                                            <span>
                                                {movieDetails.vote_average}
                                            </span>
                                        </p>
                                    )}
                                    {movieDetails.genres.length > 0 && (
                                        <p className={style.details_genres}>
                                            Gêneros:&nbsp;
                                            <span>
                                                {movieDetails.genres.map(
                                                    (genre: {
                                                        name: string;
                                                    }) => (
                                                        <span
                                                            key={genre.name}
                                                            className={
                                                                style.genre
                                                            }
                                                        >
                                                            {genre.name}
                                                            &nbsp;&nbsp;
                                                        </span>
                                                    )
                                                )}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Details;
