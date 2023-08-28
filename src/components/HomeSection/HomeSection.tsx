//Interfaces
import { IMovie } from "../../interfaces/interfaces";
import CardV1 from "../CardV1/CardV1";

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
                        <CardV1 key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HomeSection;
