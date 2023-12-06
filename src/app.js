import { useState } from "react";
import "./app.css";
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleChar = () => {
    const shuffledChartImg = [...cardImages, ...cardImages]
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledChartImg);
    setTurns(0);
    // console.log(shuffledChartImg);
  };

  return (
    <>
      <div className="App">
        <h1>Memory game</h1>
        <button
          onClick={() => {
            shuffleChar();
          }}
        >
          New Game
        </button>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return <img src={card.src} alt="card-img" />;
        })}
      </div>
    </>
  );
};
export default App;
