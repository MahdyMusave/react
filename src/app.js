import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./page/home";
import Connect from "./page/connect";
import About from "./page/about";
import Header from "./component/header";
import SingleHome from "./page/singleHome";
import NotFound from "./component/404";
import See from "./page/see";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          className="router-dom"
          style={{
            padding: "15px 30px",
            border: "2px solid red",
            borderRadius: "15px",
            width: "88%",
            margin: "10px auto",
          }}
        >
          <Routes>
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<SingleHome />} />
            <Route path="/:id/*" element={<See />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
