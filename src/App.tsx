import style from "./App.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "search",
        element: <div>Search</div>,
    },
    {
        path: "credits",
        element: <div>Credits</div>,
    },
]);

function App() {
    return (
        <div className={style.main_container}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
