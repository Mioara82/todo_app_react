import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { updateProgress } from "../utils";

const ProgressContainer = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 20px;
  top: 40%;
`;

const ProgressCircle = ({ todo, completed }) => {
  const percentage = updateProgress(todo);
  return (
    <ProgressContainer>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: `${completed ? "#000" : "#F96762"}`,
          pathColor: "#56CBF9",
          trailColor: "#DD475B"
        })}
      />
    </ProgressContainer>
  );
};

export default ProgressCircle;
