import React from "react";
import { motion } from "framer-motion";
import { useTodo } from "../contexts/ToDoContext";
import CheckBox from "./CheckBox";
import styled from "styled-components";

const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.boxBorder};
  background: ${({ theme }) => theme.background};
  width: 100%;
  padding: 0 10px;
  top: 30px;
  position: absolute;
  z-index: 2;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;

const StyledLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

const FilterList = ({ selectedTag, handleTagChange }) => {
  const { todos } = useTodo();

  const duplicateTags = (array, key) => {
    const map = new Map();
    array.forEach((item) => {
      map.set(item[key], item);
    });
    return Array.from(map.values());
  };

  const tags = todos.map((todo) => todo.tags).flat();
  const uniqueTags = duplicateTags(tags, "name");

  return (
    <>
      {uniqueTags.length ? (
        <StyledList
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {uniqueTags.map((tag) => {
            return (
              <StyledListItem key={tag.id}>
                <StyledLabel htmlFor={tag.name}>{tag.name}</StyledLabel>
                <CheckBox value={tag.name} handleChange={handleTagChange} />
              </StyledListItem>
            );
          })}
        </StyledList>
      ) : (
        <StyledList
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <StyledListItem>
            <StyledLabel>No tags to show</StyledLabel>
          </StyledListItem>
        </StyledList>
      )}
    </>
  );
};

export default FilterList;
