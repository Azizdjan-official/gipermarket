import React from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from './../pages/Homepage/service/mutation/useLogin';
import { useGetusers } from '../pages/Homepage/service/query/useGetusers';

const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const { mutate } = useLogin();
    // const {data} = useGetusers()

    const getPassword = ()=>{
        console.log("Hi");
    }

    const submit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                console.log(data)
                
                reset();
            }
        })
    }
    return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
          <h1 className='text-center font-[500] text-2xl'>Войти или создать профиль</h1>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex flex-col">
                <label htmlFor="number" className='text-[#808080] font-[400] text-md'>Номер телефона</label>
                <input
                  id="number"
                  className="border border-[#808080] outline-none p-2 "
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="+998"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className='text-[#808080] font-[400] text-md'>Пароль</label>
                <input
                  id="password"
                  className="border border-[#808080] outline-none p-2 "
                  {...register("password", { required: true })}
                  type="password"
                />
              </div>
              <div className='flex items-end justify-end'>
                <p onClick={() => getPassword()} className='text-[#808080] font-[400] text-md cursor-pointer'>Забыли пароль?</p>
              </div>
              <button className="bg-[#FEEE00] hover:bg-yellow-300 p-3 text-[#281800] font-[500] text-md">Войти</button>
              <button className="bg-white border border-black hover:bg-slate-200 p-3 text-[#281800] font-[500] text-md">Зарегистрироваться</button>

            </div>
          </form>
        </div>
    )
}

export default Form
