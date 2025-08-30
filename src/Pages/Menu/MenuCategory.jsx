import React from "react";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, img, title, subtitle }) {
  return (
    <section>
      <Cover img={img} title={title} subtitle={subtitle}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center p-2 mt-8">
        <button className="btn border-0 border-b-2 border-white">
          View More
        </button>
      </Link>
    </section>
  );
}
