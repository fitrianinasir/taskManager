import React, { useState, createContext } from "react";

export const TaskListContext = createContext();

function TaskListContextProvider(props) {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Mention ur name" },
    { id: 2, task: "Delete ur name" },
    { id: 3, task: "Hello there" },
  ]);

  return (
    <div>
      <TaskListContext.Provider value={{ tasks, setTasks }}>
        {props.children}
      </TaskListContext.Provider>
    </div>
  );
}

export default TaskListContextProvider;
