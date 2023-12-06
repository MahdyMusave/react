import React, { useState } from "react";

const SingleChard = (props) => {
  const handleChoisce_cover = (card) => {
    // console.log(card);
    props.onChoice(card);
  };

  return (
    <>
      <div className={"App"}>
        <h1>Memory game</h1>
        <button
          onClick={() => {
            props.handleshow();
          }}
        >
          New Game
        </button>
      </div>
      <div className="cards">
        {props.cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div
                className={
                  card.matched === true ||
                  props.choseOne === card ||
                  card === props.choseTwo
                    ? "flipper"
                    : ""
                }
              >
                <img className="front-img" src={card.src} alt="card-img" />;
                <img
                  onClick={() => {
                    handleChoisce_cover(card);
                  }}
                  className="back-img"
                  src="/img/cover.png"
                  alt="card-img"
                />
                ;
              </div>
              <div className="" style={{ color: "white" }}>
                {props.chose2}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleChard;
