//Components
import MicroInfo from "./components/MicroInfo/MicroInfo";

//Style
import style from "./DetailsInfo.module.css";

interface Props {
    movieDetails: {
        title: string;
        tagline: string;
        overview: string;
        runtime: number;
        vote_average: number;
        genres: { name: string }[];
    };
}

const DetailsInfo = ({ movieDetails }: Props) => {
    return (
        <div className={style.details_infos}>
            <h3 className={style.details_title}>{movieDetails.title}</h3>
            {movieDetails.tagline && (
                <h4 className={style.details_tagline}>
                    {movieDetails.tagline}
                </h4>
            )}
            {movieDetails.overview && (
                <p className={style.details_overview}>
                    {movieDetails.overview}
                </p>
            )}
            {movieDetails.runtime && (
                <MicroInfo
                    text="Duração"
                    value={movieDetails.runtime}
                    unity="min"
                />
            )}
            {movieDetails.vote_average && (
                <MicroInfo text="Nota" value={movieDetails.vote_average} />
            )}
            {movieDetails.genres.length > 0 && (
                <MicroInfo text="Gêneros" value={movieDetails.genres} />
                // <p className={style.details_genres}>
                //     Gêneros:&nbsp;
                //     <span>
                //         {movieDetails.genres.map((genre: { name: string }) => (
                //             <span key={genre.name} className={style.genre}>
                //                 {genre.name}
                //                 &nbsp;&nbsp;
                //             </span>
                //         ))}
                //     </span>
                // </p>
            )}
        </div>
    );
};

export default DetailsInfo;
