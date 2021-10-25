import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import CheckboxWithLabel from './components/checkbox/CheckboxWithLabel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="CLICK ME"></Button>
        <br></br>
        <CheckboxWithLabel labelOn="checked" labelOff="unchecked"></CheckboxWithLabel>
      </header>
    </div>
  );
}

export default App;
