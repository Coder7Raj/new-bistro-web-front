import React, { useState } from "react";
import Cover from "../Shared/Cover";
import orderFoodBannerImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodTab from "./FoodTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function OrderFood() {
  const categories = ["pizza", "soup", "salad", "dessert", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderFoodBannerImg}
        title="Order Food"
        subtitle="Delicious food delivered to your door"
      ></Cover>
      <section className="my-10">
        {/* <MenuItems /> */}
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Salad</Tab>
            <Tab>Dessert</Tab>
            <Tab>Offered</Tab>
          </TabList>
          <TabPanel>
            <FoodTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <FoodTab items={soup} />
          </TabPanel>
          <TabPanel>
            <FoodTab items={salad} />
          </TabPanel>
          <TabPanel>
            <FoodTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <FoodTab items={offered} />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}
