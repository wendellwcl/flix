import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

//Components
import MovieCardDefault from "../MovieCardDefault/MovieCardDefault";

//Contexts
import { ResultsPageTitleContext } from "../../contexts/ResultsPageTitleContext";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";

//Styles
import style from "./HomeSection.module.css";

interface Props {
    title: string;
    subtitle: string;
    moviesList: IMovie[];
    qty: number;
    endpoint?: string;
}

const HomeSection = ({ title, subtitle, moviesList, qty, endpoint }: Props) => {
    const { setResultsPageTitle } = useContext(ResultsPageTitleContext);

    const [renderList, setRenderList] = useState<IMovie[]>([]);
    const [encodedEndpoint, setEncodedEndpoint] = useState<string | null>(null);

    useEffect(() => {
        const list = [];

        for (let i = 0; i < qty; i++) {
            if (i === moviesList.length) {
                break;
            }

            list.push(moviesList[i]);
        }

        setRenderList(list);
    }, [moviesList]);

    useEffect(() => {
        if (endpoint) {
            setEncodedEndpoint(encodeURIComponent(endpoint));
        }
    }, [endpoint]);

    return (
        <section className={style.section_container}>
            <div className={style.section_header}>
                <div>
                    <span className={style.section_subtitle}>{subtitle}</span>
                    <h3 className={style.section_title}>{title}</h3>
                </div>
                {encodedEndpoint && (
                    <div>
                        <Link
                            to={`results/${encodedEndpoint}`}
                            className={style.section_btn}
                            onClick={() => setResultsPageTitle(title)}
                        >
                            Ver Todos
                        </Link>
                    </div>
                )}
            </div>
            <div className={style.section_body}>
                {renderList &&
                    renderList.map((movie) => (
                        <MovieCardDefault key={movie.id} movie={movie} />
                    ))}
            </div>
        </section>
    );
};

export default HomeSection;
