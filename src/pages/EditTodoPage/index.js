import React from "react";
import { useParams } from "react-router-dom";
import TodoForm from "../../components/TodoForm/TodoForm";
import { useTodo } from "../../contexts/ToDoContext";

const EditTodoPage = () => {
  const { id } = useParams();
  const { editTodo, getTodo } = useTodo();
  const todo = getTodo(id);

  const handleSubmit = (task) => {
    editTodo(id, task);
  };

  return (
    <TodoForm
      title="Edit task"
      handleSubmit={handleSubmit}
      todo={todo}
      submitText="Save task"
      placeholder="Edit task"
    />
  );
};

export default EditTodoPage;
