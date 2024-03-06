import React, { useEffect } from 'react'
import { request } from '../../config/request';

const Action = () => {

    const [data,setData] = React.useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await request.get("/action");
                setData(res.data)
            }
            catch(error){
                console.log(error);
            }
        };
        fetchData()
    },[])
  return (
    <div className='bg-[#FEEE00] flex flex-col px-6 py-4 gap-4'>
        <h1 className='text-[#281800] font-[600] text-2xl'>Акции</h1>
        <div className='flex justify-between items-center'>
        {data?.map((item)=> <div className='w-[30%]' key={item.image}><img className='w-full h-full' src={item.image} /></div>)}
        </div>
    </div>
  )
}

export default Action
