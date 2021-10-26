import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import CheckboxWithLabel from './components/checkbox/CheckboxWithLabel';
import Task from './components/task/task';

function App() {
  const tasks=[
    { id:1,title:'wash dishes',completed:false},
    { id:2,title:'make dinner',completed:true},
  ];

  return (
    <div className="App">
      <header className="App-header">
        {
          tasks.map((task)=>{
            return(<Task task={task} />)
          })
        }
        <br></br>
        <Button label="CLICK ME"></Button>
        <br></br>
        <CheckboxWithLabel labelOn="checked" labelOff="unchecked"></CheckboxWithLabel>
      </header>
    </div>
  );
}

export default App;
