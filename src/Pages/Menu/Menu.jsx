import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import mainCover from "../../assets/menu/banner3.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import SectionTittle from "../Shared/SectionTittle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={mainCover}
        title="Our Menu"
        subtitle="Delicious dishes waiting for you"
      ></Cover>
      {/* salad category */}
      <SectionTittle
        subHeading={"Don't miss"}
        heading={"Today's Offers"}
      ></SectionTittle>
      <MenuCategory
        items={salad}
        title={"Salad"}
        subtitle={"Fresh and Healthy"}
        img={saladCover}
      ></MenuCategory>
      {/* dessert category */}

      <MenuCategory
        items={dessert}
        title={"Dessert"}
        subtitle={"Sweet and Delicious"}
        img={dessertCover}
      ></MenuCategory>

      {/* pizza category */}

      <MenuCategory
        items={pizza}
        title={"Pizza"}
        subtitle={"Cheesy and Delicious"}
        img={pizzaCover}
      ></MenuCategory>
      {/* soup category */}

      <MenuCategory
        items={soup}
        title={"Soup"}
        subtitle={"Warm and Comforting"}
        img={soupCover}
      ></MenuCategory>
    </>
  );
}
