//Assets
import tmbd_logo from "../../assets/img/tmdb_logo.svg";
import freepik_logo from "../../assets/img/freepik-logo.png";

//Style
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <span className={style.title}>Créditos:</span>
            <span className={style.credits}>
                <div className={style.credits_item}>
                    <a href="https://www.themoviedb.org" target="_blank">
                        <img
                            src={tmbd_logo}
                            alt="API TMDB - The Movie DataBase"
                        />
                        <span>The Movie Database</span>
                    </a>
                </div>
                <div className={style.credits_item}>
                    <a
                        href="https://br.freepik.com/fotos-gratis/variedade-de-elementos-de-cinema-em-fundo-vermelho-com-espaco-de-copia_7089700.htm#query=cinema&position=10&from_view=search&track=sph"
                        target="_blank"
                    >
                        <img src={freepik_logo} alt="freepik" />
                        <span>Freepik</span>
                    </a>
                </div>
            </span>
        </footer>
    );
};

export default Footer;
