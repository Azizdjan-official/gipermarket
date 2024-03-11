import React, { useEffect } from 'react'
import { request } from '../../config/request';
import { useGetphone } from './service/query/useGetphone';
import { useGetlaptop } from './service/query/useGetlaptop';

const Group = () => {
  const {data}= useGetphone();
  const {data:datas} = useGetlaptop()
    
  return (
    <div className='grid grid-cols-3'>
      <div>
        <h1 className='text-[#333333] text-center font-[400] text-2xl'>Смартфоны и планшеты</h1>
        {data?.slice(0,3).map((item) => <div key={item.id} className='flex my-3 cursor-pointer rounded-md hover:shadow-lg p-2 gap-3'>
            <div><img className='w-[140px]  h-[140px]' src={item.img} /></div>
            <div className='flex flex-col justify-between  w-[60%]'>
                <h1 className='text-[#000000] font-[400] text-lg '>{item.title}</h1>
                <p className='text-[#000000] font-[600] text-lg'>{item.price} so'm</p>
            </div>
        </div>)}
      </div>
      <div>
        <h1 className='text-[#333333] text-center font-[400] text-2xl'>Ноутбуки, планшеты и компьютеры</h1>
        {datas?.slice(0,3).map((item) => <div key={item.id} className='flex my-3 cursor-pointer rounded-md hover:shadow-lg p-2 gap-3'>
            <div><img className='w-[140px]  h-[140px]' src={item.img} /></div>
            <div className='flex flex-col justify-between w-[60%]'>
                <h1 className='text-[#000000] font-[400] text-lg'>{item.title}</h1>
                <p className='text-[#000000] font-[600] text-lg'>{item.price}</p>
            </div>
        </div>)}
      </div>
      <div>
        <h1 className='text-[#333333] text-center font-[400] text-2xl'>Смартфоны и планшеты</h1>
        {data?.slice(0,3).map((item) => <div key={item.id} className='flex my-3 cursor-pointer rounded-md hover:shadow-lg p-2 gap-3'>
            <div><img className='w-[140px]  h-[140px]' src={item.img} /></div>
            <div className='flex flex-col justify-between  w-[60%]'>
                <h1 className='text-[#000000] font-[400] text-lg '>{item.title}</h1>
                <p className='text-[#000000] font-[600] text-lg'>{item.price} so'm</p>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default Group
