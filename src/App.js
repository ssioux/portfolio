import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Home from "./components/Skills";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Proyects />
    </div>
  );
}

export default App;
