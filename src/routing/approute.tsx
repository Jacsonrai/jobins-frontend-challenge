import type { ReactElement } from "react";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/home"));
const About = lazy(() => import("../pages/about/about"));
const PageNotFound = lazy(() => import("../pages/pagenotfound"));

interface AppRouteItems {
    index: boolean;
    element: ReactElement;
    path?: string;
}

export const AppRoute: AppRouteItems[] = [
    {
        index: true,
        element: <Home />,
    },
    {
        index: false,
        path: "/about",
        element: <About />,
    },
    {
        index: false,
        path: "*",
        element: <PageNotFound />,
    },
];
