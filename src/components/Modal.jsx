import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 20%;
  transition: all 0.5s ease-in-out;
  width: 300px;
  height: 160px;
  border: 1px solid rgb(68, 68, 68);
  background: ${({ theme }) => theme.background};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 20px;
  border-radius: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
  gap: 12px;
  z-index: 4;
`;

const StyledButton = styled.div`
  border: 1px solid rgb(68, 68, 68);
  cursor: pointer;
  background: ${({ theme }) => theme.buttonBg};
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.background};
  }
`;

const Modal = ({ isOpen, onClose, onRemove }) => {
  if (!isOpen) return;
  return (
    <div>
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3 style={{ color: "#e63946" }}>
          Are you sure you want to delete this task?
        </h3>
        <ButtonWrapper>
          <StyledButton onClick={onRemove}>Yes</StyledButton>
          <StyledButton $hasBlueBg={true} onClick={onClose}>
            No
          </StyledButton>
        </ButtonWrapper>
      </Wrapper>
      )
    </div>
  );
};

export default Modal;
