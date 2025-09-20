import { createContext, useContext } from "react";
import { uid } from "uid";
import { useLocalState, cloneDeep } from "../../utils";

export const TodoContext = createContext();

export function useTodo() {
  const value = useContext(TodoContext);
  return value;
}

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalState("todos", []);

  const addTodo = (item) => {
    const newTodo = {
      id: uid(),
      isCompleted: false,
      ...item,
    };
    setTodos([...todos, newTodo]);
  };

  const getTodo = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodo = (id, task) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, ...task } : todo
    );
    setTodos(newTodos);
  };

  const repeatTodo = (task) => {
    const repeatedTodo = cloneDeep(task);
    repeatedTodo.id = uid();
    setTodos([...todos, repeatedTodo]);
  };

  const completeSubtask = (todoId, id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === todoId) {
        todo.subtasks.map((subtask) => {
          if (subtask.id === id) {
            subtask.isCompleted = !subtask.isCompleted;
          }
          return subtask;
        });
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        getTodo,
        completeTodo,
        removeTodo,
        editTodo,
        repeatTodo,
        completeSubtask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
