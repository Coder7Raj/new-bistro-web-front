import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTittle from "../Shared/SectionTittle";

export default function Category() {
  const images = [slide1, slide2, slide3, slide4, slide5];
  return (
    <>
      <section className="my-10">
        <SectionTittle
          subHeading="From 11:00am to 10:00pm"
          heading="online ordering"
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20 h-[400px] flex items-center"
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-full w-full" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <h3 className="text-4xl text-gray-500 -mt-20 text-center">
                Slide {index + 1}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
