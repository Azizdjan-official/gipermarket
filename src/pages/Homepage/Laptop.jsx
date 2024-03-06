import React, { useEffect } from 'react'
import Likebuttonsmall from './../../icons/Likebuttonsmall';
import Korzinkasmall from './../../icons/Korzinkasmall';
import { request } from '../../config/request';
import Slider from "react-slick";

const Laptop = () => {
    const [data,setData] = React.useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await request.get("/laptop");
                setData(res.data)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[])


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
      <h1 className='text-[#333333] font-[600] text-2xl my-4'>Ноутбуки, планшеты и компьютеры</h1>
        
        <div className="slider-container my-8">
      <Slider {...settings}>
      {data?.slice(0, 6).map((item) => 
        <div key={item.id} className='flex gap-4 p-3  '>
                <div className='flex h-[55vh] cursor-pointer justify-between p-4 shadow-md rounded-md'>
                    <div className='flex flex-col justify-between '>
                        <img className='object-scale-down' src={item.img}  />
                        <h1 className='text-[#333333] font-[400] text-md'>{item.title}</h1>
                        {/* <p>{item.image}</p> */}
                        <p className='text-[#333333] font-[600] text-lg'>{item.price} $</p>
                    </div>
                <div className='flex flex-col  items-end px-4 justify-between'>
                        <Likebuttonsmall/>
                        <Korzinkasmall/>
                </div>

                </div>
            </div>
      )}
      </Slider>
    </div>
    </div>
  )
}

export default Laptop






