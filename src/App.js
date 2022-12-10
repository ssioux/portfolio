import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Home from "./components/Skills";
import Proyects from "./components/Proyects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Proyects />
    </div>
  );
}

export default App;
