import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./common/Navbar";
import Dashboard from "./home/Dashboard";
import Login from "./admin/Login";
import Inventory from "./inventory/Inventory";
import NotFound from "./common/NotFound";

export const inventoryContext = createContext();

function App() {
  const [items, setItems] = useState();
  const url = "http://localhost:3001";

  return (
    <inventoryContext.Provider value={{ items, setItems, url }}>
      <div className="flex duration-300">
        <Navbar />
        <div className="grid grid-flow-col w-full h-screen">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </inventoryContext.Provider>
  );
}

export default App;
