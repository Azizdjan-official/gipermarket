import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Likebuttonsmall from './../../icons/Likebuttonsmall';
import Korzinkasmall from './../../icons/Korzinkasmall';
import { addProduct, removeProduct } from "../../Redux/productReducer";

const SingleCard = (props) => {

  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addProduct(props));
    setShowBtn(!showBtn);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(props));
    setShowBtn(!showBtn);
  };

  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="p-2 flex gap-4 justify-around items-center flex-col w-[214px] h-[323px] border shadow-lg mb-4 rounded-lg">
      <div className="flex items-center justify-center relative">
        <Link to={`/products/${props.id}`}>
          <img className="w-[165px] h-[165px]" src={props.img}  />
        </Link>
        <button className="absolute top-[-10px] right-[-20px]">
          <Likebuttonsmall />
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <Link to={`/products/${props.id}`}>
          <h1 className="text-base">{props.title}</h1>
        </Link>
        <div className="flex gap-3 items-center justify-between">
          <span className="text-lg font-semibold">{props.price} Сум</span>
          {!showBtn ? (
            <button
              className="flex items-center justify-center"
              onClick={handleAddProduct}
            >
              <Korzinkasmall />
            </button>
          ) : (
            <button
              
              className="flex items-center  justify-center"
              onClick={handleRemoveProduct}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;