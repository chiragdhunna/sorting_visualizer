import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import { FaArrowDown } from "react-icons/fa";

function App() {
  let i = 0;

  const [cont, setCont] = useState([]);
  const [arr, setArr] = useState([]);

  function swap(a, b) {
    let temp = b;
    b = a;
    a = temp;
  }

  function heightChange() {
    let arrowDisplay = false;
    let newCont = [];
    let newArr = [];
    for (i = 0; i < 10; i++) {
      let h = Math.floor(Math.random() * (600 - 50 + 1) + 50);
      newArr.push(h);
      newCont.push(
        <div id={i + 70}>
          {/* {arrowDisplay && (
            <div className="DownArrow">
              <FaArrowDown />
            </div>
          )} */}
          <div
            key={i}
            className="UnsortedDivs"
            style={{
              height: `${h}px`,
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 255
              )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
              )})`,
            }}
          >
            {Math.floor(h / 100) + 1}
          </div>
        </div>
      );
    }

    setCont(newCont);
    setArr(newArr);
  }

  async function sort() {
    let tempArr = [...arr];
    let tempCont = [...cont];
    for (let i = 0; i < tempArr.length; i++) {
      for (let j = i; j < tempArr.length; j++) {
        if (tempArr[i] > tempArr[j]) {
          [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
          [tempCont[i], tempCont[j]] = [tempCont[j], tempCont[i]];

          setArr([...tempArr]);
          setCont([...tempCont]);

          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    }
  }

  useEffect(() => {
    heightChange();
  }, []);

  return (
    <>
      <div>
        <div style={{ border: "2px solid red", margin: "10px" }}>
          <Appbar />
        </div>
        <div>
          <div
            style={{
              height: "70vh",
              display: "flex",
              width: "98vw",
              alignItems: "end",
              justifyContent: "center",
              border: "2px solid black",
              margin: "auto",
            }}
          >
            {cont}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "50px",
              paddingLeft: "200px",
              paddingRight: "200px",
            }}
          >
            <div>
              <button onClick={heightChange} style={{}}>
                Randomise
              </button>
            </div>

            <div>
              <button onClick={sort}>Sort</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
