import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import { FaArrowDown } from "react-icons/fa";
import BubbleSort from "./Sorting Methods/Bubble Sort/bubbleSort";

function App() {
  return (
    <>
      <div style={{ border: "2px solid red", margin: "10px" }}>
        <Appbar />
      </div>
      <BubbleSort />
    </>
  );
}

export default App;
