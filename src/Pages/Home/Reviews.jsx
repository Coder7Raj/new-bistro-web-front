import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Rating from "../Shared/Rating";
import SectionTittle from "../Shared/SectionTittle";

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviewsData(data));
  }, []);

  return (
    <section className="my-10">
      <SectionTittle
        subHeading={"What Our Clients Say"}
        heading={"testimonials"}
      ></SectionTittle>

      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[400px] flex items-center justify-center bg-white text-black"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="h-full w-full p-10 flex flex-col justify-center items-center text-center self-center space-y-4">
                <Rating rating={review.rating} />
                <p className="text-5xl font-bold">''</p>
                <p>{review.review}</p>
                <h3 className="text-3xl text-yellow-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
