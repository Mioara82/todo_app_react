import styled from "styled-components";
import { updateProgress } from "../utils";

export const ProgressBarEl = styled.progress`
  width: 100%;
  height: 20px;
  transition: width 0.5s ease;
  color: red;
`;

export const InlineDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: ${(props) => (props.$mgleft ? "auto" : "0px")};
  padding: 8px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const ProgressBar = ({ todo }) => {
  return (
    <div>
      <InlineDiv>
        <StyledLabel htmlFor="progress">Task completed</StyledLabel>
        <h3 style={{ marginLeft: "auto" }}>{updateProgress(todo)}%</h3>
      </InlineDiv>
      <ProgressBarEl
        id="progress"
        max="100"
        min="0"
        value={updateProgress(todo)}
      >
        {updateProgress(todo)}%
      </ProgressBarEl>
    </div>
  );
};

export default ProgressBar;
