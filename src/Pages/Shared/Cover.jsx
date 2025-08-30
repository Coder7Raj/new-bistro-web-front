import React from "react";

export default function Cover({ img, title, subtitle }) {
  return (
    <section
      className="hero h-[450px] flex justify-center items-center"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-12 h-full w-full rounded">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
