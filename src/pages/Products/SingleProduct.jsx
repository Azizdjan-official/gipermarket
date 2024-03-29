import React from 'react'
import useGetAllProducts from './../Homepage/service/query/useGetallProducts';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProduct } from '../../Redux/productReducer';


const SingleProduct = () => {

    const { data, isLoading } = useGetAllProducts();
    const { id } = useParams();
    const product = data?.find((product) => product?.id === parseInt(id));
    const dispatch = useDispatch();
    console.log(product);

    const handleAdd = () => {
        dispatch(addProduct(product));
      };
      return (
        <div>
          <div className="shadow-xl">
            <ul className="container py-3 flex items-center justify-between">
              <li>
                <Link>Смартфоны и планшеты</Link>
              </li>
              <li>
                <Link>Ноутбуки, планшеты и компьютеры</Link>
              </li>
              <li>
                <Link>Техника для дома</Link>
              </li>
              <li>
                <Link>Игры и развлечения</Link>
              </li>
              <li>
                <Link>Телевизоры, Аудио-видео, Hi-Fi</Link>
              </li>
              <li>
                <Link>Фото и видеотехника</Link>
              </li>
              <li>
                <Link>Еще</Link>
              </li>
            </ul>
          </div>
          <div className="container py-6">
            <h1 className="text-3xl font-semibold">{product?.title}</h1>
            {/* <div className="flex gap-9 items-center py-4">
              <span className="flex gap-3 items-center text-green-500">
                <RatingIcon /> (0)
              </span>
              <button className="flex items-center gap-3">
                <HeartIcon /> В избранное
              </button>
            </div> */}
            <div className="border-t-2 py-6 flex items-start justify-between">
              <div className="w-1/3 flex items-center justify-center">
                <img src={product?.img} alt="" />
              </div>
              <div className="w-1/3 items-start">
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-base font-medium">Объем памяти</p>
                  <span className="px-3 py-2 border border-red-600 text-base">
                    {product?.details?.rom} GB
                  </span>
                </div>
                <div>
                  <h1 className="text-lg font-medium py-4">Характеристики</h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <span className="text-base text-gray-500">Цвет:</span>{" "}
                      {product?.details?.color}
                    </li>
                    <li>
                      <span className="text-base text-gray-500">Экран:</span>{" "}
                      {product?.details?.screen}
                    </li>
                    <li>
                      <span className="text-base text-gray-500">
                        Оперативная память:
                      </span>{" "}
                      {product?.details?.ram}GB
                    </li>
                    <li>
                      <span className="text-base text-gray-500">Память:</span>{" "}
                      {product?.details?.rom}GB
                    </li>
                    {product?.details?.cpu ? (
                      <li>
                        <span className="text-base text-gray-500">Процессор:</span>{" "}
                        {product?.details?.cpu}
                      </li>
                    ) : (
                      ""
                    )}
                    {product?.details?.screentype ? (
                      <li>
                        <span className="text-base text-gray-500">
                          Тип матрицы экрана:
                        </span>{" "}
                        {product?.details?.screentype}
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div className="w-1/3 items-start">
                <div className="p-4 flex flex-col gap-5 border-2 w-[340px]">
                  <h2 className="text-gray-500 text-lg line-through font-semibold">
                    74 990.00 Сум
                  </h2>
                  <h1 className="text-4xl font-semibold">{product?.price} Сум</h1>
                  <button className='bg-[#FEEE00] py-3 text-black font-bold' onClick={handleAdd}>
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default SingleProduct
