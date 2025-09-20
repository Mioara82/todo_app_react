import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../contexts/ToDoContext";
import Todo from "../../components/Todo/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRepeat } from "@fortawesome/free-solid-svg-icons";
import SubtasksList from "../../components/SubtasksList";
import Modal from "../../components/Modal";
import {
  LinkWrapper,
  Wrapper,
  StyledButton,
  StyledLink,
  TaskWrapper,
  SubHeading
} from "./styles";

const TodoDetails = () => {
  const { id } = useParams();
  const { getTodo, removeTodo, repeatTodo, completeSubtask } = useTodo();
  const todo = getTodo(id);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRemove = () => {
    removeTodo(id);
    setShowModal(false);
    navigate("/");
  };

  const handleRepeat = () => {
    repeatTodo(todo), navigate("/");
  };

  if (!todo) return null;
  return (
    <div>
      <TaskWrapper style={showModal ? { filter: "blur(4px)" } : {}}>
        <Wrapper>
          <LinkWrapper>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </LinkWrapper>
          <h1>Task details</h1>
        </Wrapper>
        <Todo todo={todo} showDetails showProgressBar={true} />
      </TaskWrapper>
      <div>
        <SubHeading>Cheklist for subtasks</SubHeading>
        {!!todo.subtasks && (
          <SubtasksList
            setToComplete
            subtasks={todo.subtasks}
            handleCompleteSubtask={(subtaskId) =>
              completeSubtask(id, subtaskId)
            }
          />
        )}
      </div>
      <Wrapper>
        <StyledButton>
          <StyledLink to={`/editTodo/${todo.id}`}>Edit task</StyledLink>
        </StyledButton>
        <StyledButton onClick={openModal} $hasRedBackground={true}>
          Delete task
        </StyledButton>
      </Wrapper>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        onRemove={(todoId) => handleRemove(todoId)}
      />
      <StyledButton $w140 $h20 $mgAuto onClick={handleRepeat}>
        <FontAwesomeIcon icon={faRepeat} />
        Repeat task
      </StyledButton>
    </div>
  );
};

export default TodoDetails;
