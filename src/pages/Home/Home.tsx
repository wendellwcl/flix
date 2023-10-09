import { useContext } from "react";

//Components
import Landing from "./components/Landing/Landing";
import HomeSection from "./components/HomeSection/HomeSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Footer from "../../components/Footer/Footer";
import MovieCardDefault from "../../components/MovieCardDefault/MovieCardDefault";
import MovieCard2 from "../../components/MovieCard2/MovieCard2";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Styles
import style from "./Home.module.css";

const Home = () => {
    const { trending, topRated, upcoming } = useContext(MoviesContext);
    const { loading } = useContext(LoadingContext);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <main className={style.home}>
                    <Landing />
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
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Home;
