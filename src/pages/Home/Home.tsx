import { useContext } from "react";

//Components
import HomeSection from "../../components/HomeSection/HomeSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Landing from "../../components/Landing/Landing";
import Footer from "../../components/Footer/Footer";

//Contexts
import { LoadingContext } from "../../contexts/LoadingContext";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Styles
import style from "./Home.module.css";

const Home = () => {
    const { trending, topRated } = useContext(MoviesContext);
    const { loading } = useContext(LoadingContext);

    return (
        <>
            {loading && <LoadingScreen />}
            {!loading && (
                <main className={style.home}>
                    <Landing />
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
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Home;
