import { Outlet } from "react-router-dom";
import MainLayout from "./mainlayout";
import SidebarDrawer from "../components/drawer/sidebardrawer";

const AppLayout = () => {
    return (
        <>
            <SidebarDrawer />
            <MainLayout>
                <Outlet />
            </MainLayout>
        </>
    );
};

export default AppLayout;
