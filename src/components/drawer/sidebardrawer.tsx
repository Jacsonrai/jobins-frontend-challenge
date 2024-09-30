import styled from "styled-components";
import { usePageHook } from "../../hooks/usepagehook";
import { useEffect } from "react";
import "./sidebardrawer.scss";
import IndentIcon from "../icons/indenticon";
import IconButton from "../resuable/iconbutton";
import { Link, useLocation } from "react-router-dom";
import { SideBarItems } from "./sidebaritem";

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
    bgcolor?: string;
    width?: string | number;
}
interface LinkProps {
    selected?: boolean;
}

const StyleSidebarDrawer = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "width",
})<SidebarProps>((props) => ({
    background: props.bgcolor ?? "rgba(255, 255, 255, 1)",
    height: "100vh",
    width: props.width ?? "20rem",
    top: 0,
    position: "fixed",
    transition: "width 0.7s ease-in-out",
}));
const StyledLink = styled(Link).withConfig({
    shouldForwardProp: (prop) => prop !== "selected",
})<LinkProps>((props) => ({
    color: props.selected ? "rgba(35, 39, 46, 1)" : "rgba(139, 144, 154, 1)",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "capitalize",
    backgroundColor: props.selected ? "rgba(243, 244, 248, 1)" : "transparent",
    padding: "9px 16px",
    borderRadius: "6px",
    fontWeight: props?.selected ? 600 : 500,
    gap: "8px",
    "&:hover": {
        backgroundColor: "rgba(243, 244, 248, 1)",
        color: "rgba(35, 39, 46, 1)",
    },
}));

const SidebarDrawer = () => {
    const { state, dispatch } = usePageHook();
    const location = useLocation();
    const currentActivePath = location.pathname;
    useEffect(() => {
        dispatch({ type: "OPEN_DRAWER" });
        dispatch({ type: "NO_PAGE_FOUND_TRIGGER", payload: false });
    }, [location]);
    const handleCloseDrawer = () => {
        dispatch({ type: "CLOSE_DRAWER" });
    };

    return (
        <StyleSidebarDrawer width={state.openDrawer ? "20rem" : "4rem"}>
            <div className="side-drawer-container">
                <div className="side-drawer-logo-collapse-container">
                    <div className="logo-container">
                        <div
                            className={
                                state?.openDrawer
                                    ? "logo-img"
                                    : "logo-img-minimized"
                            }
                        >
                            <img src="logo.png" />
                        </div>
                        <h3>JoBins</h3>
                    </div>
                    <IconButton type="button" onClick={handleCloseDrawer}>
                        <IndentIcon width={24} height={24} />
                    </IconButton>
                </div>
                {state?.openDrawer ? (
                    <div className="side-drawer-side-items-container">
                        <div className="side-drawer-main-menu-container">
                            <p>Main menu</p>
                            <div className="side-drawer-item-list-container">
                                {SideBarItems?.filter(
                                    (item) => item.type === "main"
                                ).map((item, index) => (
                                    <StyledLink
                                        to={item.path}
                                        selected={
                                            currentActivePath === item.path
                                                ? true
                                                : false
                                        }
                                        key={index}
                                    >
                                        <item.icon width={22} height={22} />
                                        {item.name}
                                    </StyledLink>
                                ))}
                            </div>
                        </div>
                        <div className="side-drawer-products-container">
                            <p>products</p>
                            <div className="side-drawer-item-list-container">
                                {SideBarItems?.filter(
                                    (item) => item.type === "product"
                                ).map((item, index) => (
                                    <StyledLink
                                        to={item.path}
                                        selected={
                                            currentActivePath === item.path
                                                ? true
                                                : false
                                        }
                                        key={index}
                                    >
                                        <item.icon width={22} height={22} />
                                        {item.name}
                                    </StyledLink>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="side-bar-minimized-container">
                        {SideBarItems?.map((item, index) => (
                            <IconButton key={index}>
                                <item.icon width={25} height={25} />
                            </IconButton>
                        ))}
                    </div>
                )}
            </div>
        </StyleSidebarDrawer>
    );
};

export default SidebarDrawer;
