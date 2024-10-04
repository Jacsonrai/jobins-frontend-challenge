import AnalyticIcon from "../../components/icons/analyticicon";
import YenIcon from "../../components/icons/yenicon";
import Card from "../../components/resuable/card";
import Progressbar from "../../components/resuable/progressbar";
import Table from "../../components/resuable/table";
import "./home.scss";
import type { Column } from "../../components/resuable/table";
import { StatusChecker } from "../../helper/helper";
import type { Customer } from "../../type/other";
import { countryProgressData, customerData } from "../../dummydata/dummydata";
import Tabs from "../../components/resuable/tabs";
const Home = () => {
    const columns: Column<Customer>[] = [
        { header: "ID", accessor: "id" },
        { header: "Customer", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Total", accessor: "total" },
        { header: "Method", accessor: "method" },
        {
            header: "Status",
            accessor: (row) => (
                <p
                    style={{
                        color: StatusChecker(row.status.toLowerCase()),
                    }}
                >
                    {row.status}
                </p>
            ),
        },
    ];

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
                    <div className="top-main-progress-section">
                        {countryProgressData?.map((country, index) => (
                            <div className="top-progress-section" key={index}>
                                <div className="progress-flag-container">
                                    <div
                                        style={{
                                            marginTop: "1rem",
                                        }}
                                    >
                                        <country.icon height={34} width={34} />
                                    </div>
                                    <div className="progress-flag-details">
                                        <h5>{country.quantity}</h5>
                                        <p>{country.country}</p>
                                    </div>
                                </div>

                                <Progressbar width={country.percent} />

                                <div className="progress-flag-percentage">
                                    <p
                                        style={{
                                            color:
                                                country.percent > 20
                                                    ? "rgba(40, 199, 111, 1)"
                                                    : "rgba(234, 84, 85, 1)",
                                        }}
                                    >
                                        {country.percent}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="middle-section">
                <Card>
                    <div className="personal-details-section">
                        <div className="personal-details-left-section">
                            <div className="personal-profile-section">
                                <div>
                                    <div className="circle" />
                                </div>
                                <div>
                                    <h6>Robert Fox</h6>
                                    <p>robert@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="personal-details-middle-section">
                            <div className="divider" />
                            <div className="personal-info-section">
                                <h6>Personal information</h6>
                                <div className="contact-container">
                                    <p>Contact Number</p>
                                    <p>
                                        <strong>(201)555-0124</strong>
                                    </p>
                                </div>
                                <div className="date-container">
                                    <p>Date of Birth</p>
                                    <p>
                                        <strong>(201)555-0124</strong>
                                    </p>
                                </div>
                                <div className="member-container">
                                    <p>Member Since</p>
                                    <p>
                                        <strong>(201)555-0124</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="personal-shipping-section">
                            <div className="divider" />
                            <div className="shipping-address-section">
                                <h6>Shipping address</h6>
                                <p>
                                    3517 W. Gray St. Utica, Pennsylvania 57867
                                </p>
                                <div className="total-count-main-container">
                                    <div className="total-count-container">
                                        <h4>150</h4>
                                        <p>Total Order</p>
                                    </div>
                                    <div className="total-count-container">
                                        <h4>150</h4>
                                        <p>Completed</p>
                                    </div>
                                    <div className="total-count-container">
                                        <h4>150</h4>
                                        <p>Cancelled</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="home-tab-container"
                        style={{
                            padding: "0 10px",
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <Tabs
                            tabs={[
                                {
                                    name: "All Orders",
                                    value: 0,
                                },
                                {
                                    name: "Completed",
                                    value: 1,
                                },
                                {
                                    name: "Cancelled",
                                    value: 2,
                                },
                            ]}
                        />
                    </div>
                </Card>
            </div>
            <div className="bottom-section">
                <Table data={customerData} columns={columns} enableAction />
            </div>
        </div>
    );
};

export default Home;
