import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => (`${props.$small}` ? "70%" : "100%")};
  height: 60px;
  outline: none;
  border: 1px solid rgb(68, 68, 68);
  margin: 20px auto;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.background};
  padding: ${(props) => (`${props.$padding}` ? "0 0 0 50px" : "0px")};
  font-size: 14px;
  position: relative;
  &:focus {
    border: 1px solid #0081a7;
  }
`;

const Input = (props) => {
  return (
    <StyledInput
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      {...props.rest}
    />
  );
};

export default Input;
