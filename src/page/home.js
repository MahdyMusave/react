import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
const Home = () => {
  // console.log(useFetch(" http://localhost:3000/articles"));
  const {
    data: articlas,
    isLoad,
    error,
  } = useFetch("http://localhost:3000/articles");

  // console.log(data);
  return (
    <>
      <div
        className="wrapper-container"
        style={{
          border: "1px solid red",
          width: "98%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {isLoad && <div>page is loading ... </div>}
        {error && <div>{error}</div>}
        {articlas &&
          articlas.map((data,index) => {
            return (
              
                <div
           
                  className="content"
                style={{ width: "30%", padding: "15px" }}
                key={index}
                >
                  <div className="content-h2">
                    <h2>{data.title}</h2>
                    <div className="" style={{ padding: "15px" }}>
                      {data.body}
                    </div>
                    <div className="read-more">
                      <Link to={`/${data.id}`}>Read more ...</Link>
                    </div>
                  </div>
                </div>
                
            );
          })}
      </div>
    </>
  );
};

export default Home;
