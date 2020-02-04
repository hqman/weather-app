import React from "react";

export default function Weather({ items }) {
  return (
    <section className=" mt-5">
      {items &&
        items.map((item, index) => (
          <div
            key={`a${index}`}
            className="bg-app-four rounded-sm mx-6 my-4 px-4 py-4"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold px-5">{item.time}</div>
              <img className="h-16 w-16" src={item.icon} alt="icon" />
              <div className="text-lg font-semibold px-5 flex flex-col justify-center items-center">
                <div className="x">{item.max}&nbsp;&#8451;</div>
                <div className="x"> {item.min}&nbsp;&#8451;</div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
