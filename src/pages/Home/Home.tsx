import { useContext } from "react";

//Context
import { MovieContext } from "../../contexts/MoviesContext";

//Components
import HomeSection from "../../components/HomeSection/HomeSection";

const Home = () => {
    const { trending, topRated } = useContext(MovieContext);

    return (
        <main>
            <HomeSection title="Em Alta" moviesList={trending} />
            <HomeSection title="Melhores Notas" moviesList={topRated} />
        </main>
    );
};

export default Home;
