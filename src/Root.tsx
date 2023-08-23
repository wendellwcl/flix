import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { MovieContext } from "./contexts/MoviesContext";

function Root() {
    const { loading } = useContext(MovieContext);

    return (
        <div className="container">
            <Header />
            {loading ? <h2>Carregando...</h2> : <Outlet />}
        </div>
    );
}

export default Root;
