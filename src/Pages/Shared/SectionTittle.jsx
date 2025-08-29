import React from "react";

export default function SectionTittle({ subHeading, heading }) {
  return (
    <div className="text-center my-10 mx-auto w-5/6 md:w-3/6">
      <h2 className="text-base text-yellow-600 ">---{subHeading}---</h2>
      <p className="text-white uppercase text-3xl border-y-2 border-yellow-600">
        {heading}
      </p>
    </div>
  );
}
