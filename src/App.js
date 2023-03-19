import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { Routes } from "react-router-dom";
import StudentLanding from "./components/StudentLanding";

const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
});

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
