import React from "react";
import Slider from "react-slick";
import { useGetbanner } from "./service/query/useGetbanner";
import { SampleNextArrow, SamplePrevArrow } from "./Arrow";


export default function SimpleSlider() {
  const { data } = useGetbanner();


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
  };
  return (
    <div className="py-4">
      <Slider className="w-full" {...settings}>
        {data?.map((item, id) => <div key={id}><img className="w-full" src={item.image} /></div>)}
      </Slider>
    </div>
  );
}