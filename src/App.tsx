import React from 'react';
import Greeter from './components/Greeter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeter person="Kevin"/>
      <Greeter person="Rosie"/>
    </div>
  );
}

export default App;
