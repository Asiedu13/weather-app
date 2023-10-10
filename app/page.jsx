"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { saveWeather } from "./utils/functions";


const myPromise = new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    });

const Home = () => {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
      myPromise.then( async (data) => {
           const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${data.lat}%2C${data.lng}`;
        const options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key":process.env.rapidAPIKey,
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        } 

         
      } ).then( d => {
          setLocationData( d );
          
      } )
  }, [] );
    
     if (!locationData.current) {
       return <h2>Loading...</h2>;
     }
   
   
  return (
    <>
      <main className="w-screen h-screen flex flex-row justify-center items-center border-dotted border-2 p-4 ">
        {/* Location and Date */}
        <section className="w-[fit-content] h-1/2">
          <section className="py-4">
            <h1 className="text-7xl font-bold pb-5 ">
              {locationData.location.name}, {locationData.location.country}
            </h1>
            <p>{locationData.location.localtime}</p>
          </section>

          {/* Temperature reading and cloud adjust */}
          <section className="flex flex-row justify-between items-center ">
            <div className="">
              <span className="text-3xl font-semibold">
                {locationData.current.feelslike_c}
              </span>{" "}
              <sup>&deg;C</sup>
              <p className="text-blue-400 uppercase">
                {locationData.current.condition.text}
              </p>
            </div>
            {/* Clouds */}
            <div>
              <img
                src={locationData.current.condition.icon}
                alt="clouds"
                width={100}
                height={100}
              />
            </div>
          </section>
          {/* Buttons */}
          <section className="flex justify-between items-center pt-3">
            <button
              onClick={() =>
                saveWeather(
                  locationData.location.name,
                  locationData.location.country,
                  locationData.location.localtime,
                  locationData.current.feelslike_c,
                  locationData.current.condition.text
                )
              }
              className="w-[140px] h-[50px] rounded-lg bg-green-500 hover:bg-green-400"
            >
              Timestamp
            </button>
            <Link href="/history">
              <button className="w-[140px] h-[50px] rounded-lg bg-red-500 focus:bg-red-400 hover:bg-red-400">
                My History
              </button>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
