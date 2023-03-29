import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import AllRoutes from "./Routes/AllRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar style={{ position: "fixed" }} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
