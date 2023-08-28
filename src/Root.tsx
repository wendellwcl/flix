import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Context
import { MoviesContext } from "./contexts/MoviesContext";

//Components
import Header from "./components/Header/Header";

function Root() {
    const { loading } = useContext(MoviesContext);

    return (
        <div className="container">
            <Header />
            {loading ? <h2>Carregando...</h2> : <Outlet />}
        </div>
    );
}

export default Root;
