//Components
import MovieCardDefault from "../../../../components/MovieCardDefault/MovieCardDefault";

//Interfaces
import { IMovie } from "../../../../interfaces/interfaces";

//Style
import style from "./ResultsList.module.css";

interface Props {
    resultsList: IMovie[];
}

const ResultsList = ({ resultsList }: Props) => {
    return (
        <>
            {resultsList && (
                <div className={style.results_list}>
                    {resultsList.map((movie) => (
                        <MovieCardDefault key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ResultsList;
