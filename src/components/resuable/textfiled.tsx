import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface InputField {
    sx?: CSSProperties;
}
interface IconWrapperProps {
    position: "start" | "end";
}
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    iconPosition?: "start" | "end";
    sx?: CSSProperties;
    icon?: ReactNode;
}

const StyledInput = styled("input")<InputField>(({ sx }) => ({
    border: "none",
    outline: "none",
    color: "rgba(139, 144, 154, 1)",
    padding: "10px 0px 10px 10px",
    fontSize: "15px",
    borderRadius: "4px",
    ...sx,
}));
const IconWrapper = styled.div<IconWrapperProps>(() => ({
    display: "flex",
    alignItems: "center",
    color: "rgba(139, 144, 154, 1)",
    background: "#fff",
    padding: "10px 10px",
}));
const StyledInputWrapper = styled("div")(() => () => ({
    display: "flex",
    alignItems: "center",
}));
const TextField = ({
    sx,
    iconPosition,
    icon,
    name,
    placeholder,
    onChange,
    id,
    ...rest
}: TextFieldProps) => {
    return (
        <StyledInputWrapper>
            {icon && iconPosition === "start" && (
                <IconWrapper position="start">{icon}</IconWrapper>
            )}

            <StyledInput
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                {...rest}
                sx={sx}
            />
            {icon && iconPosition === "end" && (
                <IconWrapper position="end">{icon}</IconWrapper>
            )}
        </StyledInputWrapper>
    );
};

export default TextField;
