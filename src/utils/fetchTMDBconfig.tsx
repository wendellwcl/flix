async function fetchTMDBconfig(endpoint: string): Promise<any> {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWI4MzU0YjU4NWE0YTg0ZWViMDJjM2QyNjE5ZjRiMCIsInN1YiI6IjY0ZGNmOWY4Yjc3ZDRiMTEzZTA1YjliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqzvfG38tW3kda0vaomH5MPm_I9_nhLJovUutbFTRro",
        },
    };

    const url = `https://api.themoviedb.org/3/${endpoint}`;

    try {
        const response = await fetch(url, options);

        if (response.status != 200) {
            throw new Error("Ops! Algo deu errado com sua requisição");
        }

        const data = await response.json();

        return data;
    } catch (err) {
        const errorObj = {
            error: err,
        };

        return errorObj;
    }
}

export default fetchTMDBconfig;
