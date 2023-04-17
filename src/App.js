import "./App.css";
import Banner from "./components/Banner";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Credentials/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
