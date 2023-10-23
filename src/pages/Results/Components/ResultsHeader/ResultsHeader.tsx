//Style
import style from "./ResultsHeader.module.css";

interface Props {
    query: string;
}

const ResultsHeader = ({ query }: Props) => {
    return (
        <div className={style.results_header}>
            <p className={style.results_title}>
                Resultados para:
                <span> "{query}"</span>
            </p>
        </div>
    );
};

export default ResultsHeader;
