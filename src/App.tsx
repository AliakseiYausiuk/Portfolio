import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Avatar } from "./Components/Avatar/Avatar";
import { Skills } from "./Components/Skills/Skills";
import { Main } from "./Components/Main/Main";
import { MainItem } from "./Components/MainItem/MainItem";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Avatar />
      <Skills />
      <Main />
      <MainItem />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
