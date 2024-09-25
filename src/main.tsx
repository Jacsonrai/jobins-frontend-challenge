import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./components/ErrorFallBack";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Suspense fallback={<p>loading..</p>}>
                <App />
            </Suspense>
        </ErrorBoundary>
    </StrictMode>
);
