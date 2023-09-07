import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Components
import Header from "./components/Header/Header";

//Contexts
import { LoadingContext } from "./contexts/LoadingContext";

function Root() {
    const { loading } = useContext(LoadingContext);

    return (
        <div className="container">
            <Header />
            {loading ? <div>Carregando...</div> : <Outlet />}
        </div>
    );
}

export default Root;
