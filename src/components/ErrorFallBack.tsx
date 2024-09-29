import "./errorfallback.scss";
interface ErrorFallBackProps {
    error?: Error;
    resetErrorBoundries?: () => void;
}
export const ErrorFallBack = ({ error }: ErrorFallBackProps) => {
    return (
        <div className="error-fall-back-container">
            <p className="error-title"> Whoops,Something went wrong:</p>
            <p className="error-description">
                Please either refresh the page or return home to try again.
                <strong className="error-message"> {error?.message}</strong>
            </p>
        </div>
    );
};
