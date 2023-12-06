import { useState } from "react";
import "./app.css";
import SingleChard from "./component/singleChard";
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
  const [choseOne, setChoseOne] = useState([]);
  const [choseTwo, setChoseTwo] = useState([]);
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

  const handleshow = () => {
    shuffleChar();
  };

  const handleChoisce = (card) => {
    // console.log(card);
    choseOne ? setChoseTwo(card) : setChoseOne(card);
  };
  return (
    <>
      <SingleChard
        cards={cards}
        chose2={choseOne}
        setChose2={choseTwo}
        shuffleChar={shuffleChar}
        onChoice={handleChoisce}
        handleshow={handleshow}
      />
    </>
  );
};
export default App;
