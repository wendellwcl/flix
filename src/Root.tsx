import { Outlet } from "react-router-dom";

//Components
import Header from "./components/Header/Header";

function Root() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Root;
