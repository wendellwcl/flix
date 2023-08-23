interface IMovie {
    id: number;
    title: string;
}

interface Props {
    title: string;
    moviesList: IMovie[];
}

const HomeSection = ({ title, moviesList }: Props) => {
    title;

    return (
        <section>
            <h3>{title}</h3>
            {moviesList && (
                <ul>
                    {moviesList.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HomeSection;
