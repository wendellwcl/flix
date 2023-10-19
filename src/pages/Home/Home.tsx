import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Landing from "./components/Landing/Landing";
import HomeSection from "./components/HomeSection/HomeSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Footer from "../../components/Footer/Footer";
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";
import MovieCard2 from "../../components/MovieCard2/MovieCard2";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Utils
import fetchTMDBconfig from "../../utils/fetchTMDBconfig";

//Styles
import style from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(true);
    const [trending, setTrending] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [upcoming, setUpcoming] = useState<IMovie[]>([]);

    useEffect(() => {
        async function fetchMovies() {
            const fetchTrending = await fetchTMDBconfig(
                "trending/movie/week?language=pt-BR"
            );
            setTrending(fetchTrending.results);

            const fetchTopRated = await fetchTMDBconfig(
                "movie/top_rated?language=pt-BR"
            );
            setTopRated(fetchTopRated.results);

            const fetchUpcoming = await fetchTMDBconfig(
                "/movie/upcoming?lanadhradguage=pt-BR"
            );
            setUpcoming(fetchUpcoming.results);

            if (
                fetchTrending.error &&
                fetchTopRated.error &&
                fetchUpcoming.error
            ) {
                navigate("/error", { relative: "path" });
            }

            setLoading(false);
        }

        fetchMovies();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <main className={style.home}>
                    <Landing />
                    {trending && (
                        <HomeSection
                            title="Em Alta"
                            subtitle="Tendencias"
                            endpoint="/trending/movie/week?language=pt-BR"
                        >
                            <MovieCardDefault movie={trending[0]} />
                            <MovieCardDefault movie={trending[1]} />
                            <MovieCardDefault movie={trending[2]} />
                            <MovieCardDefault movie={trending[3]} />
                            <MovieCardDefault movie={trending[4]} />
                        </HomeSection>
                    )}
                    {topRated && (
                        <HomeSection
                            title="Melhores Notas"
                            subtitle="Mais bem avaliados"
                            endpoint="/movie/top_rated?language=pt-BR"
                        >
                            <MovieCardDefault movie={topRated[0]} />
                            <MovieCardDefault movie={topRated[1]} />
                            <MovieCardDefault movie={topRated[2]} />
                            <MovieCardDefault movie={topRated[3]} />
                            <MovieCardDefault movie={topRated[4]} />
                        </HomeSection>
                    )}
                    {upcoming && (
                        <HomeSection
                            title="Lançamentos"
                            subtitle="Melhores lançamentos"
                            endpoint="/movie/upcoming?language=pt-BR"
                        >
                            <MovieCard2 movie={upcoming[0]} />
                            <MovieCard2 movie={upcoming[1]} />
                            <MovieCard2 movie={upcoming[2]} />
                            <MovieCard2 movie={upcoming[3]} />
                            <MovieCard2 movie={upcoming[4]} />
                        </HomeSection>
                    )}
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Home;
