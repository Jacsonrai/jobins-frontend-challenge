import styled, { keyframes } from "styled-components";
import "./loader.scss";
import { CenterLoaderProps } from "../../type/other";

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const StyledLoader = styled.div<{
    $inputColor?: string;
    $width?: string;
}>`
    width: ${({ $width }) => $width || "50px"};
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${({ $inputColor }) => $inputColor || "#25b09b"};
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: ${rotateAnimation} 1s infinite linear;
`;

const CenterLoader = ({ color, width }: CenterLoaderProps) => {
    return (
        <div className="loader-container">
            <StyledLoader
                $inputColor={color}
                $width={width}
                className="center-loader"
            />
        </div>
    );
};

export default CenterLoader;
