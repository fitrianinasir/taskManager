import React from 'react';
import bgImage from './assets/121421.jpg'
import './App.css';
import TaskListContext from './Components/TaskListContext';

function App() {
  const background = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize:'cover',
    height:'100vh'
  }

  return (
    <div className="App" style={background}>
     <TaskListContext/>
    </div>
  );
}

export default App;
