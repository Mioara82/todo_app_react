import React from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import { useTodo } from "../../contexts/ToDoContext";

const AddTodoPage = () => {
  const { addTodo } = useTodo();
  return (
    <TodoForm
      title="Add new task"
      handleSubmit={addTodo}
      submitText="Add task"
      placeholder="Add new task..."
    />
  );
};
export default AddTodoPage;
