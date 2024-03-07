import React from 'react'
import { useGetbrand } from './service/query/useGetbrands'

const Brands = () => {
    const {data}= useGetbrand();

  return (
    <div className='px-8'>
      <h1 className='text-[#333333] font-[600] text-2xl my-4'>Популярные бренды</h1>
      <div className='grid grid-cols-7 gap-2'>
        
        {data?.map((item)=> <div className='bg-[#F8F8F8] flex items-center justify-center h-[12vh] cursor-pointer' key={item.id}><img className='object-scale-down' src={item.image} alt="" /></div>)}
      </div>
    </div>
  )
}

export default Brands
