import styled from "styled-components";
import { usePageHook } from "../../hooks/usepagehook";
import { useEffect } from "react";

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
    bgcolor?: string;
    width?: string | number;
}

const StyleSidebarDrawer = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "width",
})<SidebarProps>((props) => ({
    background: props.bgcolor ?? "rgba(255, 255, 255, 1)",
    height: "100vh",
    width: props.width ?? "20rem",
    top: 0,
    position: "fixed",
}));

const SidebarDrawer = () => {
    const { state, dispatch } = usePageHook();
    useEffect(() => {
        dispatch({ type: "OPEN_DRAWER" });
    }, []);
    return (
        <StyleSidebarDrawer
            width={state.openDrawer ? "20rem" : 0}
        ></StyleSidebarDrawer>
    );
};

export default SidebarDrawer;
