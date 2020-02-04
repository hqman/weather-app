import React, { useState } from "react";
import Sell from "../components/sell";
import Weather from "../components/weather";
import Footer from "../components/footer";

function IndexPage() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="text-white bg-gray-500 overflow-y-auto  md:h-screen font-light">
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
              type="search"
              placeholder="Enter search "
              className="block w-full bg-app-four focus:outline-none focus:bg-app-four focus:shadow focus:text-white text-gray-700 font-bold rounded-sm pl-12 pr-4 py-3"
            ></input>
          </div>
        </header>
        <main>
          <Sell />
          <Weather />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
