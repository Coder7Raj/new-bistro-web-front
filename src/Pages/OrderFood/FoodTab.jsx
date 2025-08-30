import React from "react";
import FoodCard from "./FoodCard";

export default function FoodTab({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items?.map((item) => (
        <FoodCard key={item._id} items={item}></FoodCard>
      ))}
    </div>
  );
}
