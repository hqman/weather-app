import React, { useState, useEffect } from "react";
import Sell from "../components/sell";
import Weather from "../components/weather";
import Footer from "../components/footer";

import Loading from "../components/loading";

import { useDebounce } from "react-use";
import { timeConverter, fToC } from "../utils/data";
import getIcon from "../components/icons";

const opApiToken = "3e6ea0a462437df74dd184ef2af4f068";
const opApiUrl = "https://api.openweathermap.org/data/2.5";

const dsApiUrl =
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a78984313e6496a2f5cd733aaa118703";

function IndexPage() {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Suzhou");
  const [search, setSearch] = useState("Suzhou");

  const [, cancel] = useDebounce(
    () => {
      setSearch(city);
    },
    1000,
    [city]
  );

  useEffect(() => {
    async function fetchData() {
      if (!search) return;
      const res = await fetch(
        `${opApiUrl}/forecast?q=${search}&appid=${opApiToken}&cnt=1`,
        {
          method: "GET"
        }
      );
      const cityData = await res.json();
      if (!cityData || !cityData.city) {
        setIsLoading(false);
        return;
      }
      // console.log(cityData);
      let lat = 31.3114;
      let lon = 120.6181;
      if (cityData && cityData.city && cityData.city.coord) {
        // console.log(cityData);

        if (cityData.city.coord) {
          const coord = cityData.city.coord;
          lat = coord.lat;
          lon = coord.lon;
        }

        const res = await fetch(`${dsApiUrl}/${lat},${lon}`, {
          method: "GET"
        });
        const weatherData = await res.json();
        let days = [];
        // console.log(weatherData);
        if (weatherData.daily && weatherData.daily.data) {
          weatherData.daily.data.forEach((item, index) => {
            if (index <= 4) {
              days[index] = {
                time: timeConverter(item.time),
                min: fToC(item.temperatureMin).toFixed(0),
                max: fToC(item.temperatureMax).toFixed(0),
                icon: getIcon(item.icon),
                iconStr: item.icon
              };
            }
          });
          setDays(days);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchData();
  }, [search]);

  return (
    <div className="text-white bg-gray-500 overflow-y-auto h-full md:h-screen font-light">
      <div className="bg-app-primary h-full mx-auto pb-4 max-w-sm">
        <h2 className="text-app-five font-semibold text-2xl text-center pt-6 mb-4">
          Weather in your city
        </h2>
        <header className=" flex flex-col text-center items-center">
          <div className="relative w-full h-8  px-6 mb-4">
            <div className="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
              <svg
                className="h-4 w-4 fill-current text-gray-600"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
            <input
              onChange={({ currentTarget }) => {
                if (currentTarget.value) {
                  setIsLoading(true);
                }
                setDays([]);
                setCity(currentTarget.value);
              }}
              value={city}
              type="search"
              placeholder="Enter search "
              className="block w-full bg-app-four focus:outline-none focus:bg-app-four focus:shadow focus:text-white text-gray-700 font-bold rounded-sm pl-12 pr-4 py-3"
            ></input>
          </div>
        </header>
        <main>
          <Loading isLoading={isLoading} search={search} />

          {days.length > 0 ? (
            <div>
              <Sell items={days} />
              <Weather items={days} />
            </div>
          ) : (
            <div className="" style={{ minHeight: "75vh" }}>
              {isLoading ? null : (
                <div>
                  {city === "" ? null : (
                    <div className="bg-app-four rounded-sm mx-6 my-8 px-4 py-4">
                      <h2 className="text-center mx-auto my-12 text-xl text-gray-400">
                        not data
                      </h2>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
