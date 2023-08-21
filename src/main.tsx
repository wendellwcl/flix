import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Credits from "./pages/Credits/Credits";
import MyList from "./pages/MyList/MyList";
import Details from "./pages/Details/Details";

import "normalize.css";
import "./styles/index.css";

import MoviesContextProvider from "./contexts/MoviesContext";

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
                path: "search",
                element: <Search />,
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
                path: "details",
                element: <Details />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MoviesContextProvider>
            <RouterProvider router={router} />
        </MoviesContextProvider>
    </React.StrictMode>
);
