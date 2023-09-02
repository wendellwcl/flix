const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWI4MzU0YjU4NWE0YTg0ZWViMDJjM2QyNjE5ZjRiMCIsInN1YiI6IjY0ZGNmOWY4Yjc3ZDRiMTEzZTA1YjliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqzvfG38tW3kda0vaomH5MPm_I9_nhLJovUutbFTRro",
    },
};

export default async function fetchTMDBconfig(endpoint: string): Promise<any> {
    let url = `https://api.themoviedb.org/3${endpoint}`;
    let data;

    await fetch(url, options)
        .then((res) => res.json())
        .then((res) => (data = res))
        .catch((err) => console.log(err));

    return data;
}
