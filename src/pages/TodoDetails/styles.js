import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled.div`
  width: 35px;
  height: 25px;
  text-align: center;
  padding-top: 10px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  background: #fff;
  border-radius: 50%;
`;

export const TaskWrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 50px 20px;
  border: 1px solid ${({ theme }) => theme.boxBorder};
  border-radius: 12px;
  position: relative;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 50px;
`;

export const StyledButton = styled.div`
  width: ${(props) => (props.$w140 ? "140px" : "")};
  height: ${(props) => (props.$h20 ? "20px" : "")};
  margin: ${(props) => (props.$mgAuto ? "20px auto" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  text-align: center;
  padding: 10px 20px;
  background: ${(props) => (props.$hasRedBackground ? "#e63946" : "#979dac")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transform: scale(1.02);
    border: 1px solid
      ${(props) => (props.$hasRedBackground ? "#ff686b" : "#0466c8")};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  margin-left: 4px;
  &:hover {
    color: #0077b6;
  }
`;

export const SubHeading = styled.h2`
  margin-left: 30px;
  font-size: 18px;
  font-style: italic;
`;
