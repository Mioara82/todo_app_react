import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 70%;
  padding-left: 20px;
  background: ${({ theme }) => theme.background};
  border: 1px solid lightgrey;
  border-radius: 30px;
  margin: 0 auto 20px auto;
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  margin: auto 10px;
`;

const SubtasksList = ({
  subtasks,
  handleRemoveSubtask,
  handleCompleteSubtask,
  setToComplete,
}) => {
  return (
    <div>
      {Array.isArray(subtasks) &&
        subtasks.map((subtask, index) => {
          return (
            <StyledDiv key={subtask.id}>
              <h5>{index + 1}.</h5>
              <h5
                style={{
                  textDecoration: subtask.isCompleted ? "line-through" : "none",
                }}
              >
                {subtask.name}
              </h5>
              {!!setToComplete ? (
                <>
                  <StyledButton
                    onClick={() => handleCompleteSubtask(subtask.id)}
                    style={{
                      background: subtask.isCompleted
                        ? "#1e96fc"
                        : "rgba(13, 153, 255, 0.1)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginLeft: "auto",
                      }}
                    />
                  </StyledButton>
                </>
              ) : (
                <>
                  <StyledButton onClick={() => handleRemoveSubtask(subtask.id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </StyledButton>
                </>
              )}
            </StyledDiv>
          );
        })}
    </div>
  );
};

export default SubtasksList;
