import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const SingleHome = () => {
  const { id } = useParams();
  // console.log(id);
  const {
    data: article,
    isLoad,
    error,
  } = useFetch(`http://localhost:3000/articles/${id}`);

  const navigate = useNavigate();
  // console.log(navigate());
  useEffect(() => {
    if (error) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="container">
        {isLoad && <div>page is loading</div>}
        {error && <div>{error}</div>}
        <div className="article" style={{ padding: "15px" }}>
          <h2 style={{ padding: "15px" }}>{article.title}</h2>
          <div style={{ padding: "15px" }}>{article.body}</div>
        </div>
        <div className="see-img">
          <Link to="./see">see img</Link>
        </div>
      </div>
    </>
  );
};

export default SingleHome;
