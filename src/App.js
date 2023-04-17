import "./App.css";
import Banner from "./components/Banner";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Banner />
      <Credentials />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
