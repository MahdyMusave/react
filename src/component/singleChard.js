import React from "react";

const SingleChard = (props) => {
  const handleChoisce_cover=()=>{
   props.onChoice(props.cards);
  }
  return (
    <>
      <div className="App">
        <h1>Memory game</h1>
        <button
          onClick={() => {
            props.handleshow()
          }}
        >
          New Game
        </button>
      </div>
      <div className="cards">
        {props.cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div>
                <img className="front-img" src={card.src} alt="card-img" />;
                <img
                  onClick={() => {
                    props.onChoice(card.id);
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
