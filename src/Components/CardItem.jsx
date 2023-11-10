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
        slidesPerView={3}
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
              <div className="card w-28 md:w-64 lg:w-80 xl:w-96 h-[700px] md:h-[500px] xl:h-96 bg-base-100 mb-24 lg:mb-12 shadow-xl">
                <figure className="md:px-10 pt-10">
                  <img
                    src={item.image}
                    alt="foodImage"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-base font-bold lg:card-title">{item.name}</h2>
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
