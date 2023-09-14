import { Outlet } from "react-router-dom";

//Components
import Header from "./components/Header/Header";

function Root() {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
