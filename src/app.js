import { useEffect, useState } from "react";
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
    setChoseTwo(null);
    setChoseOne(null);
    // console.log(shuffledChartImg);
  };

  const handleshow = () => {
    shuffleChar();
  };

  const handleChoisce = (card) => {
    // console.log(card);
    choseOne ? setChoseTwo(card) : setChoseOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choseOne && choseTwo) {
      // console.log(choseOne);
      // return console.log(choseTwo);
      if (choseOne.src === choseTwo.src) {
        // console.log("match");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choseOne.src) {
              resentTurn();
              return { ...card, matched: true };
            } else {
              resentTurn();
              return card;
            }
          });
        });
        resentTurn();
      } else {
        setTimeout(() => resentTurn(), 1000);
      }
    }
  }, [choseOne, choseTwo]);

  //show what happen when
  // console.log(cards);

  const resentTurn = () => {
    setChoseOne(null);
    setChoseTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <>
      <SingleChard
        cards={cards}
        shuffleChar={shuffleChar}
        onChoice={handleChoisce}
        handleshow={handleshow}
        choseOne={choseOne}
        choseTwo={choseTwo}
      />
    </>
  );
};
export default App;
