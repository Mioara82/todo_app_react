import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  text-align: center;
  padding: 10px;
  margin-left: 20px;
  border-radius: 50%;
  position: absolute;
  left: 0px;
  background: ${({ theme }) => theme.buttonBg};
`;

export const StyledInput = styled.input`
  width: ${(props) => (`${props.$small}` ? "70%" : "100%")};
  height: 60px;
  outline: none;
  border: 1px solid rgb(68, 68, 68);
  margin: 20px auto;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.background};
  padding: ${(props) => (`${props.$padding}` ? "0 10px 0 50px" : "0px")};
  font-size: 14px;
  position: relative;
  &:focus {
    border: 1px solid #0081a7;
  }
  &::placeholder {
    position: absolute;
    left: 30px;
    bottom: 18px;
    opacity: 0.7;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  position: relative;
  input:focus + i {
    display: none;
  }
`;

export const InlineDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: rgba(13, 153, 255, 0.1);
  margin-right: 16px;
`;

export const TagButton = styled.button`
  border-radius: 50%;
  border: 2px dotted #c32f27;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    border: none;
    background: #ee6055;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  width: 30px;
  height: 30px;
  gap: 16px;
  border-radius: 50%;
  background-color: rgba(13, 153, 255, 0.1);
  cursor: pointer;
  margin: auto 10px;
`;

export const SaveButton = styled.button`
  width: 100px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 90px;
  padding: 0.75rem;
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 40%;
  color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
    border: 1px solid #0081a7;
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const ErrorDiv = styled.div`
  font-size: 10px;
  color: red;
  margin: 12px;
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BlinkingCursor = styled.i`
  position: absolute;
  width: 25px;
  height: 2px;
  background-color: #0081a7;
  left: 75px;
  top: 75%;
  animation-name: ${blinkAnimation};
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  opacity: 1;
`;
