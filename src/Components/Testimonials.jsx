import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import {FaQuoteLeft} from 'react-icons/fa'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div>
            <SectionTitle heading='---What Our Clients Say---' subHeading='TESTIMONIALS'></SectionTitle>
            <FaQuoteLeft className="text-black text-7xl mx-auto"/>
            <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map( review => <SwiperSlide key={review._id}>
                <div className="m-20 text-center flex flex-col items-center">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p>{review.details}</p>
                    <h1 className="text-[#CD9003] text-xl">{review.name}</h1>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;