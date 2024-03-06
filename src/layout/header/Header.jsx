import React from 'react'
import Phonelogoicon from './../../icons/Phonelogoicon';
import Headerlogoicon from './../../icons/Headerlogoicon';
import Userloginicon from './../../icons/Userloginicon';
import Likebutton from './../../icons/Likebutton';
import Korzinkaicon from './../../icons/Korzinkaicon';
import BasicModal from './../../components/Modalbutton';

const Header = () => {
  return (
    <div>
      <div className='flex justify-end items-end bg-[#FCFCFC] py-2 px-12'>
        <div className='flex gap-5 '>
            <a className='text-[#211A1A] font-[400] text-md' href="">Доставка и оплата</a>
            <a className='text-[#211A1A] font-[400] text-md' href="">Пункты выдачи </a>
            <a className='text-[#211A1A] font-[400] text-md' href="">Поддержка</a>
            <span className='flex gap-2 items-center'>
                <Phonelogoicon/>
               <a className='text-[#211A1A] font-[400] text-md' href="">+998 90 253 77 53</a>
            </span>
        </div>
      </div>
      <div className='flex justify-between px-12'>
        <div><Headerlogoicon/></div>
        <button ><BasicModal/></button>
        <form  className='w-[50%]'>
            <input className='outline-none px-4 py-3 border border-[#857372] w-full' type="text" placeholder='Поиск' />
        </form>
        <div className='flex gap-7'>
            <button className='flex flex-col items-center justify-center '>
                <Userloginicon/>
                <p className='text-[#211A1A] font-[400] text-md'>Войти</p>
            </button>
            <button className='flex flex-col items-center justify-center '>
                <Likebutton/>
                <p className='text-[#211A1A] font-[400] text-md'>Избранное</p>
            </button>
            <button className='flex flex-col items-center justify-center '>
                <Korzinkaicon/>
                <p className='text-[#211A1A] font-[400] text-md'>Корзина</p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
