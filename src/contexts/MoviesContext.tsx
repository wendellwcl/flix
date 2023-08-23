import { ReactElement, createContext, useEffect, useState } from "react";

interface Props {
    children: ReactElement;
}

interface IMovies {
    id: number;
    title: string;
}

interface IGenres {
    id: number;
    name: string;
}

interface IMoviesContext {
    trending: IMovies[];
    topRated: IMovies[];
    genres: IGenres[];
    loading: boolean;
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
    topRated: [],
    genres: [],
    loading: true,
});

const MoviesContextProvider = ({ children }: Props) => {
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            const fetchTrending = await fetch(
                import.meta.env.VITE_TMDB_MOVIES_TRENDING,
                options
            )
                .then((res) => res.json())
                .then((data) => setTrending(data.results))
                .catch((err) => console.log(err));

            const fetchTopRated = await fetch(
                import.meta.env.VITE_TMDB_MOVIES_TOP_RATED,
                options
            )
                .then((res) => res.json())
                .then((data) => setTopRated(data.results))
                .catch((err) => console.log(err));

            const fetchGenres = await fetch(
                import.meta.env.VITE_TMDB_MOVIES_GENRES,
                options
            )
                .then((res) => res.json())
                .then((data) => setGenres(data.genres))
                .catch((err) => console.log(err));

            Promise.all([fetchTrending, fetchTopRated, fetchGenres]).then(() =>
                setLoading(false)
            );
        }

        fetchData();
    }, []);

    const contextValue: IMoviesContext = {
        trending,
        topRated,
        genres,
        loading,
    };

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    );
};

export default MoviesContextProvider;
