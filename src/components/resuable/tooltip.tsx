import { ReactNode } from "react";
import "./tooltip.scss";

interface ToolTipProps {
    children: ReactNode;
    title: string;
}
const ToolTip = ({ children, title }: ToolTipProps) => {
    return (
        <div className="tool-tip-container">
            {children}
            <span className="tool-tip-text">{title}</span>
        </div>
    );
};

export default ToolTip;
