import { Link } from "react-router-dom";

//Style
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={style.errorPage_container}>
            <span className={style.message}>Ops! Algo deu errado.</span>
            <Link to={"/"}>Página inicial</Link>
        </div>
    );
};

export default ErrorPage;
