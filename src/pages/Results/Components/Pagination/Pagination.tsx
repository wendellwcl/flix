import { useNavigate } from "react-router-dom";

//Styles
import style from "./Pagination.module.css";

interface Props {
    pageNumber: number;
    query: string | undefined;
    encodedApiEndpoint: string;
    totalPages: number | undefined;
}

const Pagination = ({
    pageNumber,
    query,
    encodedApiEndpoint,
    totalPages,
}: Props) => {
    const navigate = useNavigate();

    function handlePrevPage() {
        if (pageNumber > 1) {
            navigate(
                `/results/${query}/${encodedApiEndpoint}/${pageNumber - 1}`,
                { relative: "path" }
            );
        }
    }

    function handleNextPage() {
        if (pageNumber < totalPages! && pageNumber < 500) {
            navigate(
                `/results/${query}/${encodedApiEndpoint}/${pageNumber + 1}`,
                { relative: "path" }
            );
        }
    }

    return (
        <div className={style.pagination_container}>
            <button onClick={handlePrevPage} disabled={pageNumber == 1}>
                &lt;
            </button>
            <span>{pageNumber}</span>
            <button
                onClick={handleNextPage}
                disabled={pageNumber >= 500 || pageNumber >= totalPages!}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
