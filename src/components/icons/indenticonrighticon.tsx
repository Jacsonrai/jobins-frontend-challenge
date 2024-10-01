import { IconProps } from "../../type/other";
const Indenticonright = ({ width, height }: IconProps) => {
    return (
        <svg
            width={width ?? "24"}
            height={height ?? "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 6H7"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 12H10"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 18H7"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Indenticonright;
