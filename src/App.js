import React from "React";
import Jumbotron from "./components/jumbotron";
import Table from "./components/table";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <Table/>
    </div>
  );
}

export default App;