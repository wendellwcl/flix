import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Context
import { MovieContext } from "./contexts/MoviesContext";

//Components
import Header from "./components/Header/Header";

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
