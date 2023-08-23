import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { MovieContext } from "./contexts/MoviesContext";

function Root() {
    const { trending, nowPlaying, genres, loading } = useContext(MovieContext);

    return (
        <div className="container">
            <Header />
            <Outlet />
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    <h3>Em Alta</h3>
                    <ul>
                        {trending.map((movie: any) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                    <h3>Em Cartaz</h3>
                    <ul>
                        {nowPlaying.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                    <h3>Gêneros</h3>
                    <ul>
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Root;