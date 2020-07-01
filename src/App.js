import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";

function App() {
  return (
    <main>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
    </main>
  );
}

export default App;
