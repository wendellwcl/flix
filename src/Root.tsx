import { Outlet } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;
