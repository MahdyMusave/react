
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
  return (
    <>
      <div className="App">
        <h1>Memory game</h1>
        <button>New Game</button>
      </div>
    </>
  );
};
export default App;
