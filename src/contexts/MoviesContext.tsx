import { ReactElement, createContext, useEffect, useState } from "react";

//Utils
import fetchTMDBconfig from "../utils/fetchTMDBconfig";

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
            const fetchTrending = await fetchTMDBconfig(
                "/trending/movie/week?language=pt-BR"
            );
            setTrending(fetchTrending!.results);

            const fetchTopRated = await fetchTMDBconfig(
                "/movie/top_rated?language=pt-BR&page=1"
            );
            setTopRated(fetchTopRated!.results);

            const fetchGenres = await fetchTMDBconfig(
                "/genre/movie/list?language=pt"
            );
            setGenres(fetchGenres!.genres);

            setLoading(false);
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
