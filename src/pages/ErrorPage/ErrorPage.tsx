import { Link, useParams } from "react-router-dom";

//Style
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
    const { message } = useParams();

    const decodedMessage = message?.replaceAll("+", " ");

    return (
        <div className={style.errorPage_container}>
            <span className={style.message}>
                {message ? decodedMessage : "Ops! Algo deu errado."}
            </span>
            <Link to={"/"}>Página inicial</Link>
        </div>
    );
};

export default ErrorPage;
