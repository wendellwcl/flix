import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import style from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const encodedSearchQuery = searchQuery.replace(" ", "+");
        const endpoint = `search/movie?query=${encodedSearchQuery}&include_adult=false&language=pt-BR`;
        const encodedEndpoint = encodeURIComponent(endpoint);

        navigate(`/results/${encodedSearchQuery}/${encodedEndpoint}`, {
            relative: "path",
        });
    }

    return (
        <div className={style.landing_container}>
            <p>Bem-vindo ao</p>
            <h2>Flix</h2>
            <p>Onde a magia das telonas ganha vida em cada clique!</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Pesquisar um filme"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    );
};

export default Landing;
