import React from "react";

export default function Weather({ items }) {
  return (
    <section className=" mt-5">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div
          key={`a${index}`}
          className="bg-app-four rounded-sm mx-6 my-4 px-4 py-4"
        >
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold px-5">Jan 30</div>
            <img
              className="h-12 w-12"
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="icon"
            />
            <div className="text-lg font-semibold px-5">12.6°С</div>
          </div>
        </div>
      ))}
    </section>
  );
}
