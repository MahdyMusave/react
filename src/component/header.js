import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div
        className="navbar"
        style={{
          padding: "15px",
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          border: "none",
          backgroundColor: "#ddd",
          color: "navy",
          fontWeight: "bold",
          opacity: "0.90",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/connect">conect</Link>
      </div>
    </>
  );
};

export default Header;
