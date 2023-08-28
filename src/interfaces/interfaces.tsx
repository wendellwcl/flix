export interface IMovie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    genre_ids: number[];
}

export interface IGenre {
    id: number;
    name: string;
}
