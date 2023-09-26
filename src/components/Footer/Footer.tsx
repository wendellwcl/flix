//Assets
import tmbd_logo from "../../assets/img/tmdb_logo.svg";
import freepik_logo from "../../assets/img/freepik-logo.png";

//Components
import FooterCreditItem from "./Components/FooterCreditItem/FooterCreditItem";

//Style
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <span className={style.footer_title}>Créditos:</span>
            <div className={style.credits_container}>
                <FooterCreditItem
                    name="The Movie Database"
                    url="https://www.themoviedb.org"
                    img={tmbd_logo}
                />
                <FooterCreditItem
                    name="Freepik"
                    url="https://br.freepik.com/fotos-gratis/variedade-de-elementos-de-cinema-em-fundo-vermelho-com-espaco-de-copia_7089700.htm#query=cinema&position=10&from_view=search&track=sph"
                    img={freepik_logo}
                />
            </div>
        </footer>
    );
};

export default Footer;
