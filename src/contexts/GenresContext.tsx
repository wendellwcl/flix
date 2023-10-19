import { ReactElement, createContext, useEffect, useState } from "react";

//Interfaces
import { IGenre } from "../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../utils/fetchTMDBconfig";

interface IGenresContext {
    genres: IGenre[];
}

interface Props {
    children: ReactElement;
}

const defaultValue: IGenresContext = {
    genres: [],
};

export const GenresContext = createContext(defaultValue);

const GenresContextProvider = ({ children }: Props) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        async function fetchGenres() {
            const genresList = await fetchTMDBconfig(
                "genre/movie/list?language=pt"
            );

            setGenres(genresList.genres);
        }

        fetchGenres();
    }, []);

    const contextValue: IGenresContext = {
        genres,
    };

    return (
        <GenresContext.Provider value={contextValue}>
            {children}
        </GenresContext.Provider>
    );
};

export default GenresContextProvider;
