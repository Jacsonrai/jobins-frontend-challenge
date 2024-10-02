import AnalyticIcon from "../../components/icons/analyticicon";
import YenIcon from "../../components/icons/yenicon";
import Card from "../../components/resuable/card";
import Progressbar from "../../components/resuable/progressbar";
import "./home.scss";
const Home = () => {
    return (
        <div className="container dashboard-container">
            <div className="top-section">
                <Card>
                    <div className="top-section-sells">
                        <div className="sells-icon">
                            <AnalyticIcon width={"73px"} height={"73px"} />
                        </div>
                        <div className="divider"></div>
                        <div className="sells-details-status">
                            <div className="sells-top-details">
                                <h5>Total Sales & Costs</h5>
                                <p>Last 7 days</p>
                            </div>
                            <div className="sells-bottom-details">
                                <h3>$350K</h3>
                                <span>
                                    <p>
                                        <strong>8.56K</strong>
                                    </p>
                                    <p>vs last 7 days</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="top-profit-section">
                        <div className="top-profit-icon-title-section">
                            <div className="top-profit-icon-section">
                                <YenIcon width={"40px"} height={"43px"} />
                            </div>
                            <div className="top-profit-title-section">
                                <h5>Total Profit</h5>
                                <p>Last 7 days</p>
                            </div>
                        </div>
                        <div className="top-profit-bottom-details">
                            <h3>50K</h3>
                            <span>
                                <p>
                                    <strong>8.56K</strong>
                                </p>
                                <p>vs last 7 days</p>
                            </span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            padding: "20px 20px",
                        }}
                    >
                        <Progressbar width={25.8} />
                        <Progressbar width={16.2} />
                        <Progressbar width={11.9} />
                    </div>
                </Card>
            </div>
            <div className="middle-section">
                <Card>
                    <p>home</p>
                </Card>
            </div>
            <div className="bottom-section">
                <Card>
                    <p>home</p>
                </Card>
            </div>
        </div>
    );
};

export default Home;
