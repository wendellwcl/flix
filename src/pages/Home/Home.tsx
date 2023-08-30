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
            />
            <HomeSection
                title="Melhores Notas"
                subtitle="Mais bem avaliados"
                moviesList={topRated}
                qty={4}
            />
        </main>
    );
};

export default Home;
