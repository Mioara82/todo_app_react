import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faCheck,
  faCalendarDays,
  faArrowUp,
  faArrowsUpDownLeftRight
} from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "../../contexts/ToDoContext";
import {
  StyledButton,
  Tag,
  InlineDiv,
  MainWrapper,
  StyledLink,
  StyledTitle
} from "./styles";
import {
  getTagBg,
  formatDate,
  formatTime,
  calculateTimeDue,
  setDateStyle,
  setLevels,
  updateProgress
} from "../../utils";
import ProgressCircle from "../ProgressCircle";
import ProgressBar from "../ProgressBar";

function Todo({ todo, showProgressBar }) {
  const { completeTodo } = useTodo();

  if (!todo) return null;

  const currentTags = todo.tags;
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <MainWrapper style={{ backgroundColor: todo.isCompleted ? "#F96762" : "" }}>
      <InlineDiv>
        <div>
          <StyledButton
            $small={true}
            style={{
              backgroundColor: setDateStyle(calculateTimeDue(todo.dueDate))
            }}
          />
        </div>
        <StyledLink
          to={`/todo/${todo.id}`}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.name}
        </StyledLink>
        <InlineDiv $mgleft={true}>
          <StyledButton as={StyledLink}>
            <StyledLink to={`/editTodo/${todo.id}`} $small>
              <FontAwesomeIcon icon={faPencil} />
            </StyledLink>
          </StyledButton>
          <StyledButton
            onClick={() => {
              completeTodo(todo.id), updateProgress(todo);
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </StyledButton>
        </InlineDiv>
      </InlineDiv>
      <InlineDiv>
        <FontAwesomeIcon icon={faCalendarDays} style={{ opacity: "0.6" }} />
        <StyledTitle $opacity>Due date: </StyledTitle>
        <StyledTitle
          $blue={true}
          style={{
            color: setDateStyle(calculateTimeDue(todo.dueDate))
          }}
        >
          {!todo.dueDate && !todo.dueTime ? (
            <div>No set date</div>
          ) : todo.dueDate < currentDate ? (
            <div>Task is overdue</div>
          ) : (
            <>
              {!!todo.dueDate && formatDate(todo.dueDate)}
              {!!todo.dueTime && formatTime(todo.dueDate, todo.dueTime)}
            </>
          )}
        </StyledTitle>
      </InlineDiv>
      <InlineDiv>
        <FontAwesomeIcon icon={faArrowUp} style={{ opacity: "0.6" }} />
        <StyledTitle $opacity>Priority:</StyledTitle>
        <StyledTitle>
          <span>{setLevels(todo.priority)}</span>
        </StyledTitle>
      </InlineDiv>
      <InlineDiv>
        <FontAwesomeIcon
          icon={faArrowsUpDownLeftRight}
          style={{ opacity: "0.6" }}
        />
        <StyledTitle $opacity>Complexity:</StyledTitle>
        <StyledTitle>
          <span>{setLevels(todo.complexity)}</span>
        </StyledTitle>
      </InlineDiv>
      <InlineDiv>
        {!!currentTags &&
          Array.isArray(currentTags) &&
          currentTags.map((tag, index) => (
            <Tag key={tag.id} style={{ backgroundColor: getTagBg(index) }}>
              {tag.name}
            </Tag>
          ))}
      </InlineDiv>
      {!!showProgressBar ? (
        <ProgressBar todo={todo} />
      ) : (
        <ProgressCircle todo={todo} completed={todo.isCompleted} />
      )}
    </MainWrapper>
  );
}

export default Todo;
