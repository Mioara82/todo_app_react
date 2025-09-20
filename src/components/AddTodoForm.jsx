import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 40%;
  max-width: 200px;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.boxBorder};
  border-radius: 90px;
  padding: 0.75rem;
  font-size: 1rem;
  margin: 20px auto;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  z-index: 1;
  &:hover {
    cursor: pointer;
    border: 1px solid #0081a7;
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const AddTodoForm = () => {
  return (
    <StyledLink to={`/newTodo/`}>
      <FontAwesomeIcon icon={faPlus} />
      Add new task
    </StyledLink>
  );
};

export default AddTodoForm;
