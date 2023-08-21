import { ReactElement, createContext, useEffect, useState } from "react";

interface Props {
    children: ReactElement;
}

interface IMoviesContext {
    trending: any[];
    nowPlaying: any[];
    genres: any[];
}

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
};

export const MovieContext = createContext<IMoviesContext>({
    trending: [],
    nowPlaying: [],
    genres: [],
});

const MoviesContextProvider = ({ children }: Props) => {
    const [trending, setTrending] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        //Fetch Trending Movies
        fetch(import.meta.env.VITE_TMDB_MOVIES_TRENDING, options)
            .then((res) => res.json())
            .then((data) => setTrending(data.results))
            .catch((err) => console.log(err));

        //Fetch Now Playing Movies
        fetch(import.meta.env.VITE_TMDB_MOVIES_TRENDING, options)
            .then((res) => res.json())
            .then((data) => setNowPlaying(data.results))
            .catch((err) => console.log(err));

        //Fetch Genres
        fetch(import.meta.env.VITE_TMDB_MOVIES_GENRES, options)
            .then((res) => res.json())
            .then((data) => setGenres(data.genres))
            .catch((err) => console.log(err));
    }, []);

    const contextValue: IMoviesContext = { trending, nowPlaying, genres };

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    );
};

export default MoviesContextProvider;
