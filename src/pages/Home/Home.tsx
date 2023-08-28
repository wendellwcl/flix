import { useContext } from "react";

//Context
import { MoviesContext } from "../../contexts/MoviesContext";

//Components
import HomeSection from "../../components/HomeSection/HomeSection";

const Home = () => {
    const { trending, topRated } = useContext(MoviesContext);

    return (
        <main>
            <HomeSection title="Em Alta" moviesList={trending} />
            <HomeSection title="Melhores Notas" moviesList={topRated} />
        </main>
    );
};

export default Home;
