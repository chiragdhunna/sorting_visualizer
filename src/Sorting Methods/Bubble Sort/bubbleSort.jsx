import { useEffect, useState } from "react";
import "./bubbleSort.css";

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

function BubbleSort() {
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
        <div id={i + 70}>
          <div
            key={i}
            className="UnsortedDivs"
            style={{
              height: `${h}px`,
              backgroundColor: randomColor(),
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
        <div>
          <div className="outer-div-unsorted-divs">{cont}</div>
          <div className="button-div ">
            <div>
              <button onClick={heightChange}>Randomise</button>
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

export default BubbleSort;
