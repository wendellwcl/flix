import { useContext } from "react";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Components
import HomeSection from "../../components/HomeSection/HomeSection";

const Home = () => {
    const { trending, topRated } = useContext(MoviesContext);

    return (
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
                endpoint="/movie/top_rated?language=pt-BR&page=1"
            />
        </main>
    );
};

export default Home;
