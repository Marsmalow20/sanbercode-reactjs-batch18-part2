import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Buah from './Tugas-9/Buah';
// import TblHargaBuah from './Tugas-10/TblHargaBuah';
// import Timer from './Tugas-11/Timer';
// import ListForm from './Tugas-13/ListForm';
// import Buah from './Tugas-14/Buah';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Tugas-15/Nav';
import Routes from './Tugas-15/Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes/>
      </Router>
      
      {/* <List/>
      <Buah/>
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
