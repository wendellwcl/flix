import { useContext, useEffect, useState } from "react";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

interface Props {
    movie: IMovie;
}

const CardV1 = ({ movie }: Props) => {
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
        <li>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div>
                <span>{movie.title}</span>
                <span>{movieGenre}</span>
                <button>Mais Sobre</button>
            </div>
        </li>
    );
};

export default CardV1;
