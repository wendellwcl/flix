import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext<any>(null);

interface Props {
    children: JSX.Element;
}

const options: object = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
};

const MoviesContextProvider = ({ children }: Props) => {
    const [trendingMovies, setTrendingMovies] = useState<object[]>([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_TMDB_MOVIES_TRENDING, options)
            .then((res) => res.json())
            .then((data) => {
                setTrendingMovies(data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <MoviesContext.Provider value={{ trendingMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
