import React, { useState } from "react";

const ForFruit = (props) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  // const handleInput = (e) => {
  //   // console.log(e.target.value);
  //   setValue(e.target.value);
  // };

  const handleResest = () => {
    setValue("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      name: value,
      description: date,
      id: Math.floor(Math.random() * 10000),
    };

    // console.log(event);
    props.onHandler_add(event);

    handleResest();
  };
  return (
    <>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label htmlFor="name">add fruit</label>
            <input
              type="text"
              name="name"
              id="name"
              minLength="1"
              maxLength="48"
              placeholder="add your fruit`s name"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
          </div>

          <div>
            <label htmlFor="date">date</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="add your fruit`s name"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />
          </div>

          <button className="btn" type="submit">
            Add new fruit
          </button>
        </form>
        <div className="typing">
          <h3>you type this :</h3>
          <p style={{ color: "tomato" }}>
            {value} & {date}
          </p>
          <button
            className="btn-resent"
            onClick={() => {
              handleResest();
            }}
          >
            Resent value
          </button>
        </div>
      </div>
    </>
  );
};

export default ForFruit;
