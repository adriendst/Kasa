import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage/errorPage.tsx";
import Home from "./Home/home.tsx";
import Root from "./Root/Root.tsx";
import Fiche from "./Fiche/Fiche.tsx";
import APropos from "./APropos/APropos.tsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/fiche/:ficheId",
                element: <Fiche />,
            },
            {
                path: "/a-propos",
                element: <APropos />,
            },
            {
                path: "/error",
                element: <ErrorPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
