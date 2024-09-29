import { lazy } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

const AppLayout = lazy(() => import("../layout/applayout"));
const Home = lazy(() => import("../pages/home/home"));
const About = lazy(() => import("../pages/about/about"));
const PageNotFound = lazy(() => import("../pages/pagenotfound"));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);
