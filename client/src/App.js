import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./common/Navbar";
import Login from "./admin/Login";
import Register from "./admin/Register";
import Inventory from "./inventory/Inventory";
import MyItems from "./inventory/MyItems";
import AddItem from "./common/AddItem";
import EditItem from "./common/EditItems";
import NotFound from "./common/NotFound";

export const inventoryContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});

  const url = "http://localhost:3001";

  // useEffect(()=> {
  //   fetch(`${url}/managers`, {
  //     method: "POST",
  //     "Access-Control-Allow-Origin" : "*",
  //     credentials: "include",
  //   })
  //   .then((res) => res.json())
  //   .then((userData) => setUser(userData));
  // }, [])

  return (
    <inventoryContext.Provider value={{ items, setItems, user, setUser, url }}>
      <div className="flex duration-300">
        <Navbar />
        <div className="grid grid-flow-col w-full h-screen">
          <Routes>
            <Route exact path="/" element={<Inventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<EditItem />} />
            <Route path="/dashboard" element={<MyItems />} />
            <Route path="/new item" element={<AddItem />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </inventoryContext.Provider>
  );
}

export default App;
