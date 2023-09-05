import { useParams } from "react-router-dom";

const Results = () => {
    const { query } = useParams();

    return <div>Results: {query}</div>;
};

export default Results;
