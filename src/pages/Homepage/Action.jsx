import React from 'react'
import { useGetaction } from './service/query/useGetaction';

const Action = () => {

    const {data} = useGetaction();

  return (
    <div className='bg-[#FEEE00] flex flex-col px-6 py-4 gap-4'>
        <h1 className='text-[#281800] font-[600] text-2xl'>Акции</h1>
        <div className='flex justify-between items-center'>
        {data?.map((item)=> <div className='w-[30%]' key={item.img}><img className='w-full h-full' src={item.img} /></div>)}
        </div>
    </div>
  )
}

export default Action
