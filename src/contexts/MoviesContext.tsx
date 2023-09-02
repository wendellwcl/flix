import { ReactElement, createContext, useEffect, useState } from "react";

//Interfaces
import { IMovie, IGenre } from "../interfaces/interfaces";

interface Props {
    children: ReactElement;
}

interface IMoviesContext {
    trending: IMovie[];
    topRated: IMovie[];
    genres: IGenre[];
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
};

export const MoviesContext = createContext<IMoviesContext>({
    trending: [],
    topRated: [],
    genres: [],
    loading: true,
    setLoading: () => {
        return;
    },
});

const MoviesContextProvider = ({ children }: Props) => {
    const [trending, setTrending] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [genres, setGenres] = useState<IGenre[]>([]);
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
        setLoading,
    };

    return (
        <MoviesContext.Provider value={contextValue}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
