//Style
import style from "./ResultsHeader.module.css";

interface Props {
    query: string;
}

const ResultsHeader = ({ query }: Props) => {
    return (
        <div className={style.results_header}>
            <h2 className={style.results_title}>
                Resultados para:
                <span> "{query}"</span>
            </h2>
        </div>
    );
};

export default ResultsHeader;
