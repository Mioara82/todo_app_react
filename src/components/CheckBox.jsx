import { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    props.handleChange(isChecked, props.value);
  };
  return (
    <>
      <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>
      <input
        type="checkbox"
        value={props.value}
        checked={checked}
        onChange={handleChange}
      />
    </>
  );
};

export default CheckBox;
