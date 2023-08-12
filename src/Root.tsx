import style from "./Root.module.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function Root() {
    return (
        <div className={style.main_container}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
