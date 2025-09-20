import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
`;

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: ${(props) => (props.$small ? "10px" : "30px")};
  height: ${(props) => (props.$small ? "10px" : "30px")};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  margin: auto 4px;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  margin-right: 16px;
  font-size: 12px;
`;

export const InlineDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: ${(props) => (props.$mgleft ? "auto" : "0px")};
  padding: 8px;
`;

export const StyledLink = styled(Link)`
  font-size: ${(props) => (props.$small ? "12px" : "20px")};
  font-weight: 600;
  text-decoration: none;
  color: #000;
  margin-left: 4px;
  &:hover {
    color: #0077b6;
  }
`;

export const StyledTitle = styled.h5`
  margin-left: 12px;
  opacity: ${(props) => (props.$opacity ? "0.6" : "1")};
  font-weight: 400;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 20px;
  transition: width 0.5s ease;
  color: red;
`;
