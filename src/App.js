
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>

      
      <header className="App-header">
        <img src={"/logo.png"} alt="logo" />
        <p id="writerm">
          sioux dev
        </p>
      
          
      </header>


    <Routes>
          <Route path="/home" element={<Home/>}/>
          </Routes>  
    
 </div>
  );
}

export default App;
