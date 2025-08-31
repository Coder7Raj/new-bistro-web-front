import React from "react";
import FoodCard from "./FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FoodTab({ items }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' mx-4">' + (index + 1) + "</span>";
    },
  };
  //
  // helper: split items into chunks
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  // 6 items per slide (you can change this)
  const slides = chunkArray(items || [], 6);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {slide.map((item) => (
                <FoodCard key={item._id} items={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
