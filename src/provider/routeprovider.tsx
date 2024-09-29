import { lazy } from "react";
import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { AppRoute } from "../routing/approute";

const AppLayout = lazy(() => import("../layout/applayout"));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            {AppRoute?.map((route, index) => (
                <React.Fragment key={index}>
                    <Route
                        index={route?.index}
                        path={route.path}
                        element={route.element}
                    />
                </React.Fragment>
            ))}
        </Route>
    )
);
