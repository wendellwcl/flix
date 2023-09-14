import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import LoadingContextProvider from "./contexts/LoadingContext";
import MoviesContextProvider from "./contexts/MoviesContext";
import ResultsPageTitleContextProvider from "./contexts/ResultsPageTitleContext";

//Pages
import Root from "./Root";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Credits from "./pages/Credits/Credits";
import MyList from "./pages/MyList/MyList";
import Details from "./pages/Details/Details";

//Style
import "normalize.css";
import "./styles/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "results/:query/:apiEndpoint/:page?",
                element: <Results />,
            },
            {
                path: "credits",
                element: <Credits />,
            },
            {
                path: "myList",
                element: <MyList />,
            },
            {
                path: "details/:id",
                element: <Details />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <LoadingContextProvider>
            <MoviesContextProvider>
                <ResultsPageTitleContextProvider>
                    <RouterProvider router={router} />
                </ResultsPageTitleContextProvider>
            </MoviesContextProvider>
        </LoadingContextProvider>
    </React.StrictMode>
);
