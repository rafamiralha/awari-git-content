import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

function App() {
  return (
    <div className="">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/error" element={<Error />} />F
        </Routes>
      </Router>
    </div>
  );
}


export default App;
