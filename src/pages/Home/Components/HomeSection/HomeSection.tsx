import { Link } from "react-router-dom";

//Styles
import style from "./HomeSection.module.css";

interface Props {
    title: string;
    subtitle: string;
    endpoint?: string;
    children: React.ReactNode;
}

const HomeSection = ({ title, subtitle, endpoint, children }: Props) => {
    const encodedEndpoint = endpoint ? encodeURIComponent(endpoint) : null;
    const encodedTitle = title.replaceAll(" ", "+");

    return (
        <section className={style.section_container}>
            <div className={style.section_body}>
                <div className={style.section_header}>
                    <div className={style.section_title_container}>
                        <h3 className={style.section_title}>{title}</h3>
                        <span className={style.section_subtitle}>
                            {subtitle}
                        </span>
                    </div>
                    {encodedEndpoint && (
                        <Link
                            to={`/results/${encodedTitle}/${encodedEndpoint}`}
                            className={style.section_btn}
                        >
                            Ver mais
                        </Link>
                    )}
                </div>
                <div className={style.section_content}>{children}</div>
            </div>
        </section>
    );
};

export default HomeSection;
