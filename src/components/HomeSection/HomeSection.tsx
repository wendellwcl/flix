import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import MovieCardDefault from "../MovieCardDefault/MovieCardDefault";

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
    const encodedEndpoint = endpoint ? encodeURIComponent(endpoint) : null;
    const encodedTitle = title.replaceAll(" ", "+");

    const [renderList, setRenderList] = useState<IMovie[]>([]);

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
                            to={`/results/${encodedTitle}/${encodedEndpoint}`}
                            className={style.section_btn}
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
