import React from "react";
import bgImage from "../../assets/home/chef-service.jpg";

export default function Intro() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
      className="my-10"
    >
      <div className="bg-black p-10 rounded bg-opacity-40">
        <h1>Welcome to Bistro Boss</h1>
        <p>Your one-stop solution for managing your restaurant's operations.</p>
      </div>
    </div>
  );
}
