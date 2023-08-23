import { useContext } from "react";

import { MovieContext } from "../../contexts/MoviesContext";

import HomeSection from "../../components/HomeSection/HomeSection";

const Home = () => {
    const { trending, nowPlaying } = useContext(MovieContext);

    return (
        <main>
            <HomeSection title="Em Alta" moviesList={trending} />
            <HomeSection title="Em Cartaz" moviesList={nowPlaying} />
        </main>
    );
};

export default Home;
