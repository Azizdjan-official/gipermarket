import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register,handleSubmit, reset} = useForm();

    const submit = ()=>{
       alert("Hello Tashkent")
        reset();
    }
  return (
      <form className=' border-white  w-[25vw]  ' onSubmit={handleSubmit(submit)}>
        <div>
            <input className='border w-full my-2 py-2 px-4 rounded-md outline-none' placeholder='Name...' {...register("name", {required:true})} type="text" />
        </div>
        <div>
            <input className='border w-full my-2 py-2 px-4 rounded-md outline-none' placeholder='Email...' {...register("email", {required:true})} type="email" />
        </div>
        <div>
            <input className='border w-full my-2 py-2 px-4 rounded-md outline-none' placeholder='+9989' {...register("phone", {required:true})} type="number" />
        </div>
        <button type='submit' className='bg-cyan-400 text-white font-bold w-full px-3 py-2 my-2 rounded-md'>Register</button>
      </form>
  )
}

export default Form
