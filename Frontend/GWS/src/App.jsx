import {Routes, Route} from "react-router-dom";
import Home from "./Home"
import Calendar from "./Calendar";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} /> 
      <Route path="/Calendar" element = {<Calendar/>} />
    </Routes>
  );
}

export default App;
