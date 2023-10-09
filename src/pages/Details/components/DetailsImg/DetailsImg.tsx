import { useRef } from "react";

//Assets
import load_icon from "../../../../assets/img/load-icon.png";

//Style
import style from "./DetailsImg.module.css";

interface Props {
    movieDetails: { poster_path: string; title: string };
}

const DetailsImg = ({ movieDetails }: Props) => {
    const loadingRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    function handleImgLoad() {
        loadingRef.current!.style.display = "none";
        imgRef.current!.style.display = "flex";
    }

    return (
        <div className={style.details_img}>
            <div className={style.loading} ref={loadingRef}>
                <img src={load_icon} />
            </div>
            <img
                ref={imgRef}
                src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
                alt={movieDetails.title}
                onLoad={handleImgLoad}
                onError={handleImgLoad}
            />
        </div>
    );
};

export default DetailsImg;
