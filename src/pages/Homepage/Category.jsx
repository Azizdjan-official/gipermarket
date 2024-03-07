import React from "react";
import Slider from "react-slick";
import { useGetcategory } from './service/query/useGetcategory';
import { SampleNextArrow, SamplePrevArrow } from "./Arrow";

function AutoPlay() {

  const { data } = useGetcategory();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
  };
  return (
    <div className="slider-container my-8">
      <Slider {...settings}>
      {data?.map((item)=> <div  key={item.id}>
        <div className="flex bg-[#F6F6F6] items-center justify-between px-3  mx-2 h-[25vh]">
        <div><img className="object-scale-down " src={item.img}  /></div>
        <div><p className="text-[#333333] font-[500]  text-lg">{item.title}</p></div>
        </div>
      </div>)}
      </Slider>
    </div>
  );
}

export default AutoPlay;