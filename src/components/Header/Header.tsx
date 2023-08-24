import style from "./header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={`header ${style.header}`}>
            <div className={`container ${style.header_container}`}>
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
                            <Link to={`myList`}>Minha Lista</Link>
                        </li>
                        <li>
                            <Link to={`credits`}>Créditos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
