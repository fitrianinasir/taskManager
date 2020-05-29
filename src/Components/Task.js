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

  const [indexValue, setIndexValue] = useState(0);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          props.submit(e);
          setIndexValue(indexValue + 1);
        }}
      >
        <input
          type="text"
          className="task-input"
          value={props.inputValue}
          onChange={(e) => {
            props.change(e.target.value, indexValue);
          }}
        />
        <Button> Save</Button>
      </form>
    </div>
  );
}

export default Task;
