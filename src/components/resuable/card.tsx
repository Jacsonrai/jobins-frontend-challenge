import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import "./card.scss";
interface CardProps {
    children?: ReactNode;
    sx?: CSSProperties;
}
const StyledCard = styled("div")<CardProps>(({ sx }) => ({
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    borderRadius: "16px",
    ...sx,
}));
const Card = ({ children, sx }: CardProps) => {
    return (
        <div className="card-content">
            <StyledCard sx={sx}>{children}</StyledCard>
        </div>
    );
};

export default Card;
