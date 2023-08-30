import { useContext, useEffect, useState } from "react";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Style
import style from "./CardTrending.module.css";

interface Props {
    movie: IMovie;
}

const CardTrending = ({ movie }: Props) => {
    const { genres } = useContext(MoviesContext);

    const [movieGenre, setMovieGenre] = useState<string | null>(null);

    useEffect(() => {
        const genre = genres.filter(filterGenre);

        function filterGenre(genre: { id: number }) {
            return genre.id === movie.genre_ids[0];
        }

        setMovieGenre(genre[0].name);
    }, [movie]);

    return (
        <li className={style.card1_container}>
            <div className={style.img_container}>
                <a href="#">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                </a>
            </div>
            <div className={style.info_container}>
                <span className={style.title}>{movie.title}</span>
                <span className={style.genre}>{movieGenre}</span>
                <button>Mais Sobre</button>
            </div>
        </li>
    );
};

export default CardTrending;
