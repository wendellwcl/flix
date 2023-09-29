export interface IMovie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    genre_ids: number[];
    release_date: string;
}

export interface IGenre {
    id: number;
    name: string;
}
