import React, { useState, createContext } from "react";
import TaskList from "./TaskList";

export const TaskListContext = createContext();

function TaskListContextProvider(props) {
  const [tasks] = useState([
    { id: 1, task: "Mention ur name" },
    { id: 2, task: "Delete ur name" },
    { id: 3, task: "Hello there" },
  ]);
  return (
    <div>
      <TaskListContext.Provider value={tasks}>
        <TaskList />
      </TaskListContext.Provider>
    </div>
  );
}

export default TaskListContextProvider;
