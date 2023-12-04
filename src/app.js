import { useState } from "react";
import Header from "./component/header";
import "./app.css";
const App = () => {
  // let name = "Mahdy";
  const [name, setName] = useState("mahdy");
  const [fruit, setFruit] = useState([
    { id: "1", name: "apple", description: "apple is nice" },
    { id: "2", name: "banana", description: "banana is supper good" },
    { id: "3", name: "papaya", description: "papaya is very well" },
    { id: "4", name: "pineapple", description: "pineapple is supper nicy" },
    { id: "5", name: "sapota", description: "sapota is for me" },
    {
      id: "6",
      name: "watermelon",
      description: "watermelon have many wetamin",
    },
    { id: "7", name: "tangerine", description: "i like tangerine " },
    { id: "8", name: "rambutan", description: "i do not know" },
  ]);
  const [display, setDisplay] = useState(false);

  const handleDisplay = (bool) => {
    if (bool === true) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const changeName = () => {
    // name = "Amir";
    setName("Ali");
  };
  const handleFruid = (id) => {
    const fruid = [...fruit];
    // console.log(fruid);
    const dle_fruit = fruid.filter((fruid_id) => fruid_id.id !== id);
    // console.log(findIndex);
    setFruit(dle_fruit);
  };
  return (
    <>
      <Header logo="MahdyMusave" />
      <div className="btn-container">
        {!display && (
          <button
            onClick={() => {
              handleDisplay(true);
            }}
          >
            Show
          </button>
        )}
        {display && (
          <button
            onClick={() => {
              handleDisplay(false);
            }}
          >
            Hide
          </button>
        )}
      </div>
      <div className="">
        <h1>
          {
            //name
            name
          }
        </h1>
        <button
          className="btn btn-info"
          onClick={() => {
            changeName();
          }}
        >
          change name
        </button>
      </div>
      <div className="fruit">
        {display &&
          fruit.map((fru, index) => {
            return (
              <>
                <ul key={fru.id}>
                  <li>{fru.id}</li>
                  <li>{fru.name}</li>
                  <li>{fru.description}</li>
                </ul>
                <button
                  key={fru.index}
                  onClick={() => {
                    handleFruid(fru.id);
                  }}
                >
                  delete Fruit
                </button>
              </>
            );
          })}
      </div>
    </>
  );
};
export default App;
