import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

//Assets
import load_icon from "../../assets/img/load-icon.png";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Style
import style from "./MovieCardDefault.module.css";

interface Props {
    movie: IMovie;
}

const MovieCardDefault = ({ movie }: Props) => {
    const { genres } = useContext(MoviesContext);

    const imgRef = useRef<HTMLImageElement>(null);
    const loadingRef = useRef<HTMLDivElement>(null);

    const [movieGenre, setMovieGenre] = useState<string | null>(null);

    useEffect(() => {
        function filterGenre(genre: { id: number }) {
            return genre.id === movie.genre_ids[0];
        }

        const genresList = genres.filter(filterGenre);

        if (genresList.length != 0) {
            setMovieGenre(genresList[0].name);
        }
    }, [movie]);

    function handleImgLoad() {
        imgRef.current!.style.display = "flex";
        loadingRef.current!.remove();
    }

    return (
        <div className={style.card_container}>
            <div className={style.img_container}>
                <Link to={`/details/${movie.id}`} relative="path">
                    <div className={style.loading} ref={loadingRef}>
                        <img src={load_icon} />
                    </div>
                    <img
                        ref={imgRef}
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                : "#"
                        }
                        alt={movie.title}
                        loading="lazy"
                        onLoad={handleImgLoad}
                        onError={handleImgLoad}
                    />
                </Link>
            </div>
            <div className={style.info_container}>
                <h6 className={style.title}>{movie.title}</h6>
                <span className={style.genre}>{movieGenre || "-"}</span>
                <Link to={`/details/${movie.id}`} relative="path">
                    Mais Sobre
                </Link>
            </div>
        </div>
    );
};

export default MovieCardDefault;
