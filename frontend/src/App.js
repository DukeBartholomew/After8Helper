import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Inventory from "./views/inventory.jsx";
import { Font } from "./components/font";
import Laptops from "./views/laptops.jsx";
import Announcements from "./views/announcements.jsx";
import Headphones from "./views/headphones.jsx";
import Landing from "./views/landing";
import { useState, createContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
// import dotenv from 'dotenv';

function App() {
  // require('dotenv').config();
  console.log(process.env.REACT_APP_URL);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <div className="App">
          <Font />
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* {isAuthenticated && (
              <> */}
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/laptops" element={<Laptops />} />
                <Route path="/headphones" element={<Headphones />} />
                <Route path="/announcements" element={<Announcements />} />
              {/* </>
            )} */}
          </Routes>
        </div>
      </AuthContext.Provider>
    </AuthProvider>
  );
}

export default App;
