import React from "react";

export default function FoodCard({ items }) {
  const { name, recipe, image, price } = items;
  return (
    <div className="flex flex-col justify-center items-center gap-2 shadow-md bg-slate-400 rounded-md">
      <img className="h-full w-full rounded-md" src={image} alt={name} />
      <div className="text-start">
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <div className="flex justify-between items-center w-full px-4 pb-4">
        <p>${price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
}
