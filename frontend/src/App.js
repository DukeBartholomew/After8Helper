import "./App.css";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import Inventory from "./views/inventory.jsx";
import { Font } from "./components/font";
import Laptops from "./views/laptops.jsx";
import Announcements from "./views/announcements.jsx";


function App() {
  const url = "http://localhost:8000";
  const checkAPI = () => {
    axios
      .get(url + "/")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Font/>
      <Routes>
        <Route path="/" element={<Inventory/>}/>
        <Route path="/laptops" element={<Laptops/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
      </Routes>
      <button type="button" onClick={checkAPI}>
        Check API
      </button>
    </div>
  );
}

export default App;
