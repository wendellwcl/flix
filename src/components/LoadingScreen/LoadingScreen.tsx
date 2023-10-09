//Style
import style from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div className={style.loading_container}>
            <span>Carregando...</span>
        </div>
    );
};

export default LoadingScreen;
