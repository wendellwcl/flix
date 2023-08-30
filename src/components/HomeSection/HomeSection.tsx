//Interfaces
import { IMovie } from "../../interfaces/interfaces";
import CardTrending from "../CardTrending/CardTrending";

//Styles
import style from "./HomeSection.module.css";

interface Props {
    title: string;
    moviesList: IMovie[];
}

const HomeSection = ({ title, moviesList }: Props) => {
    return (
        <section>
            <h3>{title}</h3>
            {moviesList && (
                <ul style={{ display: "flex", flexWrap: "wrap" }}>
                    {moviesList.map((movie) => (
                        <CardTrending key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HomeSection;
