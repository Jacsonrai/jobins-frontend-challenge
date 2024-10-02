import { useEffect, useState } from "react";
import styled from "styled-components";
interface ProgressProps {
    width: number;
}
const StyledProgressbar = styled("div")(() => ({
    height: "6px",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: "rgba(233, 231, 253, 1)",
    overflow: "hidden",
}));
const StyledProgress = styled("div")<ProgressProps>(({ width }) => ({
    height: "100%",
    width: `${width}%`,
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    backgroundColor: "rgba(15, 96, 255, 1)",
    transition: "width 0.2s ease-in-out",
}));
const Progressbar = ({ width }: ProgressProps) => {
    const [currentWidth, setCurrentWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWidth((prev) => {
                if (prev >= width) {
                    clearInterval(interval);
                    return width;
                }
                return Math.min(prev + 1, width);
            });
        }, 8);

        return () => clearInterval(interval);
    }, [width]);
    return (
        <StyledProgressbar>
            <StyledProgress width={currentWidth} />
        </StyledProgressbar>
    );
};

export default Progressbar;
