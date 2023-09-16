import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    const [movieGenre, setMovieGenre] = useState<string | null>(null);

    useEffect(() => {
        function filterGenre(genre: { id: number }) {
            return genre.id === movie.genre_ids[0];
        }

        const genre = genres.filter(filterGenre);

        if (genre.length != 0) {
            setMovieGenre(genre[0].name);
        }
    }, [movie]);

    return (
        <div className={style.card_container}>
            <div className={style.img_container}>
                <Link to={`/details/${movie.id}`} relative="path">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                </Link>
            </div>
            <div className={style.info_container}>
                <span className={style.title}>{movie.title}</span>
                <span className={style.genre}>{movieGenre}</span>
                <Link to={`/details/${movie.id}`} relative="path">
                    Mais Sobre
                </Link>
            </div>
        </div>
    );
};

export default MovieCardDefault;
