import { useContext } from "react";

//Components
import HomeSection from "../../components/HomeSection/HomeSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

const Home = () => {
    const { trending, topRated } = useContext(MoviesContext);
    const { loading } = useContext(LoadingContext);

    return (
        <>
            {loading && <LoadingScreen />}
            {!loading && (
                <main>
                    <HomeSection
                        title="Em Alta"
                        subtitle="Tendencias"
                        moviesList={trending}
                        qty={5}
                        endpoint="/trending/movie/week?language=pt-BR"
                    />
                    <HomeSection
                        title="Melhores Notas"
                        subtitle="Mais bem avaliados"
                        moviesList={topRated}
                        qty={4}
                        endpoint="/movie/top_rated?language=pt-BR"
                    />
                </main>
            )}
        </>
    );
};

export default Home;
