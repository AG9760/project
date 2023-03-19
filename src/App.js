import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { Routes } from "react-router-dom";
import StudentLanding from "./components/StudentLanding";
// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Login");
// const app = express();

// app.use(express.static("Login.js"));
// const db = mongoose.connection;

// db.on("error", () => {
//   console.log("Error connecting");
// });
// db.once("open", () => {
//   console.log("connected");
// });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StudentLanding" element={<StudentLanding />} />
      </Routes>
    </div>
  );
}

export default App;
