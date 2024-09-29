import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./components/ErrorFallBack";
import CenterLoader from "./components/resuable/CenterLoader";
import { RouterProvider } from "react-router-dom";
import { router } from "./provider/routeprovider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Suspense fallback={<CenterLoader />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    </StrictMode>
);
