import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePageHook } from "../../hooks/usepagehook";
import "./sidebardrawer.scss";
import IndentIcon from "../icons/indenticon";
import IconButton from "../resuable/iconbutton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SideBarItems } from "./sidebaritem";
import ToolTip from "../resuable/tooltip";
import Indenticonright from "../icons/indenticonrighticon";
import useMediaQuery from "../../hooks/usemediaquery";

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
    bgcolor?: string;
    width?: string | number;
}
interface LinkProps {
    selected?: boolean;
    open?: boolean;
}

const StyleSidebarDrawer = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "width",
})<SidebarProps>((props) => ({
    background: props.bgcolor ?? "rgba(255, 255, 255, 1)",
    height: "100vh",
    width: props.width ?? "20rem",
    top: 0,
    position: "fixed",
    transition: "width 0.2s ease-in-out",
    zIndex: 100,
}));

const StyledLink = styled(Link).withConfig({
    shouldForwardProp: (prop) => prop !== "selected" && prop !== "open",
})<LinkProps>((props) => ({
    color: props.selected ? "rgba(35, 39, 46, 1)" : "rgba(139, 144, 154, 1)",
    fontSize: "16px",
    display: "flex",
    opacity: props.open ? 1 : 0,
    visibility: props.open ? "visible" : "hidden",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "capitalize",
    backgroundColor: props.selected ? "rgba(243, 244, 248, 1)" : "transparent",
    padding: "9px 16px",
    borderRadius: "6px",
    transition: "opacity 0.9s ease-in-out, visibility 0.3s ease-in-out",
    fontWeight: props?.selected ? 600 : 500,
    gap: "8px",
    "&:hover": {
        backgroundColor: "rgba(243, 244, 248, 1)",
        color: "rgba(35, 39, 46, 1)",
    },
}));

const SidebarDrawer = () => {
    const { state, dispatch } = usePageHook();
    const { screenWidth } = useMediaQuery();
    const location = useLocation();
    const currentActivePath = location.pathname;
    const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState<boolean>(false);
    const [hideButton, setHideButton] = useState<boolean>(false);
    useEffect(() => {
        if (screenWidth <= 992) {
            setHideButton(true);
        } else {
            setHideButton(false);
        }
    }, [screenWidth]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (state.openDrawer) {
            timeout = setTimeout(() => setShowLinks(true), 100);
        } else {
            setShowLinks(false);
        }

        return () => clearTimeout(timeout);
    }, [state.openDrawer]);

    const handleCloseDrawer = () => {
        dispatch({ type: "CLOSE_DRAWER" });
    };
    const handleOpenDrawer = () => {
        dispatch({ type: "OPEN_DRAWER" });
    };

    return (
        <StyleSidebarDrawer width={state.openDrawer ? "20rem" : "4rem"}>
            <div className="side-drawer-container">
                <div className="side-drawer-logo-collapse-container">
                    <div className="logo-container">
                        <Link to="/">
                            <div
                                className={
                                    state?.openDrawer
                                        ? "logo-img"
                                        : "logo-img-minimized"
                                }
                            >
                                <img src="logo.png" alt="Logo" />
                            </div>
                        </Link>

                        {state.openDrawer && <p>JoBins</p>}
                    </div>
                    {state.openDrawer ? (
                        <IconButton type="button" onClick={handleCloseDrawer}>
                            <IndentIcon width={24} height={24} />
                        </IconButton>
                    ) : (
                        <div
                            style={{
                                position: "fixed",
                                left: "70px",
                                top: "7px",
                            }}
                        >
                            {!hideButton && (
                                <IconButton
                                    type="button"
                                    bgcolor="rgba(255, 255, 255, 1)"
                                    onClick={handleOpenDrawer}
                                >
                                    <Indenticonright width={24} height={24} />
                                </IconButton>
                            )}
                        </div>
                    )}
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
                                        }
                                        key={index}
                                        open={showLinks} // Links will fade in after the sidebar transition
                                    >
                                        <item.icon width={22} height={22} />
                                        {item.name}
                                    </StyledLink>
                                ))}
                            </div>
                        </div>
                        <div className="side-drawer-products-container">
                            <p>Products</p>
                            <div className="side-drawer-item-list-container">
                                {SideBarItems?.filter(
                                    (item) => item.type === "product"
                                ).map((item, index) => (
                                    <StyledLink
                                        to={item.path}
                                        selected={
                                            currentActivePath === item.path
                                        }
                                        key={index}
                                        open={showLinks}
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
                            <ToolTip title={item.name} key={index}>
                                <IconButton
                                    onClick={() => navigate(item.path)}
                                    active={currentActivePath === item.path}
                                >
                                    <item.icon width={25} height={25} />
                                </IconButton>
                            </ToolTip>
                        ))}
                    </div>
                )}
            </div>
        </StyleSidebarDrawer>
    );
};

export default SidebarDrawer;
