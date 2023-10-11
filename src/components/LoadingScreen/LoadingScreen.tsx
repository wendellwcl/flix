//Assets
import load_logo from "../../assets/img/load-icon.png";

//Style
import style from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div className={style.loading_container}>
            <img src={load_logo} className={style.load_img} />
        </div>
    );
};

export default LoadingScreen;
