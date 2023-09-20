//Assets
import tmbd_logo from "../../assets/img/tmdb_logo.svg";

//Style
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <span className={style.credits}>Créditos:</span>
            <div className={style.credits_tmdb}>
                <a href="https://www.themoviedb.org" target="_blank">
                    <img src={tmbd_logo} alt="API TMDB - The Movie DataBase" />
                    <span>The Movie Database</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
