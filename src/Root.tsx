import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { useContext } from "react";
import { MoviesContext } from "./contexts/moviesContext";

function Root() {
    const { trendingMovies } = useContext(MoviesContext);

    return (
        <div className="container">
            <Header />
            <Outlet />
            {trendingMovies &&
                trendingMovies.map((movie: any) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
        </div>
    );
}

export default Root;
