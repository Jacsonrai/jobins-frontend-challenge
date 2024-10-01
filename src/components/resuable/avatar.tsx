import { ReactNode } from "react";
import styled from "styled-components";
import "./avatar.scss";

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
}
const StyledAvatar = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})<AvatarProps>((props) => ({
    width: props.width ?? "50px",
    height: props.height ?? "50px",
    backgroundColor: "rgba(115, 103, 240, 1)",
    borderRadius: "100%",
    position: "relative",
    cursor: "pointer",
}));
const Avatar = ({ children, width, height }: AvatarProps) => {
    return (
        <StyledAvatar height={height} width={width}>
            <div className="avatar-contain">{children}</div>
        </StyledAvatar>
    );
};

export default Avatar;
