import React from "react";
import Category from "./Category";
import Banner from "./Banner";
import PopularMenu from "./PopularMenu";
import Intro from "./Intro";
import Featured from "./Featured";
import Reviews from "./Reviews";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Intro></Intro>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Reviews></Reviews>
    </section>
  );
}
