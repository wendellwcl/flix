import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "./contexts/LoadingContext";

function Root() {
    const { loading } = useContext(LoadingContext);

    return (
        <div className="container">
            <Header />
            {loading ? <LoadingScreen /> : <Outlet />}
        </div>
    );
}

export default Root;
