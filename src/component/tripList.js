/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useHook } from "../hook/usehook";

const TripList = () => {
  // console.log(fetch("http://localhost:3000/trips"));
  // console.log(hotels);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { hotels, isLoading, error } = useHook(url);
  // console.log(hotel);

  return (
    <>
      {isLoading && <div>Loading trips...</div>}
      {error && <div>{ error}</div>}

      <div className="container">
        {hotels.map((hotel) => {
          return (
            <div className="inner-content" key={hotel.id}>
              <div className="hotel-title ">
                <h2>{hotel.title}</h2>
              </div>
              <div className="hotel-price ">
                <h3>{hotel.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="filter">
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips?loc=iran");
          }}
        >
          Iranian Trips
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips");
          }}
        >
          All Trips
        </button>
      </div>
    </>
  );
};

export default TripList;
