import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 60px;
  width: 30px;
  height: 30px;
  gap: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  margin: auto 10px;
`;

const Label = styled.label`
  margin-top: 20px;
`;

const SecondaryForm = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    if (!value) return;
    props.handleSubmit(value);
    setValue("");
  };

  return (
    <div>
      <Label htmlFor={props.htmlProperty}>{props.label}</Label>
      <InputWrapper>
        <Input
          right={props.right}
          id={props.id}
          type="text"
          value={value}
          handleChange={handleChange}
          placeholder={props.placeholder}
        />
        <StyledButton type="submit" onClick={(e) => handleSubmit(e, value)}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#000" }} />
        </StyledButton>
      </InputWrapper>
    </div>
  );
};

export default SecondaryForm;
