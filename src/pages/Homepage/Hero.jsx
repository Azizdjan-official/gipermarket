import React, { useEffect } from "react";
import Slider from "react-slick";
import { request } from './../../config/request';


export default function SimpleSlider() {
    const [data, setData] = React.useState([])

  //   request.get('/banner')
  // .then(res => {
  //   console.log(res.data);
  //   setData(res.data)
  // });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get('/banner');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-4">
      <Slider className="w-full " {...settings}>
      {data?.map((item)=> <div key={item.image}><img className="w-full" src={item.image} /></div>)}
    </Slider>
    </div>
  );
}