import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import imgLoadingPlaceholder from "../../utils/imgLoadingPlaceholder";

//Style
import style from "./MovieCardDefault.module.css";

interface Props {
    movie: IMovie;
}

const MovieCardDefault = ({ movie }: Props) => {
    const { genres } = useContext(MoviesContext);

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

    return (
        <div className={style.card_container}>
            <div className={style.img_container}>
                <Link to={`/details/${movie.id}`} relative="path">
                    <div className="loading_placeholder"></div>
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                : "#"
                        }
                        alt={movie.title}
                        loading="lazy"
                        onLoad={(e) => imgLoadingPlaceholder(e.currentTarget)}
                        onError={(e) => imgLoadingPlaceholder(e.currentTarget)}
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
