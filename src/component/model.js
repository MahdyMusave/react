import React, { useState } from "react";

const Model = (props) => {
  // const [model_display, setModel_display] = useState(true);
  // const closeModel = () => {
  //   setModel_display(false);
  // };
  return (
    <>
      {
        /*props.model_display && (*/
        <div className="model-container">
          <div className="model">
            {/*<h1>Model</h1>
          <p>
            The model is a representation of the data that you want to analyze.
            It consists of one or more tables, each containing rows and
          </p>*/}

            {props.children}
            <button
              onClick={() => {
                props.modelDisplay();
              }}
              className="btn-model"
            >
              close
            </button>
          </div>
        </div>
        /*)*/
      }
    </>
  );
};

export default Model;
