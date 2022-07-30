import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route,  } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
