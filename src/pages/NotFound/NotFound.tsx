import { Link } from "react-router-dom";

//Style
import style from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={style.notFound_container}>
            <div className={style.message}>
                <span className={style.emphasis}>404</span>
                <span>Página não encontrada</span>
            </div>
            <Link to="/">Página inicial</Link>
        </div>
    );
};

export default NotFound;
