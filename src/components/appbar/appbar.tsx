import BellIcon from "../icons/bellicon";
import Avatar from "../resuable/avatar";
import IconButton from "../resuable/iconbutton";
import "./appbar.scss";
const AppBar = () => {
    return (
        <div className="app-bar-container">
            <div className="page-title-container">
                <p>Dashboard</p>
            </div>

            <div className="notification-icon-container">
                <IconButton>
                    <BellIcon width={30} height={30} />
                    <div className="notification-inner-circle">
                        <p>4</p>
                    </div>
                </IconButton>
            </div>
            <div className="profile-avatar-container">
                <Avatar height="38px" width="38px" />
                <div className="badge" />
            </div>
        </div>
    );
};

export default AppBar;
