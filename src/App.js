import React, { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/pages/Explore/Explore";
import Login from "./components/pages/Login/Login";
import { useStateValue } from "./context/StateProvider";
const App = () => {
  const [{user},dispatch] = useStateValue();
  return (
    
    <div>
      <Router>
        {!user ? (
          <Login/>
        ): (
          <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
        </>
          )}
      </Router>
    </div>
  );
};

export default App;
