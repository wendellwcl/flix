import { useContext, useEffect, useState } from "react";

//Contexts
import { MoviesContext } from "../contexts/MoviesContext";

interface Props {
    url: string;
}

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWI4MzU0YjU4NWE0YTg0ZWViMDJjM2QyNjE5ZjRiMCIsInN1YiI6IjY0ZGNmOWY4Yjc3ZDRiMTEzZTA1YjliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqzvfG38tW3kda0vaomH5MPm_I9_nhLJovUutbFTRro",
    },
};

const useFetch = ({ url }: Props) => {
    const { setLoading } = useContext(MoviesContext);

    const [data, setData] = useState<any>();

    useEffect(() => {
        async function fetchData(url: string) {
            setLoading(true);

            await fetch(url, options)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((err) => console.log(err));

            setLoading(false);
        }

        fetchData(url);
    }, [url]);

    return data;
};

export default useFetch;
