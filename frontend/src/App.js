import "./App.css";
import {Routes, Route} from "react-router-dom";
import Inventory from "./views/inventory.jsx";
import { Font } from "./components/font";
import Laptops from "./views/laptops.jsx";
import Announcements from "./views/announcements.jsx";
import Headphones from "./views/headphones.jsx";
import Landing from "./views/landing";


function App() {
  

  return (
    <div className="App">
      <Font/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/laptops" element={<Laptops/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
      </Routes>
    </div>
  );
}

export default App;
