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
  const [arrSize, setArrSize] = useState(10);

  function heightChange() {
    let newCont = [];
    let newArr = [];
    let n = arrSize;
    let container = document.getElementById("1");

    if (container) {
      let totalWidth = container.clientWidth;

      let width = totalWidth / n;

      for (let i = 0; i < n; i++) {
        let h = Math.floor(Math.random() * (600 - 50 + 1) + 50);
        newArr.push(h);
        newCont.push(
          <div key={i}>
            <div
              className="UnsortedDivs"
              style={{
                width: `${width}px`,
                height: `${h}px`,
                backgroundColor: randomColor(),
              }}
            ></div>
          </div>
        );
      }

      setCont(newCont);
      setArr(newArr);
    } else {
      console.error("Container not found!");
    }
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

          await new Promise((resolve) => setTimeout(resolve, 1));
        }
      }
    }
  }

  useEffect(() => {
    heightChange();
  }, [arrSize]);

  function changeArrSize(event) {
    event.preventDefault();
    if (event.target[0].value) {
      setArrSize(event.target[0].value);
    }

    console.log(event.target[0].value);
  }

  return (
    <>
      <div>
        <div>
          <div id="1" className="outer-div-unsorted-divs">
            {cont}
          </div>
          <div className="button-div ">
            <div>
              <button onClick={heightChange}>Randomise</button>
            </div>

            <div style={{}}>
              <form onSubmit={changeArrSize}>
                <input></input>
                <button type="submit">Set Val</button>
              </form>
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
