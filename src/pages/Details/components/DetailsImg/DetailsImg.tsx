//Utils
import imgLoadingPlaceholder from "../../../../utils/imgLoadingPlaceholder";

//Style
import style from "./DetailsImg.module.css";

interface Props {
    movieDetails: { poster_path: string; title: string };
}

const DetailsImg = ({ movieDetails }: Props) => {
    return (
        <div className={style.details_img_container}>
            <div className={style.details_img}>
                <div className="loading_placeholder"></div>
                <img
                    src={
                        movieDetails.poster_path
                            ? `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`
                            : "#"
                    }
                    alt={movieDetails.title}
                    onLoad={(e) => imgLoadingPlaceholder(e.currentTarget)}
                    onError={(e) => imgLoadingPlaceholder(e.currentTarget)}
                />
            </div>
        </div>
    );
};

export default DetailsImg;
