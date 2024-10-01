import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
    bgcolor?: string;
    active?: boolean;
}
const StyledIconButton = styled("button")<ButtonProps>((props) => ({
    background: props.active
        ? "rgba(15, 96, 255, 0.2)"
        : props.bgcolor ?? "transparent",
    borderRadius: "50%",
    cursor: "pointer",
    border: 0,
    height: props.height ?? "40px",
    width: props.width ?? "40px",
    transition: "background-color 0.3s ease",
    "&:hover": {
        backgroundColor: "rgba(139, 144, 154, 0.1)",
    },
}));
const IconButton = ({ children, ...props }: ButtonProps) => {
    return <StyledIconButton {...props}>{children}</StyledIconButton>;
};

export default IconButton;
