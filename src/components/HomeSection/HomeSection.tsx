//Interfaces
import { IMovie } from "../../interfaces/interfaces";

interface Props {
    title: string;
    moviesList: IMovie[];
}

const HomeSection = ({ title, moviesList }: Props) => {
    return (
        <section>
            <h3>{title}</h3>
            {moviesList && (
                <ul>
                    {moviesList.map((movie) => (
                        <div key={movie.id}>
                            <li>{movie.title}</li>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                            />
                        </div>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HomeSection;
