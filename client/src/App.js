import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./common/Navbar";
import Login from "./admin/Login";
import Inventory from "./inventory/Inventory";
import NotFound from "./common/NotFound";
import Details from "./inventory/Details";
import AddItem from "./common/AddItem";
import EditItem from "./common/EditItem";

export const inventoryContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const url = "http://localhost:3001";

  return (
    <inventoryContext.Provider value={{ items, setItems, url }}>
      <div className="flex duration-300">
        <Navbar />
        <div className="grid grid-flow-col w-full h-screen">
          <Routes>
            <Route exact path="/" element={<Inventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<EditItem />} />
            <Route path="/new item" element={<AddItem />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
          <Details/>
      </div>
    </inventoryContext.Provider>
  );
}

export default App;
