import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 30px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  position: relative;
  margin: 20px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 50%;
  max-width: 200px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 90px;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  margin: auto;
  color: #fff;
  border: 1px solid transparent;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    border: 1px solid #0081a7;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const SortingButton = styled.button`
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30px;
  gap: 16px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  margin: auto 10px;
  padding: 16px 40px;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  margin-top: 20px;
  input:focus + i {
    display: none;
  }
  & ::placeholder {
    position: absolute;
    left: 20px;
    bottom: 15px;
    opacity: 0.7;
  }
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
  left: 55px;
  top: 70%;
  animation-name: ${blinkAnimation};
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  opacity: 1;
`;

export const InputButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40px;
  width: 30px;
  height: 30px;
  gap: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  margin: auto 10px;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 50px;
  z-index: 2;
`;
