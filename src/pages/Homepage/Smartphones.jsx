import React from 'react'
import Likebuttonsmall from './../../icons/Likebuttonsmall';
import Korzinkasmall from './../../icons/Korzinkasmall';
import Slider from "react-slick";
import { useGetphone } from './service/query/useGetphone';
import SingleCard from '../../components/CardSmartPhone/SingleCard';

const Smartphones = () => {
    const {data}= useGetphone()


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
  return (
    <div className='px-8'>
      <h1 className='text-[#333333] font-[600] text-2xl my-4'>Смартфоны и планшеты</h1>
        
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

export default Smartphones





