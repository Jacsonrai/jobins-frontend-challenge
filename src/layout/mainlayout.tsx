import styled from "styled-components";
import type { MainLayoutProps } from "../type/other";
import { usePageHook } from "../hooks/usepagehook";

interface StyledMainLayoutProps {
    bgcolor?: string;
    width?: string | number;
}
const StyledMainLayout = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "width",
})<StyledMainLayoutProps>((props) => ({
    marginLeft: props.width ?? "20rem",
    position: "relative",
    height: "100vh",
    background: "#f5f5f5",
}));

const MainLayout = ({ children }: MainLayoutProps) => {
    const { state } = usePageHook();
    return (
        <StyledMainLayout width={state.openDrawer ? "20rem" : "4rem"}>
            {children}
        </StyledMainLayout>
    );
};

export default MainLayout;
