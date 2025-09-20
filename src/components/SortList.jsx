import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.boxBorder};
  width: 100%;
  us: 14px;
  background: ${({ theme }) => theme.background};
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
  &:last-child {
    border: none;
  }
`;

const StyledLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

const SortList = (props) => {
  const sortArray = [
    "Default",
    "Ascending date",
    "Descending date",
    "Ascending complexity",
    "Descending complexity",
    "Ascending priority",
    "Descending priority"
  ];

  return (
    <>
      <StyledList
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {sortArray.map((item) => (
          <StyledListItem key={item}>
            <StyledLabel htmlFor={item}>{item} </StyledLabel>
            <input
              type="radio"
              value={item}
              name={item}
              id={item}
              checked={props.sort === item}
              onChange={props.handleSortChange}
            />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default SortList;
