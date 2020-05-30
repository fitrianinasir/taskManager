import React, { useState } from "react";
import styled from "styled-components";

function Task(props) {
  const Button = styled.button`
    background-color: #9ba9d1;
    border: none;
    color: black;
    height: 2.5rem;
    border-radius: 5px;
    margin-left: 5px;
  `;

  const [indexValue, setIndexValue] = useState(4);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          props.submit(e);
          if (props.valueId !== undefined) {
            setIndexValue(indexValue + 1);
          } else {
            setIndexValue(indexValue);
          }
        }}
      >
        <input
          type="text"
          className="task-input"
          value={props.inputValue}
          onChange={(e) => {
            if (props.valueId !== undefined) {
              props.change(e.target.value, props.valueId);
            } else {
              props.change(e.target.value, indexValue);
            }
          }}
        />
        <Button> Save</Button>
      </form>
    </div>
  );
}

export default Task;
