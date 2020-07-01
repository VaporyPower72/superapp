import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <main>
      <LikeCounter />
      <LikeButton />
    </main>
  );
}

export default App;
