import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../src/assets/home/slide1.jpg";
import img2 from "../../src/assets/home/slide2.jpg";
import img3 from "../../src/assets/home/slide3.jpg";
import img4 from "../../src/assets/home/slide4.jpg";
import img5 from "../../src/assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <div className="mb-8 md:mb-24 mt-8 lg:mt-20">
    <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"Order Online"}>
    </SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <p className="md:text-3xl text-center uppercase -mt-6 md:-mt-12 lg:-mt-16 text-white opacity-70">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p className="md:text-3xl text-center uppercase -mt-6 md:-mt-12 lg:-mt-16 text-white drop-shadow-2xl opacity-70">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p className="md:text-3xl text-center uppercase -mt-6 md:-mt-12 lg:-mt-16 text-white drop-shadow-2xl opacity-70">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p className="md:text-3xl text-center uppercase -mt-6 md:-mt-12 lg:-mt-16 text-white drop-shadow-2xl opacity-70">Deserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <p className="md:text-3xl text-center uppercase -mt-6 md:-mt-12 lg:-mt-16 text-white drop-shadow-2xl opacity-70">Salads</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
