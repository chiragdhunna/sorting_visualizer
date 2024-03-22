import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/Appbar";

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
    let newCont = [];
    let newArr = [];
    for (i = 0; i < 10; i++) {
      let h = Math.floor(Math.random() * (600 - 50 + 1) + 50);
      newArr.push(h);
      newCont.push(
        <div>
          <div></div>
          <div
            className="center"
            key={i}
            style={{
              textAlign: "center",
              color: "white",
              height: `${h}px`,
              width: "100px",
              margin: "5px",
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

  /*   function sort() {
    let n = arr.length;
    let tempCont = cont;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;

          let divTemp = tempCont[i];
          tempCont[i] = tempCont[j];
          tempCont[j] = divTemp;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      console.log(`${arr[i]} ,`);
    }

    let newCont = [];
    for (let i = 0; i < n; i++) {
      newCont.push(
        <div
          className="center"
          key={i}
          style={{
            height: `${arr[i]}px`,
            width: "20px",
            margin: "5px",
            backgroundColor: `rgb(${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )})`,
          }}
        ></div>
      );
    }

    setCont(newCont);
  } */

  function sort() {
    let n = arr.length;
    let tempCont = [...cont];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;

          let divTemp = tempCont[i];
          tempCont[i] = tempCont[j];
          tempCont[j] = divTemp;
          console.log("Doing");
          console.log(divTemp);
        }
      }
    }
    setCont(tempCont);
  }

  function randomSwapping() {
    let newCont = [...cont];
    let sz = newCont.length;
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < sz; i++) {
        let a = Math.floor(Math.random() * sz);
        let b = Math.floor(Math.random() * sz);

        let temp = newCont[a];
        newCont[a] = newCont[b];
        newCont[b] = temp;
      }
    }

    setCont(newCont);
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
