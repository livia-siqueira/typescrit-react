import React from 'react'
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div>
      <Contador valorInicial={20}/>
      <Contador/>
    </div>
  );
}

export default App;
