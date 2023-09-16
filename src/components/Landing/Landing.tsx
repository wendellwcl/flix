//Styles
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.landing_container}>
            <p>Bem-vindo ao</p>
            <h2>Flix</h2>
            <p>Onde a magia das telonas ganha vida em cada clique!</p>
            <form>
                <input type="text" placeholder="Pesquisar um filme" />
                <button>Pesquisar</button>
            </form>
        </div>
    );
};

export default Landing;
