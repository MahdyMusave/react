import { useState } from "react";
import "./app.css";
const App = () => {
  const [display_value, setDisplay_value] = useState("");
  const [exprition, setExprition] = useState([]);
  const handleClick = (value) => {
    setDisplay_value(value);
    setExprition([...exprition, value]);
  };
  const handleEqul = () => {
    // console.log(exprition);
    const result = exprition
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay_value(result);
    setExprition("");
  };
  return (
    <>
      <div className="conatiner">
        <div className="inner-container">
          <h2 className="integer-value">{display_value}</h2>
          <div className="exprition">{exprition}</div>
          <div className="row">
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(1);
                }}
              >
                1
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(2);
                }}
              >
                2
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(3);
                }}
              >
                3
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick("+");
                }}
              >
                +
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(4);
                }}
              >
                4
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(5);
                }}
              >
                5
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(6);
                }}
              >
                6
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick("-");
                }}
              >
                -
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(7);
                }}
              >
                7
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(8);
                }}
              >
                8
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick(9);
                }}
              >
                9
              </button>
            </div>
            <div className="col-25">
              <button
                onClick={() => {
                  handleClick("*");
                }}
              >
                *
              </button>
            </div>
            <div className="col-25 zero">
              <button
                onClick={() => {
                  handleClick(0);
                }}
              >
                0
              </button>
            </div>

            <div className="col-25">
              <button
                onClick={() => {
                  handleEqul();
                }}
              >
                =
              </button>
            </div>

            <div className="operators"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
