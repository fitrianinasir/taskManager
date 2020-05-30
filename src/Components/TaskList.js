import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TaskListContext } from "./TaskListContext";
import Task from "./Task";

function TaskList(props) {
  const { tasks, setTasks } = useContext(TaskListContext);
  const [newValue, setNewValue] = useState({});

  const List = styled.div`
    width: 90%;
    height: 100%;
    margin: 2rem auto;
    text-align: left;
  `;

  const Item = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #9fadc9;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 5px;
  `;
  const submitForm = (e) => {
    e.preventDefault();
    let filterTask = tasks.filter((task) => task.id === newValue.id);
    if (filterTask.length > 0) {
      let getData = [...tasks];
      getData.map((data) => {
        if (data.id === newValue.id) {
          data.id = newValue.id;
          data.task = newValue.task;
        }
        return null;
      });
      setTasks(getData);
    } else {
      setTasks([...tasks, newValue]);
    }
    setNewValue({
      id: undefined,
      task: "",
    });
  };

  const inputHandler = (value, indexValue) => {
    setNewValue({
      id: indexValue,
      task: value,
    });
    console.log(newValue);
  };

  const editItem = (id) => {
    let getTask = tasks.filter((task) => task.id === id);
    setNewValue(getTask[0]);
  };

  const deleteItem = (id) => {
    let poppedTasks = tasks.filter((task) => task.id !== id);
    setTasks(poppedTasks);
  };

  return (
    <div className="wrapper">
      <Task
        valueId={newValue.id}
        submit={submitForm}
        change={inputHandler}
        inputValue={newValue.task}
      />
      <List>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <Item>
                <p className="d-inline-block mr-1">{task.task}</p>
                <i
                  className="fas fa-trash float-right ml-2"
                  onClick={() => deleteItem(task.id)}
                ></i>
                <i
                  className="far fa-edit float-right"
                  onClick={() => editItem(task.id)}
                ></i>
              </Item>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default TaskList;
