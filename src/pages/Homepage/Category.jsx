import React, { useEffect } from "react";
import Slider from "react-slick";
import { request } from '../../config/request';

function AutoPlay() {


const [data, setData] = React.useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get('/category');
        setData(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container my-8">
      <Slider {...settings}>
      {data?.map((item)=> <div  key={item.id}>
        <div className="flex bg-[#F6F6F6] items-center justify-between px-3  mx-2 h-[30vh]">
        <div><img className="object-scale-down " src={item.image}  /></div>
        <div><p className="text-[#333333] font-[500] text-lg">{item.title}</p></div>
        </div>
      </div>)}
      </Slider>
    </div>
  );
}

export default AutoPlay;