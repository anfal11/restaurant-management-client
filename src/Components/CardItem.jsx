import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";

const CardItem = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  return (
    <section>
    <SectionTitle
    heading={"Should Try"}
    subHeading={"CHEF RECOMMENDS"}
    >
    </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {card.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card w-80 h-96 bg-base-100 mb-12 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt="foodImage"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.recipe}</p>
                  <p>${item.price}</p>
                  <div className="card-actions">
                    <button className="btn border-b-4 border-b-[#BB8506] text-[#BB8506]">View</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default CardItem;
