import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

//Context
import GenresContextProvider from "./contexts/GenresContext";

//Pages
import Root from "./Root";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

//Style
import "normalize.css";
import "./styles/index.css";

const router = createHashRouter([
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
                path: "details/:id",
                element: <Details />,
            },
            {
                path: "error/:message?",
                element: <ErrorPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GenresContextProvider>
            <RouterProvider router={router} />
        </GenresContextProvider>
    </React.StrictMode>
);
