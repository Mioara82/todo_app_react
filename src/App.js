import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";
import TodoProvider from "./contexts/ToDoContext";
import AddTodoPage from "./pages/AddTodoPage";
import TodoDetails from "./pages/TodoDetails";
import EditTodoPage from "./pages/EditTodoPage";
import Home from "./pages/Home";
import Toggle from "./components/Toggler";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const getThemeButton =
    theme === "light" ? (
      <FontAwesomeIcon icon={faSun} />
    ) : (
      <FontAwesomeIcon icon={faMoon} />
    );

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle
          theme={theme}
          toggleTheme={themeToggler}
          text={getThemeButton}
        />
        <TodoProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/newTodo/" element={<AddTodoPage />} />
            <Route path="/editTodo/:id" element={<EditTodoPage />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>
        </TodoProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
