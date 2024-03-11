import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from './../pages/Homepage/service/mutation/useLogin';
import { useGetusers } from '../pages/Homepage/service/query/useGetusers';
import { saveState } from '../storage/storage';
import { useRegister } from './../pages/Homepage/service/mutation/useRegister';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const { mutate:mutatelogin } = useLogin();
    const { mutate } = useRegister();
    const [active,setActive] = useState(false)
    const navigate = useNavigate();
    

    const submit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                saveState("user", data)
                
                reset();
            }
        })
    }
    const login = (data) => {
      mutatelogin(data, {
            onSuccess: (data) => {
                saveState("user", data)
                navigate("/about")
                reset();
            }
        })
    }
    return (
        <div>
          { active ? 
            <form onSubmit={handleSubmit(submit)} >
            <h1 className="text-center text-3xl mb-3">Зарегистрироваться</h1>
  
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex flex-col">
                <label htmlFor="name">Имя</label>
                <input
                  id="name"
                  className="border  border-black outline-none p-2 rounded-md"
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="Имя"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Электронная почта</label>
                <input
                  id="email"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Электронная почта"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Пароль</label>
                <input
                  id="password"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("password", { required: true })}
                  type="password"
                  placeholder='Пароль'
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("phone", { required: true })}
                  type="number"
                  placeholder='+998'
                />
              </div>
              <button className="bg-yellow-400 p-3 ">
                  Зарегистрироваться
              </button>
              <button className="bg-white border border-black hover:bg-slate-200 p-3 text-[#281800] font-[500] text-md" onClick={() => setActive(false)}>Войти</button>

            </div>
          </form>
           : 
           <form onSubmit={handleSubmit(login)}>
           <h1 className='text-center font-[500] text-2xl'>Войти или создать профиль</h1>
             <div className="flex flex-col gap-3 mt-2">
               <div className="flex flex-col gap-2">
                 <label htmlFor="email" className='text-[#808080] font-[400] text-md'>Электронная почта</label>
                 <input
                   id="email"
                   className="border border-[#808080] outline-none p-2 "
                   {...register("email", { required: true })}
                   type="email"
                   
                 />
               </div>
               <div className="flex flex-col gap-2">
                 <label htmlFor="password" className='text-[#808080] font-[400] text-md'>Пароль</label>
                 <input
                   id="password"
                   className="border border-[#808080] outline-none p-2 "
                   {...register("password", { required: true })}
                   type="password"

                 />
               </div>
               <div className='flex items-end justify-end'>
                 <p  className='text-[#808080] font-[400] text-md cursor-pointer'>Забыли пароль?</p>
               </div>
               <button type='submit' className="bg-[#FEEE00] hover:bg-yellow-300 p-3 text-[#281800] font-[500] text-md">Войти</button>
               <button className="bg-white border border-black hover:bg-slate-200 p-3 text-[#281800] font-[500] text-md" onClick={() => setActive(true)}>Зарегистрироваться</button>
 
             </div>
           </form>
          }
        </div>
    )
}

export default Form
