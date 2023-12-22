
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
//react-rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import Title from "../Title/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";


const Testimonials = () => {
  const axiosPublic = useAxiosPublic();


   const {data: reviews = [], isLoading:loading} = useQuery({
    queryKey: ['reviews'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/reviews');
      return res.data;
    }
   })

   if(loading){
    <Loading></Loading>
  }

  return (
    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className="pt-12 bg-[url('./assets/images/abs-1.jpg')] bg-fixed bg-cover">
      <Title
          heading="Testimonials"
          paragraph="What some of my clients say"
        ></Title>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:w-[80%]">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="">
            <div className="flex flex-col items-center mx-24 mb-16 mt-8">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className=" text-4xl mt-6" />
              <p className="py-8 text-justify">{review.details}</p>
              <img className="rounded-full w-32 h-32" src={review.image} alt="" />
              <h3 className="text-2xl text-[#0064A5] pt-6">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Testimonials;