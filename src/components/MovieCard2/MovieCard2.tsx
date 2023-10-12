import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import imgLoadingPlaceholder from "../../utils/imgLoadingPlaceholder";

//Style
import style from "./MovieCard2.module.css";

interface Props {
    movie: IMovie;
}

const MovieCard2 = ({ movie }: Props) => {
    const [date, setDate] = useState<string>(movie.release_date);

    useEffect(() => {
        const date = new Date(movie.release_date).toLocaleDateString("pt-BR");
        setDate(date);
    }, [movie]);

    return (
        <Link to={`/details/${movie.id}`} className={style.card_container}>
            <div className={style.card_img}>
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
            </div>
            <span className={style.date}>{date}</span>
        </Link>
    );
};

export default MovieCard2;
