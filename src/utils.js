import { useState, useEffect } from "react";

export function useLocalState(key, initialValue) {
  const storedValue = window.localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(item);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export function getTagBg(num) {
  const bgArray = ["#f6bd60", "#84a59d"];
  if (num % 2 === 0) {
    return bgArray[0];
  } else if (num % 2 === 1) {
    return bgArray[1];
  }
}

export function formatDate(date) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
}

export function formatTime(date, time) {
  const dateTimeString = `${date}T${time}`;
  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  return new Date(dateTimeString).toLocaleTimeString("en", options);
}

export function calculateTimeDue(date) {
  const dueDate = new Date(date);
  const currentDate = new Date();
  const timeDiff = dueDate.getTime() - currentDate.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return days;
}

export function setDateStyle(days) {
  const colors = ["#d00000", "#f48c06", "#00bbf9"];
  if (days < 3) {
    return colors[0];
  } else if (days < 5) {
    return colors[1];
  } else {
    return colors[2];
  }
}

export function setLevels(item) {
  return !item ? (
    <div>Low (0/10)</div>
  ) : `${item}` < "5" && `${item}` > "0" ? (
    `Low (${item}/10)`
  ) : `${item}` >= "5" && `${item}` < "8" ? (
    `Moderate (${item}/10)`
  ) : (
    `High (${item}/10)`
  );
}

export function updateProgress(todo, id) {
  if (Array.isArray(todo.subtasks)) {
    const completedSubtasks = todo.subtasks.filter(
      (subtask) => subtask.isCompleted
    );
    const pendingSubtasks = todo.subtasks.filter(
      (subtask) => !subtask.isCompleted
    );

    const progress = Math.floor(
      (completedSubtasks.length / todo.subtasks.length) * 100
    );

    if (todo.isCompleted) {
      if (todo.subtasks.length === 0) {
        return 100;
      } else {
        if (pendingSubtasks.length > 0) {
          pendingSubtasks.map((subtask) => {
            if (subtask.id === id) {
              subtask.isCompleted = !subtask.isCompleted;
            }
          });
        }
        return 100;
      }
    } else {
      if (todo.subtasks.length) {
        return progress;
      }
      return 0;
    }
  }
  return 100;
}

export function cloneDeep(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (key !== obj.id) {
      const value = obj[key];
      newObj[key] = cloneDeep(value);
    }
  }
  return newObj;
}

export function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
