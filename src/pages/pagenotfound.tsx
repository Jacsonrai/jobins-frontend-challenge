import { useNavigate } from "react-router-dom";
import "./pagenotfound.scss";
import { usePageHook } from "../hooks/usepagehook";
import { useEffect } from "react";

const PageNotFound = () => {
    const { dispatch } = usePageHook();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({ type: "NO_PAGE_FOUND_TRIGGER", payload: true });
    }, []);
    const onClickDahsboard = () => {
        dispatch({ type: "OPEN_DRAWER" });
        navigate("/");
    };

    return (
        <div className="page-not-found-container">
            <h3>404</h3>
            <h6>Sorry the page you tried cannot be found</h6>
            <button onClick={onClickDahsboard}>Dashboard</button>
        </div>
    );
};

export default PageNotFound;
