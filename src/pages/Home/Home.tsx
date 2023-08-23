import { useContext } from "react";

import { MovieContext } from "../../contexts/MoviesContext";

import HomeSection from "../../components/HomeSection/HomeSection";

const Home = () => {
    const { trending, topRated } = useContext(MovieContext);

    console.log(topRated);

    return (
        <main>
            <HomeSection title="Em Alta" moviesList={trending} />
            <HomeSection title="Melhores Notas" moviesList={topRated} />
        </main>
    );
};

export default Home;
