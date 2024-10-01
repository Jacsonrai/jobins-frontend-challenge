import { Outlet } from "react-router-dom";
import MainLayout from "./mainlayout";
import SidebarDrawer from "../components/drawer/sidebardrawer";
import { usePageHook } from "../hooks/usepagehook";
import { useEffect } from "react";
import AppBar from "../components/appbar/appbar";

const AppLayout = () => {
    const { dispatch } = usePageHook();
    useEffect(() => {
        dispatch({ type: "OPEN_DRAWER" });
    }, []);
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
