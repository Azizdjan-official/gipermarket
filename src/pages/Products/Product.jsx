import React from 'react'
import SingleCard from './../../components/CardSmartPhone/SingleCard';
import {useGetKompyuter } from '../Homepage/service/query/useGetKompyuter';
import { useGetFilter } from './../Homepage/service/query/useGetFilter';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter } from '../../Redux/filterReducer';

const Products = () => {
  const {data: filteredData, isLoading} = useGetFilter();
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.filter);
  const {data} = useGetKompyuter(value);
  const attr =  filteredData?.map((item)=> item.attributes)?.flat();


  const changeParams = (value,keyName)=>{
    dispatch(createFilter({value,keyName}))
  }
  return (
    <div className='flex py-8'>
      <form className='w-[20%] border'>
        {attr?.map((item,i) => <div key={i}>
            <h2>{item.name}</h2>
            {item.values.map((value,i)=> <div key={i}>
                <input onChange={() => changeParams(value, item.keyName)} name={item.keyName} value={value} id={i} type='radio' />
                <label  htmlFor={i}>{value}</label>
            </div>)}
        </div>)}
        <button type='reset'>reset</button>
      </form>
      <div className='w-[80%] grid grid-cols-5 '>
              {data?.map((item) => (
                <div key={item.id}>
                  <SingleCard {...item} />
                </div>
              ))}
      </div>
      
    </div>
  )
}

export default Products