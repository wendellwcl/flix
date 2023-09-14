import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import LoadingContextProvider from "./contexts/LoadingContext";
import MoviesContextProvider from "./contexts/MoviesContext";

//Pages
import Root from "./Root";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Credits from "./pages/Credits/Credits";
import MyList from "./pages/MyList/MyList";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";

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
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <LoadingContextProvider>
            <MoviesContextProvider>
                <RouterProvider router={router} />
            </MoviesContextProvider>
        </LoadingContextProvider>
    </React.StrictMode>
);
