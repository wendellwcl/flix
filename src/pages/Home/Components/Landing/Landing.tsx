import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import style from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement>(null);

    const [searchQuery, setSearchQuery] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const query = searchQuery.trim();

        if (query !== "") {
            const encodedSearchQuery = searchQuery.replaceAll(" ", "+");
            const endpoint = `search/movie?query=${encodedSearchQuery}&include_adult=false&language=pt-BR`;
            const encodedEndpoint = encodeURIComponent(endpoint);

            navigate(`/results/${encodedSearchQuery}/${encodedEndpoint}`, {
                relative: "path",
            });
        } else {
            setSearchQuery("");
            inputRef.current!.placeholder = "Preencha este campo";
        }
    }

    return (
        <div className={style.landing}>
            <div className={style.landing_container}>
                <div className={style.greeting_container}>
                    <div className={style.greeting}>
                        <p>Bem-vindo ao</p>
                        <h2>Flix</h2>
                    </div>
                    <p>Onde a magia das telonas ganha vida em cada clique!</p>
                </div>
                <form
                    className={style.search_form}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className={style.search_input}>
                        <input
                            type="text"
                            placeholder="Pesquisar um filme"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            ref={inputRef}
                        />
                        <button type="submit">Pesquisar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Landing;
