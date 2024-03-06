import React from 'react'
import Headerlogoicon from './../../icons/Headerlogoicon';
import Facebook from './../../icons/Facebook';
import Odnoklassniki from './../../icons/Odnoklassniki';
import Vkmbot from './../../icons/Vkmbot';
import Youtube from './../../icons/Youtube';
import Instagram from './../../icons/Instagram';

const Footer = () => {
  return (
    <div className='my-4'>
      <footer className='flex justify-between bg-[#F5F5F6] py-12 px-8'>
        <div className='flex flex-col gap-1'>
            <Headerlogoicon/>
            <p className='text-[#333333] font-[500] text-xl'>+99 893 374-66-44</p>
            <p className='text-[#333333] font-[400] text-sm'>справочная служба</p>
            <p className='text-[#333333] font-[500] text-xl'>+99 890 253-77-53</p>
            <p className='text-[#333333] font-[400] text-sm'>интернет-магазин</p>
            <p className='text-[#333333] font-[600] text-sm'>Оставайтесь на связи</p>
            <div className='flex gap-2'>
                <Facebook/>
                <Odnoklassniki/>
                <Vkmbot/>
                <Youtube/>
                <Instagram/>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-[#333333] font-[500] text-sm'>Условия обмена и возврата</p>
            <p className='text-[#333333] font-[500] text-sm'>Каталог</p>
            <p className='text-[#333333] font-[500] text-sm'>О компании</p>
            <p className='text-[#333333] font-[500] text-sm'>Контакты</p>
            <p className='text-[#333333] font-[500] text-sm'>Доставка</p>
            <p className='text-[#333333] font-[500] text-sm'>Оплата</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-[#333333] font-[500] text-sm'>Клиентам</p>
            <p className='text-[#333333] font-[500] text-sm'>Личный кабинет</p>
            <p className='text-[#333333] font-[500] text-sm'>Блог</p>
            <p className='text-[#333333] font-[500] text-sm'>Обратная связь</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-[#333333] font-[500] text-sm'>Информация</p>
            <p className='text-[#333333] font-[500] text-sm'>Пользовательское соглашение</p>
            <p className='text-[#333333] font-[500] text-sm'>Политика конфиденциальности и оферта</p>

        </div>
      </footer>
    </div>
  )
}

export default Footer
