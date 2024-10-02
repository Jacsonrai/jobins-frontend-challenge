import { Outlet } from "react-router-dom";
import MainLayout from "./mainlayout";
import SidebarDrawer from "../components/drawer/sidebardrawer";
import { usePageHook } from "../hooks/usepagehook";
import { useEffect } from "react";
import AppBar from "../components/appbar/appbar";
import useMediaQuery from "../hooks/usemediaquery";

const AppLayout = () => {
    const { dispatch } = usePageHook();
    const { screenWidth } = useMediaQuery();
    useEffect(() => {
        if (screenWidth <= 992) {
            dispatch({ type: "CLOSE_DRAWER" });
        } else {
            dispatch({ type: "OPEN_DRAWER" });
        }
    }, [screenWidth]);

    return (
        <>
            <SidebarDrawer />
            <MainLayout>
                <AppBar />
                <Outlet />
            </MainLayout>
        </>
    );
};

export default AppLayout;
