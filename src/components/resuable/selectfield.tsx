import styled from "styled-components";
import "./selectfield.scss";
import { CSSProperties, SelectHTMLAttributes } from "react";
interface SelectField {
    sx?: CSSProperties;
}
interface OptionItems {
    value: number;
    label: string;
}
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    sx?: CSSProperties;
    options: OptionItems[];
    onChanges?: (_value: number) => void;
}
const StyledSelect = styled("select")<SelectField>(({ sx }) => ({
    fontSize: "15px",
    padding: "10px 20px",
    borderRadius: "6px",
    border: 0,
    outline: "none",
    backgroundColor: "#fff",
    width: "100%",
    color: "rgba(139, 144, 154, 1)",
    textTransform: "capitalize",
    ...sx,
}));
const SelectField = ({
    sx,
    options,
    value,
    onChanges,
    ...rest
}: SelectFieldProps) => {
    return (
        <StyledSelect
            sx={sx}
            value={value}
            onChange={(e) => onChanges && onChanges(Number(e.target.value))}
            {...rest}
        >
            {options?.map((item, index) => (
                <option value={item.value} key={index}>
                    {item.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default SelectField;
