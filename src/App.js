import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buah from './Tugas-9/Buah';
import TblHargaBuah from './Tugas-10/TblHargaBuah';
import Timer from './Tugas-11/Timer';
import List from './Tugas-12/List';

function App() {
  return (
    <div className="App">

      <List/>

      {/* <Buah/>
      <TblHargaBuah/>
      <Timer/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
