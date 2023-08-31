import { useEffect, useState } from "react";

//Interfaces
import { IMovie } from "../../interfaces/interfaces";
import CardTrending from "../CardTrending/CardTrending";

//Styles
import style from "./HomeSection.module.css";

interface Props {
    title: string;
    subtitle: string;
    moviesList: IMovie[];
    qty: number;
}

const HomeSection = ({ title, subtitle, moviesList, qty }: Props) => {
    const [renderList, setRenderList] = useState<IMovie[]>([]);

    useEffect(() => {
        const list = [];

        for (let i = 0; i < qty; i++) {
            list.push(moviesList[i]);
        }

        setRenderList(list);
    }, [moviesList]);

    return (
        <section className={style.section_container}>
            <div>
                <div className={style.section_header}>
                    <div>
                        <span className={style.section_subtitle}>
                            {subtitle}
                        </span>
                        <h3 className={style.section_title}>{title}</h3>
                    </div>
                    <div>
                        <button className={style.section_btn}>Ver Todos</button>
                    </div>
                </div>
                {renderList && (
                    <ul className={style.section_list}>
                        {renderList.map((movie) => (
                            <CardTrending key={movie.id} movie={movie} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default HomeSection;
