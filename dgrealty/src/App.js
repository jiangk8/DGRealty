import React from "react";
import "./App.css";
import Router from "./Router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      hi
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
