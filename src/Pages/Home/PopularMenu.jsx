import React from "react";
import SectionTittle from "../Shared/SectionTittle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popularMenu = menu.filter(
    (item) => item.category === "salad" || item.category === "pizza"
  );
  return (
    <section className="flex flex-col justify-center items-center">
      <section className="my-10">
        <SectionTittle
          subHeading={"check out our popular dishes!"}
          heading={"Popular Menu"}
        ></SectionTittle>
        {/* popular menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popularMenu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </section>
      <button className="btn border-0 border-b-2 border-white mb-8">
        View Full Menu
      </button>
    </section>
  );
}
