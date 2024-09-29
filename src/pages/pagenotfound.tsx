import { Link } from "react-router-dom";
import "./pagenotfound.scss";
const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <h3>404</h3>
            <h6>Sorry the page you tried cannot be found</h6>
            <Link to={"/"}>
                <button>Dashboard</button>
            </Link>
        </div>
    );
};

export default PageNotFound;
