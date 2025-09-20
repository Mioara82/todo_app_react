import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faChevronUp,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "../../contexts/ToDoContext";
import AddTodoForm from "../../components/AddTodoForm";
import Todo from "../../components/Todo/Todo";
import Input from "../../components/Input";
import SortList from "../../components/SortList";
import FilterList from "../../components/FilterList";
import { useClickOutside } from "../../utils";
import {
  MainWrapper,
  ButtonWrapper,
  StyledButton,
  InputWrapper,
  InputButton,
  SortingButton,
  Wrapper,
  BlinkingCursor,
} from "./styles";

const Home = () => {
  const { todos } = useTodo();
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");
  const [isPowerMode, setIsPowerMode] = useState(false);
  const [showSortingFilters, setShowSortingFilters] = useState(false);
  const [showTagFilters, setShowTagFilters] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedTagsList, setSelectedTagsList] = useState([]);
  const ref = useRef(null);
  const inputRef = useRef(null);

  const handleOnFocus = () => {
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setSearchValue("");
  };

  useClickOutside(ref, () => {
    setShowSortingFilters(false);
    setShowTagFilters(false);
  });

  const handleDeleteSearch = (e) => {
    setSearchValue("");
  };

  const winner = todos?.reduce((acc, cv) => {
    const accPower = acc.priority + acc.complexity;
    const cvPower = cv.priority + cv.complexity;
    return accPower > cvPower ? acc : cv;
  }, {});

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setShowSortingFilters(false);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.trim().replace(/" "/g, ""));
  };

  const handleSort = (list) => {
    const sortedList = [...list];

    switch (sort) {
      case "Ascending date":
        sortedList.sort((a, b) => a.dueDate - b.dueDate);
        break;
      case "Descending date":
        sortedList.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
        break;
      case "Ascending complexity":
        sortedList.sort((a, b) => a.complexity - b.complexity);
        break;
      case "Descending complexity":
        sortedList.sort((a, b) => b.complexity - a.complexity);
        break;
      case "Ascending priority":
        sortedList.sort((a, b) => a.priority - b.priority);
        break;
      case "Descending priority":
        sortedList.sort((a, b) => b.priority - a.priority);
        break;
      default:
        break;
    }
    return sortedList;
  };

  const handleTagChange = (isChecked, tag) => {
    if (isChecked) {
      setSelectedTag(tag);
      setSelectedTagsList([...selectedTagsList, tag]);
    } else {
      setSelectedTag("");
      setSelectedTagsList(selectedTagsList.filter((t) => t !== tag));
    }
  };

  function getFilteredByTag(todo) {
    if (selectedTagsList.length > 0) {
      if (todo.tags) {
        return todo.tags.some((tag) => selectedTagsList.includes(tag.name));
      }
      return false;
    }
    return true;
  }

  const pipeline = [
    (obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()),
    getFilteredByTag,
  ];

  const filteredTodos = pipeline.reduce((acc, fn) => acc.filter(fn), todos);

  const sortedTodos = handleSort(filteredTodos);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <MainWrapper>
        <InputWrapper>
          <Input
            ref={inputRef}
            $w100="true"
            $padding="true"
            type="text"
            placeholder="Search..."
            value={searchValue}
            handleChange={handleSearch}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          <BlinkingCursor></BlinkingCursor>
          <InputButton onClick={handleDeleteSearch}>
            <FontAwesomeIcon icon={faXmark} style={{ color: "#000" }} />
          </InputButton>
        </InputWrapper>
        <ButtonWrapper ref={ref}>
          <Wrapper>
            <SortingButton
              onClick={() => setShowSortingFilters(!showSortingFilters)}
            >
              Sort
              {showSortingFilters ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </SortingButton>
            {!isPowerMode && showSortingFilters && (
              <SortList sort={sort} handleSortChange={handleSortChange} />
            )}
          </Wrapper>
          <Wrapper>
            <SortingButton onClick={() => setShowTagFilters(!showTagFilters)}>
              Categories
              {showTagFilters ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </SortingButton>
            {!isPowerMode && showTagFilters && (
              <FilterList
                selectedTag={selectedTag}
                handleTagChange={handleTagChange}
              />
            )}
          </Wrapper>
        </ButtonWrapper>
        <StyledButton onClick={() => setIsPowerMode(!isPowerMode)}>
          <FontAwesomeIcon icon={faPowerOff} />
          {!!isPowerMode ? "Power Mode Off" : "Power Mode On"}
        </StyledButton>
        {!!isPowerMode ? (
          !!winner && <Todo key={winner.id} todo={winner} />
        ) : (
          <div>
            {sortedTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} progressCircle />
            ))}
          </div>
        )}
        <AddTodoForm />
      </MainWrapper>
    </motion.div>
  );
};
export default Home;
