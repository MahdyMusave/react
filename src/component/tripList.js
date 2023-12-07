/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";

const TripList = () => {
  const [hotels, setHotels] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  // console.log(fetch("http://localhost:3000/trips"));
  // console.log(hotels);

  const FetchData = useCallback(async () => {
    const response = await fetch(url);  
    const json = await response.json();
    setHotels(json);
  }, [url]);
  console.log(hotels); //we are on loop here
  // console.log(FetchData());
  useEffect(() => {
    //   fetch(url)
    //     .then((response) =>
    //       //       // console.log(response.json())
    //       response.json()
    //     )
    //     .then((data) => {
    //       //       // console.log(data);
    //       // return setHotel(data);
    //       return setHotels(data);
    //     });
    FetchData();
  }, [url, FetchData]);

  // console.log(hotel);

  return (
    <>
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
