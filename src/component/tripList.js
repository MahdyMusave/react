import React, { useEffect, useState } from "react";

const TripList = () => {
  const [hotels, setHotels] = useState([]);
  // console.log(fetch("http://localhost:3000/trips"));
  console.log(hotels);
  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) =>
        //       // console.log(response.json())
        response.json()
      )
      .then((data) => {
        //       // console.log(data);
        // return setHotel(data);
        return setHotels(data);
      });
  }, []);

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
    </>
  );
};

export default TripList;
