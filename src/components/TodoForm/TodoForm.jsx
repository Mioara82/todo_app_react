import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { uid } from "uid";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import FormButtons from "../FormButtons";
import SecondaryForm from "../SecondaryForm";
import SubtasksList from "../SubtasksList";
import {
  LinkWrapper,
  HeadingWrapper,
  TimeInputWrapper,
  DateWrapper,
  StyledInput,
  DivWrapper,
  InlineDiv,
  Tag,
  TagButton,
  ErrorDiv,
  SaveButton,
  BlinkingCursor,
} from "./styles";

const TodoForm = (props) => {
  const [name, setName] = useState(props.todo ? props.todo.name : "");
  const [priority, setPriority] = useState(
    props.todo ? props.todo.priority : ""
  );
  const [complexity, setComplexity] = useState(
    props.todo ? props.todo.complexity : ""
  );
  const [dueDate, setDueDate] = useState(props.todo ? props.todo.dueDate : "");
  const [dueTime, setDueTime] = useState(props.todo ? props.todo.dueTime : "");
  const [subtasks, setSubtasks] = useState(
    props.todo ? props.todo.subtasks : []
  );
  const [tags, setTags] = useState(props.todo ? props.todo.tags : []);
  const [tagError, setTagError] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmitSubtask = (value) => {
    const newSubtask = {
      name: value,
      isCompleted: false,
      id: uid(),
    };
    setSubtasks([...subtasks, newSubtask]);
  };

  const handleRemoveSubtask = (id) => {
    const newSubtasks = subtasks.filter((subtask) => subtask.id !== id);
    setSubtasks(newSubtasks);
  };

  const handleCompleteSubtask = (id) => {
    const newSubtasks = subtasks.map((subtask) => {
      if (subtask.id === id) {
        subtask.isCompleted === !subtask.isCompleted;
      }
      return subtask;
    });
    setSubtasks(newSubtasks);
  };

  const handleSubmitTags = (value) => {
    const duplicateTag = tags.find((tag) => tag.name === value);
    if (duplicateTag) {
      setNameError("Tag already exists!");
      setTimeout(() => {
        setNameError("");
      }, 2000);
      return;
    }

    const newTag = {
      name: value,
      id: uid(),
    };
    setTags([...tags, newTag]);
  };

  const handleRemoveTags = (id) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    setTags(newTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError("Please insert a value!");
      setTimeout(() => {
        setNameError("");
      }, 2000);
    } else {
      const task = {
        name,
        priority,
        complexity,
        dueDate,
        dueTime,
        subtasks,
        tags,
      };
      props.handleSubmit(task);
      navigate("/");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <main>
        <HeadingWrapper>
          <LinkWrapper>
            <Link to={`/`}>
              <FontAwesomeIcon icon={faLeftLong} style={{ color: "#000" }} />
            </Link>
          </LinkWrapper>
          <h1>{props.title}</h1>
        </HeadingWrapper>
        <form onSubmit={handleSubmit}>
          <DivWrapper>
            <label htmlFor="taskName">Task name</label>
            <StyledInput
              id="taskName"
              type="text"
              name="name"
              placeholder={props.placeholder}
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <BlinkingCursor></BlinkingCursor>
          </DivWrapper>
          {nameError && <ErrorDiv>Please insert a value!</ErrorDiv>}
          <label htmlFor="taskPriority">Set priority</label>
          <FormButtons
            id="taskPriority"
            name="priority"
            value={priority}
            handleChange={(value) => setPriority(value)}
          />
          <label htmlFor="taskComplexity">Set complexity</label>
          <FormButtons
            id="taskComplexity"
            name="complexity"
            value={complexity}
            handleChange={(value) => setComplexity(value)}
          />
          <TimeInputWrapper>
            <DateWrapper>
              <label htmlFor="taskDate">Select due date</label>
              <StyledInput
                $small="true"
                id="taskDate"
                type="date"
                value={dueDate}
                min={currentDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </DateWrapper>
            <DateWrapper>
              <label htmlFor="taskTime">Select time</label>
              <StyledInput
                $small="true"
                id="taskTime"
                type="time"
                value={dueTime}
                onChange={(e) => {
                  setDueTime(e.target.value);
                }}
              />
            </DateWrapper>
          </TimeInputWrapper>
          <DivWrapper>
            <SecondaryForm
              label={"Add checklist"}
              htmlProperty={"taskSubtasks"}
              id={"taskSubtasks"}
              handleSubmit={handleSubmitSubtask}
              placeholder={"Add checklist..."}
            />
            {!!subtasks && (
              <SubtasksList
                subtasks={subtasks}
                handleRemoveSubtask={handleRemoveSubtask}
                handleCompleteSubtask={handleCompleteSubtask}
              />
            )}
          </DivWrapper>
          <SecondaryForm
            label={"Add tags"}
            htmlProperty={"taskTags"}
            id={"taskTags"}
            handleSubmit={handleSubmitTags}
            placeholder="Add tags..."
          />
          <InlineDiv>
            {name && tagError && <ErrorDiv>Tag already added!</ErrorDiv>}
            {!!tags &&
              tags.map((tag) => (
                <Tag key={tag.id}>
                  <p>{tag.name}</p>
                  <TagButton onClick={() => handleRemoveTags(tag.id)}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ marginLeft: "auto" }}
                    />
                  </TagButton>
                </Tag>
              ))}
          </InlineDiv>
          <SaveButton type="submit" onClick={handleSubmit}>
            {props.submitText}
          </SaveButton>
        </form>
      </main>
    </motion.div>
  );
};

export default TodoForm;
