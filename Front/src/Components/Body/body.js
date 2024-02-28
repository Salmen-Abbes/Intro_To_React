import React, { useEffect, useState } from "react";

const Body = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1010/weather", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setLocation(data);
        } else {
          console.log("error fetching server");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // eslint-disable-line

  if (!location) {
    return <div>Loading...</div>;
  }

  const { city, country, forecast } = location;

  const bodyStyle = {
    display: "flex",
    height: "50%",
    width: "30%",
    margin: "5% auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    textAlign: "center",
    backgroundImage: `url(./Imgs/${forecast.conditions}.gif)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
  };

  const textSectionStyle = {
    margin: "20px",
  };

  return (
    <div style={bodyStyle}>
      <h2>
        {city} Forecast <br />- {country} -
      </h2>
      <div style={containerStyle}>
        <img src={`./Imgs/${city}.jpg`} alt="Weather" style={imageStyle} />
        <div style={textSectionStyle}>
          {forecast && (
            <>
              <p>
                Max/Min Temperature: {forecast.temperature_max} /{" "}
                {forecast.temperature_min}°C
              </p>
              <p>
                Latitude/Longitude: {location.latitude} / {location.longitude}
              </p>
              <p>Conditions: {forecast.conditions}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
