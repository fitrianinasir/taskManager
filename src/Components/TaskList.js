import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TaskListContext } from "./TaskListContext";
import Task from "./Task";

function TaskList(props) {
  const tasks = useContext(TaskListContext);

  const [isEdit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [newValue, setNewValue] = useState({});
  const [newTasks, setNewTasks] = useState(tasks);

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

    // if(isEdit){
    //   let edit = newTasks.filter(task => task.id === editId)
    //   let changeData = edit.map(edit => (
    //     {
    //       id: edit.id,
    //       task: newValue.task
    //     }
    //   ))
    //   set
    // }else{
    // }
    setNewTasks([...newTasks, newValue]);
  };

  console.log(newTasks);

  const inputHandler = (value, indexValue) => {
    
    setNewValue({
      id: indexValue,
      task: value,
    });
  };

  const editItem = (id) => {
    let getTask = newTasks.filter(task => task.id === id)
    setEditId(id)
    setNewValue(getTask[0])
  }

  const deleteItem = (id) => {
    let poppedTasks = newTasks.filter((task) => task.id !== id);
    setNewTasks(poppedTasks);
  };


  return (
    <div className="wrapper">
      <Task
        submit={submitForm}
        change={inputHandler}
        inputValue={newValue.task}
      />
      <List>
        {newTasks.map((task) => {
          return (
            <div key={task.id}>
              <Item>
                <p className="d-inline-block mr-1">{task.task}</p>
                <i
                  className="fas fa-trash float-right ml-2"
                  onClick={() => deleteItem(task.id)}
                ></i>
                <i className="far fa-edit float-right" onClick={() => editItem(task.id)}></i>
              </Item>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default TaskList;
