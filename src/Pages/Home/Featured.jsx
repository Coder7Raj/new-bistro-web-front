import React from "react";
import SectionTittle from "../Shared/SectionTittle";
import featuredImg from "../../assets/home/featured.jpg";

export default function Featured() {
  return (
    <section
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="my-10 bg-fixed"
    >
      <section className="bg-black bg-opacity-70 p-8">
        <SectionTittle
          subHeading={"Check it out"}
          heading={"From our menu"}
        ></SectionTittle>
        <section className="flex gap-10 justify-center items-center p-10">
          <img className="w-72" src={featuredImg} alt="Featured Dish" />
          <div className="flex flex-col items-start justify-start space-y-1">
            <p>March 20, 2023</p>
            <h1>Featured Dish</h1>
            <p className="text-sm flex flex-wrap">
              Delicious and freshly prepared Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <br /> Cum magni rerum eaque sint
              error! Suscipit repellendus totam saepe velit ad?
            </p>
            <button className="btn border-b-2 border-b-white" type="button">
              Order Now
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
