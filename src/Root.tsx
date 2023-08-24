import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { MovieContext } from "./contexts/MoviesContext";

function Root() {
    const { loading } = useContext(MovieContext);

    useEffect(() => {
        function toggleHeader() {
            const value: number = window.scrollY;
            const header: Element | null = document.querySelector(".header");

            if (value >= 150 && value <= 300) {
                header!.classList.add("header-offScreen");
            } else if (value >= 400) {
                header!.classList.add("header-show");
            } else if (value < 150) {
                header!.classList.remove("header-offScreen");
                header!.classList.remove("header-show");
            }
        }

        window.addEventListener("scroll", toggleHeader);
    }, []);

    return (
        <div className="container">
            <Header />
            {loading ? <h2>Carregando...</h2> : <Outlet />}
        </div>
    );
}

export default Root;
