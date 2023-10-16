import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style/App.scss";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <div className="App">
      <Darkmode />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
