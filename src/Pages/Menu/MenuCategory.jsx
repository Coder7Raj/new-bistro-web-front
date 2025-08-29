import React from "react";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";

export default function MenuCategory({ items, img, title, subtitle }) {
  return (
    <section>
      <Cover img={img} title={title} subtitle={subtitle}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
