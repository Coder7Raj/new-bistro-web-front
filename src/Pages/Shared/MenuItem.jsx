import React from "react";

export default function MenuItem({ item }) {
  const { image, name, recipe, price } = item;
  const shortRecipe = truncateText(recipe, 9);

  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] overflow-hidden">
        <img className="w-24 h-24 object-cover" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-1">
        <h3>{name}---------</h3>
        <p>1{shortRecipe}</p>
      </div>
      <span className="text-yellow-600">${price}</span>
    </div>
  );
}
