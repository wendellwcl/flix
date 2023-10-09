import {
    ReactElement,
    createContext,
    useEffect,
    useState,
    useContext,
} from "react";

//Contexts
import { LoadingContext } from "./LoadingContext";

//Interfaces
import { IMovie, IGenre } from "../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../utils/fetchTMDBconfig";

interface Props {
    children: ReactElement;
}

interface IMoviesContext {
    trending: IMovie[];
    topRated: IMovie[];
    upcoming: IMovie[];
    genres: IGenre[];
}

const defaultValue = {
    trending: [],
    topRated: [],
    upcoming: [],
    genres: [],
};

export const MoviesContext = createContext<IMoviesContext>(defaultValue);

const MoviesContextProvider = ({ children }: Props) => {
    const { setLoading } = useContext(LoadingContext);

    const [trending, setTrending] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [upcoming, setUpcoming] = useState<IMovie[]>([]);
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            const fetchTrending = await fetchTMDBconfig(
                "trending/movie/week?language=pt-BR"
            );
            setTrending(fetchTrending.results);

            const fetchTopRated = await fetchTMDBconfig(
                "movie/top_rated?language=pt-BR"
            );
            setTopRated(fetchTopRated.results);

            const fetchUpcoming = await fetchTMDBconfig(
                "/movie/upcoming?language=pt-BR"
            );
            setUpcoming(fetchUpcoming.results);

            const fetchGenres = await fetchTMDBconfig(
                "genre/movie/list?language=pt"
            );
            setGenres(fetchGenres.genres);

            setLoading(false);
        }

        fetchData();
    }, []);

    const contextValue: IMoviesContext = {
        trending,
        topRated,
        upcoming,
        genres,
    };

    return (
        <MoviesContext.Provider value={contextValue}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
