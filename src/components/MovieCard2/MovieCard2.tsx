import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Style
import style from "./MovieCard2.module.css";

interface Props {
    movie: IMovie;
}

const MovieCard2 = ({ movie }: Props) => {
    const [date, setDate] = useState<string>(movie.release_date);

    useEffect(() => {
        const d = new Date(movie.release_date).toLocaleDateString("pt-BR");
        setDate(d);
    }, [movie]);

    return (
        <Link to={`/details/${movie.id}`} className={style.card_container}>
            <div className={style.card_img}>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className={style.date}>{date}</div>
        </Link>
    );
};

export default MovieCard2;
