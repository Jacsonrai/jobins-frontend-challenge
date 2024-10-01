import { ReactNode } from "react";
import styled from "styled-components";
import "./card.scss";
interface CardProps {
    children?: ReactNode;
}
const StyledCard = styled("div")<CardProps>(() => ({
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "fit-content",
    borderRadius: "16px",
}));
const Card = ({ children }: CardProps) => {
    return (
        <StyledCard>
            <div className="card-content">{children}</div>
        </StyledCard>
    );
};

export default Card;
