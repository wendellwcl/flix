import style from "./header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={style.logo}>
                <h1>
                    <Link to={`/`}>flix</Link>
                </h1>
            </div>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`search`}>Busca</Link>
                    </li>
                    <li>
                        <Link to={`credits`}>Créditos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
