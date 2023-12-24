import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Order from "./components/Order";
import List from "./components/List";
import Home from "./components/Home";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<SignUp showAlert={showAlert} />}
            />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/list" element={<List />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;