import { useEffect } from "react";
import { Link } from "react-router-dom";

//Style
import style from "./header.module.css";

const Header = () => {
    useEffect(() => {
        function toggleHeader() {
            const value: number = window.scrollY;
            const header: Element | null = document.querySelector("#header");

            if (value >= 200 && value <= 400) {
                header!.classList.add("header-offScreen");
            }

            if (value >= 400) {
                header!.classList.add("header-show");
            }

            if (value < 200) {
                header!.classList.remove("header-offScreen");
                header!.classList.remove("header-show");
            }
        }

        window.addEventListener("scroll", toggleHeader);

        return () => {
            window.removeEventListener("scroll", toggleHeader);
        };
    }, []);

    return (
        <header className={style.header} id="header">
            <div className={style.header_container}>
                <div className={style.logo}>
                    <h1>
                        <Link to={`/`}>flix</Link>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
