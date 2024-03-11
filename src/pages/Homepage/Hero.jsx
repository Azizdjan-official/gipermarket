import React from "react";
import Slider from "react-slick";
import { useGetbanner } from "./service/query/useGetbanner";
import { SampleNextArrow, SamplePrevArrow } from "./Arrow";


export default function SimpleSlider() {
  const { data } = useGetbanner();


  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
  };
  return (
    <div className="h-[70vh] border bg-slate-200">
      <Slider className="w-full h-full" {...settings}>
        {data?.map((item, id) => <div key={id}><img className="w-full h-[100%]" src={item.img} /></div>)}
      </Slider>
    </div>
  );
}