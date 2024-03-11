import React from 'react'
import Slider from "react-slick";
import { useGetlaptop } from './service/query/useGetlaptop';
import SingleCard from './../../components/CardSmartPhone/SingleCard';

const Laptop = () => {
  
    const { data}= useGetlaptop()
 

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true
      };
  return (
    <div className='px-8'>
      <h1 className='text-[#333333] font-[600] text-2xl my-4'>Ноутбуки, планшеты и компьютеры</h1>
        
        <div className="slider-container my-8">
        <ul>
          <Slider {...settings}>
            {data?.map((item) => (
              <li key={item.id}>
                <SingleCard {...item} />
              </li>
            ))}
          </Slider>
        </ul>
    </div>
    </div>
  )
}

export default Laptop






